Sure! Let's break down the Redux pattern into very simple terms using a relatable analogy.

### Redux Pattern in Simple Terms

#### The Problem

Imagine you have a classroom of students (your application) and a teacher (your state management). The students need to keep track of their assignments (application state) and sometimes need to update their assignment status (state changes).

#### The Solution: Redux Pattern

1. **Store**:

   - Think of the store as a big chalkboard in the classroom where the current status of all assignments is written. This chalkboard is the single source of truth for the entire class.
   - **Example**: The chalkboard shows which assignments are completed and which are still pending.

2. **Actions**:

   - Actions are like notes students pass to the teacher to request changes to the assignment status. These notes always have a type (what kind of change) and sometimes additional information (details of the change).
   - **Example**: A note that says, "Mark Assignment 1 as completed."

3. **Reducers**:

   - Reducers are like the teacher's rules for updating the chalkboard. When the teacher gets a note (action), they follow a specific set of rules to update the chalkboard (state).
   - **Example**: The teacher sees the note saying, "Mark Assignment 1 as completed," and changes the status of Assignment 1 on the chalkboard to "completed."

4. **Selectors**:

   - Selectors are like the students asking the teacher for information about the assignments. The teacher reads the chalkboard and tells the students what they need to know.
   - **Example**: A student asks, "What is the status of Assignment 1?" The teacher looks at the chalkboard and replies, "It's completed."

5. **Effects**:
   - Effects are like special tasks that the teacher needs to do outside the classroom when they receive a certain note. After completing the task, they might update the chalkboard or send another note.
   - **Example**: The teacher receives a note to fetch assignment details from the school office. The teacher goes to the office, gets the details, and then updates the chalkboard with the new information.

### Simple Example

#### 1. Store

- A single place to hold the current state of assignments.

```typescript
let chalkboard = {
  assignments: [],
};
```

#### 2. Actions

- Notes students send to the teacher.

```typescript
const addAssignment = { type: "ADD_ASSIGNMENT", payload: "Assignment 1" };
const completeAssignment = { type: "COMPLETE_ASSIGNMENT", payload: "Assignment 1" };
```

#### 3. Reducers

- Rules the teacher follows to update the chalkboard.

```typescript
function reducer(state = chalkboard, action) {
  switch (action.type) {
    case "ADD_ASSIGNMENT":
      return {
        ...state,
        assignments: [...state.assignments, { name: action.payload, completed: false }],
      };
    case "COMPLETE_ASSIGNMENT":
      return {
        ...state,
        assignments: state.assignments.map((assignment) => (assignment.name === action.payload ? { ...assignment, completed: true } : assignment)),
      };
    default:
      return state;
  }
}
```

#### 4. Selectors

- Students asking the teacher for assignment information.

```typescript
function selectAssignments(state) {
  return state.assignments;
}
```

#### 5. Effects

- Special tasks outside the classroom (optional in simple examples).

```typescript
// Not shown in simple terms, but imagine it as tasks like fetching data from a server.
```

### How It Works Together

1. **Initialize State**:

   - The chalkboard starts with an empty list of assignments.

2. **Dispatch Actions**:

   - A student sends a note to add a new assignment.
   - `store.dispatch(addAssignment)`

3. **Reducer Processes Action**:

   - The teacher follows the rule to add the assignment to the chalkboard.

4. **Update State**:

   - The chalkboard now shows the new assignment.

5. **Select State**:
   - A student asks for the list of assignments.
   - `selectAssignments(store.getState())`

### Code in Action

```typescript
// Initial state
let state = chalkboard;

// Dispatch actions
state = reducer(state, addAssignment);
state = reducer(state, completeAssignment);

// Select state
const assignments = selectAssignments(state);
console.log(assignments);
```

Output:

```json
[{ "name": "Assignment 1", "completed": true }]
```

### Conclusion

The Redux pattern helps manage state in a predictable way by centralizing the state, using actions to describe changes, reducers to handle changes, and selectors to read the state. It's like having a well-organized classroom where everyone knows how to update and access the chalkboard efficiently.

---

Certainly! Here's a simple TODO application in JavaScript using the Redux pattern without any external packages.

### Step 1: Define the Action Types

```javascript
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
```

### Step 2: Define Action Creators

```javascript
function addTodo(text) {
  return {
    type: ADD_TODO,
    payload: text,
  };
}

function removeTodo(index) {
  return {
    type: REMOVE_TODO,
    payload: index,
  };
}

function toggleTodo(index) {
  return {
    type: TOGGLE_TODO,
    payload: index,
  };
}
```

### Step 3: Define the Reducer

```javascript
const initialState = {
  todos: [],
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { text: action.payload, completed: false }],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((_, idx) => idx !== action.payload),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, idx) => (idx === action.payload ? { ...todo, completed: !todo.completed } : todo)),
      };
    default:
      return state;
  }
}
```

### Step 4: Create the Store

```javascript
function createStore(reducer) {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };

  dispatch({}); // Initialize the state

  return { getState, dispatch, subscribe };
}

const store = createStore(todoReducer);
```

### Step 5: UI Components and Render Function

```javascript
function render() {
  const todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";

  const state = store.getState();
  state.todos.forEach((todo, index) => {
    const todoItem = document.createElement("li");
    todoItem.textContent = todo.text;
    todoItem.style.textDecoration = todo.completed ? "line-through" : "none";

    todoItem.addEventListener("click", () => {
      store.dispatch(toggleTodo(index));
    });

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      store.dispatch(removeTodo(index));
    });

    todoItem.appendChild(removeButton);
    todoList.appendChild(todoItem);
  });
}

store.subscribe(render);
render();
```

### Step 6: Handle User Input

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Simple TODO App</title>
  </head>
  <body>
    <h1>TODO App</h1>
    <input type="text" id="todo-input" placeholder="Enter a todo" />
    <button id="add-todo">Add TODO</button>
    <ul id="todo-list"></ul>

    <script>
      // The JavaScript code (all steps) goes here.
    </script>
  </body>
</html>
```

### Step 7: Add Event Listeners to Handle User Input

```javascript
document.getElementById("add-todo").addEventListener("click", () => {
  const input = document.getElementById("todo-input");
  const text = input.value.trim();
  if (text) {
    store.dispatch(addTodo(text));
    input.value = "";
  }
});
```

### Complete Code in One Block

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Simple TODO App</title>
  </head>
  <body>
    <h1>TODO App</h1>
    <input type="text" id="todo-input" placeholder="Enter a todo" />
    <button id="add-todo">Add TODO</button>
    <ul id="todo-list"></ul>

    <script>
      // Action Types
      const ADD_TODO = "ADD_TODO";
      const REMOVE_TODO = "REMOVE_TODO";
      const TOGGLE_TODO = "TOGGLE_TODO";

      // Action Creators
      function addTodo(text) {
        return {
          type: ADD_TODO,
          payload: text,
        };
      }

      function removeTodo(index) {
        return {
          type: REMOVE_TODO,
          payload: index,
        };
      }

      function toggleTodo(index) {
        return {
          type: TOGGLE_TODO,
          payload: index,
        };
      }

      // Reducer
      const initialState = {
        todos: [],
      };

      function todoReducer(state = initialState, action) {
        switch (action.type) {
          case ADD_TODO:
            return {
              ...state,
              todos: [...state.todos, { text: action.payload, completed: false }],
            };
          case REMOVE_TODO:
            return {
              ...state,
              todos: state.todos.filter((_, idx) => idx !== action.payload),
            };
          case TOGGLE_TODO:
            return {
              ...state,
              todos: state.todos.map((todo, idx) => (idx === action.payload ? { ...todo, completed: !todo.completed } : todo)),
            };
          default:
            return state;
        }
      }

      // Store
      function createStore(reducer) {
        let state;
        let listeners = [];

        const getState = () => state;

        const dispatch = (action) => {
          state = reducer(state, action);
          listeners.forEach((listener) => listener());
        };

        const subscribe = (listener) => {
          listeners.push(listener);
          return () => {
            listeners = listeners.filter((l) => l !== listener);
          };
        };

        dispatch({}); // Initialize the state

        return { getState, dispatch, subscribe };
      }

      const store = createStore(todoReducer);

      // Render Function
      function render() {
        const todoList = document.getElementById("todo-list");
        todoList.innerHTML = "";

        const state = store.getState();
        state.todos.forEach((todo, index) => {
          const todoItem = document.createElement("li");
          todoItem.textContent = todo.text;
          todoItem.style.textDecoration = todo.completed ? "line-through" : "none";

          todoItem.addEventListener("click", () => {
            store.dispatch(toggleTodo(index));
          });

          const removeButton = document.createElement("button");
          removeButton.textContent = "Remove";
          removeButton.addEventListener("click", (e) => {
            e.stopPropagation();
            store.dispatch(removeTodo(index));
          });

          todoItem.appendChild(removeButton);
          todoList.appendChild(todoItem);
        });
      }

      store.subscribe(render);
      render();

      // Handle User Input
      document.getElementById("add-todo").addEventListener("click", () => {
        const input = document.getElementById("todo-input");
        const text = input.value.trim();
        if (text) {
          store.dispatch(addTodo(text));
          input.value = "";
        }
      });
    </script>
  </body>
</html>
```

### Explanation

1. **HTML Structure**: Basic structure with an input field, a button, and an unordered list to display TODOs.
2. **Action Types**: Defined constants for action types.
3. **Action Creators**: Functions that create actions.
4. **Reducer**: A function that takes the current state and an action, and returns a new state based on the action type.
5. **Store**: A function to create a store that manages state and allows state changes through dispatching actions.
6. **Render Function**: Updates the DOM based on the current state.
7. **Event Listeners**: Handle user input and dispatch actions to update the state.

This implementation demonstrates the core concepts of the Redux pattern in a simple JavaScript TODO application.

---

# NGRX

---

Certainly! Here's an in-depth explanation of the `@ngrx/store` in Angular and how it works behind the scenes:

### Overview of `@ngrx/store`

`@ngrx/store` is a state management library for Angular applications, inspired by Redux from the React ecosystem. It provides a single, centralized store for managing the state of an application in a predictable manner. The core concepts include actions, reducers, selectors, and effects.

### Core Concepts

1. **Actions**: Actions are plain objects that describe an event that has occurred and contains a type and optional payload. Actions are dispatched to the store to initiate changes.

   ```typescript
   export const increment = createAction("[Counter Component] Increment");
   ```

2. **Reducers**: Reducers are pure functions that take the current state and an action as arguments and return a new state. They define how the state changes in response to actions.

   ```typescript
   const _counterReducer = createReducer(
     initialState,
     on(increment, (state) => ({ ...state, count: state.count + 1 }))
   );

   export function counterReducer(state: State | undefined, action: Action) {
     return _counterReducer(state, action);
   }
   ```

3. **Selectors**: Selectors are pure functions used to extract and derive pieces of state. They allow querying the state from the store in a performant way.

   ```typescript
   export const selectFeature = (state: AppState) => state.feature;
   ```

4. **Effects**: Effects handle side effects such as HTTP requests. They listen for specific actions and perform tasks, then dispatch new actions as needed.

   ```typescript
   @Injectable()
   export class CounterEffects {
     loadCount$ = createEffect(() =>
       this.actions$.pipe(
         ofType(loadCount),
         mergeMap(() =>
           this.counterService.getCount().pipe(
             map((count) => loadCountSuccess({ count })),
             catchError(() => of(loadCountFailure()))
           )
         )
       )
     );

     constructor(private actions$: Actions, private counterService: CounterService) {}
   }
   ```

### How `@ngrx/store` Works Behind the Scenes

1. **Store**: The store is a single JavaScript object that holds the entire state of the application. It acts as the source of truth.

   - **State Tree**: The state is organized as a tree, where each branch represents a different part of the application state.
   - **Immutable State**: State is immutable, meaning it cannot be modified directly. Instead, a new copy of the state is created with the necessary changes.

2. **Dispatching Actions**: When an action is dispatched, it is sent to the store.

   - **Action Stream**: Actions are dispatched as part of an observable stream. The store subscribes to this stream and processes each action sequentially.

3. **Reducers**: When the store receives an action, it passes the current state and the action to the appropriate reducer(s).

   - **Pure Functions**: Reducers are pure functions, which means they do not produce side effects and always produce the same output given the same input.
   - **Combining Reducers**: Multiple reducers can be combined into a single reducer using `combineReducers`.

4. **State Updates**: The reducer processes the action and returns a new state.

   - **State Changes**: The state changes are captured in a new state object. The old state remains unchanged (immutable).
   - **State Tree Update**: Only the affected parts of the state tree are updated, while other parts remain the same.

5. **Selectors**: Components use selectors to query the store for the necessary state.

   - **Memoization**: Selectors are memoized, meaning they cache their results to avoid recomputation if the state has not changed.

6. **Effects**: Effects listen for dispatched actions and perform side effects such as API calls.

   - **Observable Streams**: Effects leverage RxJS to handle asynchronous operations and side effects.
   - **Dispatching New Actions**: After performing side effects, effects can dispatch new actions to the store, initiating further state changes.

### Example

Here is a simple example to demonstrate the flow:

**Actions:**

```typescript
export const increment = createAction("[Counter] Increment");
export const decrement = createAction("[Counter] Decrement");
export const reset = createAction("[Counter] Reset");
```

**Reducer:**

```typescript
export interface State {
  count: number;
}

export const initialState: State = {
  count: 0,
};

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({ ...state, count: state.count + 1 })),
  on(decrement, (state) => ({ ...state, count: state.count - 1 })),
  on(reset, (state) => ({ ...state, count: 0 }))
);

export function counterReducer(state: State | undefined, action: Action) {
  return _counterReducer(state, action);
}
```

**Selectors:**

```typescript
export const selectCounterState = (state: AppState) => state.counter;
export const selectCount = createSelector(selectCounterState, (state: State) => state.count);
```

**Component:**

```typescript
@Component({
  selector: "app-counter",
  template: `
    <div>
      Current Count: {{ count$ | async }}
      <button (click)="increment()">Increment</button>
      <button (click)="decrement()">Decrement</button>
      <button (click)="reset()">Reset</button>
    </div>
  `,
})
export class CounterComponent {
  count$ = this.store.select(selectCount);

  constructor(private store: Store<AppState>) {}

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
```

This example demonstrates the core flow of `@ngrx/store`, from dispatching actions to handling state changes via reducers and querying state with selectors. By following these principles, `@ngrx/store` helps manage state in a predictable and scalable way in Angular applications.

---

Certainly! Let's build a simplified version of NgRx using RxJS. We will implement the core concepts such as actions, reducers, selectors, and effects. Here's a step-by-step guide:

### Step 1: Actions

Actions are plain objects that describe events.

```typescript
export interface Action {
  type: string;
  payload?: any;
}
```

### Step 2: Reducers

Reducers are pure functions that take the current state and an action, and return a new state.

```typescript
import { Action } from "./action";

export function counterReducer(state: number = 0, action: Action): number {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
}
```

### Step 3: Store

The store holds the state and dispatches actions.

```typescript
import { BehaviorSubject, Observable } from "rxjs";
import { scan, shareReplay } from "rxjs/operators";
import { Action } from "./action";

export class Store<T> {
  private state$: BehaviorSubject<T>;
  private actions$ = new BehaviorSubject<Action>({ type: "INIT" });
  private reducer: (state: T, action: Action) => T;

  constructor(initialState: T, reducer: (state: T, action: Action) => T) {
    this.state$ = new BehaviorSubject(initialState);
    this.reducer = reducer;

    this.actions$
      .pipe(
        scan((state, action) => this.reducer(state, action), initialState),
        shareReplay(1)
      )
      .subscribe(this.state$);
  }

  dispatch(action: Action) {
    this.actions$.next(action);
  }

  select(): Observable<T> {
    return this.state$.asObservable();
  }

  getState(): T {
    return this.state$.getValue();
  }
}
```

### Step 4: Selectors

Selectors are functions that extract specific parts of the state.

```typescript
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

export function select<T, K>(store$: Observable<T>, key: keyof T): Observable<K> {
  return store$.pipe(map((state) => state[key]));
}
```

### Step 5: Effects

Effects handle side effects such as HTTP requests.

```typescript
import { ActionsObservable } from "./actions-observable";
import { filter, mergeMap } from "rxjs/operators";
import { ofType } from "./of-type";
import { Observable, of } from "rxjs";

export class Effects {
  constructor(private actions$: ActionsObservable) {}

  createEffect(actionType: string, callback: (action: Action) => Observable<Action>) {
    this.actions$
      .pipe(
        ofType(actionType),
        mergeMap((action) => callback(action))
      )
      .subscribe((action) => this.actions$.next(action));
  }
}
```

### Step 6: Action Observable and ofType Operator

These utility classes and functions help manage actions in effects.

```typescript
import { Subject } from "rxjs";
import { Action } from "./action";

export class ActionsObservable extends Subject<Action> {}

export function ofType(...types: string[]) {
  return (source: Observable<Action>) => source.pipe(filter((action) => types.includes(action.type)));
}
```

### Putting It All Together

Here's a complete example demonstrating the custom NgRx-like implementation in action.

```typescript
// actions.ts
export const increment = { type: "INCREMENT" };
export const decrement = { type: "DECREMENT" };
export const reset = { type: "RESET" };

// main.ts
import { Store } from "./store";
import { counterReducer } from "./counter-reducer";
import { select } from "./selectors";
import { Effects } from "./effects";
import { ActionsObservable } from "./actions-observable";
import { increment, decrement, reset } from "./actions";
import { of } from "rxjs";
import { delay, map } from "rxjs/operators";

const initialState = { count: 0 };
const store = new Store(initialState, counterReducer);

// Selectors
const count$ = select(store.select(), "count");

// Effects
const actions$ = new ActionsObservable();
const effects = new Effects(actions$);

effects.createEffect("INCREMENT", (action) => of({ type: "DECREMENT" }).pipe(delay(1000)));

count$.subscribe((count) => console.log("Count:", count));

// Dispatch actions
store.dispatch(increment);
store.dispatch(increment);
store.dispatch(decrement);
store.dispatch(reset);
```

### Explanation

1. **Actions**: Defined as plain objects with a type and optional payload.
2. **Reducer**: A pure function that takes the current state and an action, and returns a new state.
3. **Store**: Manages the state, allows dispatching actions, and selects state slices.
4. **Selectors**: Functions to extract specific parts of the state.
5. **Effects**: Handle side effects using RxJS operators.

This implementation covers the basic principles behind NgRx using RxJS, providing a foundation for more complex state management in Angular applications.

---

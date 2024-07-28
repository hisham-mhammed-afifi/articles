NgRx هو مجموعة من المكتبات للـ Angular، مستوحاة من Redux، وبتدير الحالة (state) والتأثيرات الجانبية (side effects) في تطبيقات Angular. هنا هتلاقي توضيح لأهم المفاهيم الأساسية في NgRx:

### 1. State

**State** في NgRx معناها بيانات التطبيق في وقت معين. هيكل بيانات ثابت بيمثل حالة التطبيق بالكامل. الحالة دي بتدير في store مركزي، عشان يكون أسهل إدارة وتتبع التغييرات.

### 2. Store

**Store** هو حاوية الحالة العالمية اللي بتحفظ حالة التطبيق. بيكون كمصدر وحيد للحقيقة، بيسمح لأجزاء مختلفة من التطبيق بالوصول وتعديل state بشكل متوقع.

### 3. Actions

**Actions** هي تحميلات معلومات اللي بتبعت البيانات من تطبيقك للـ Store. هي الطريقة الوحيدة للتواصل مع الـ Store، وبتوصف اللي حصل. كل action ليه نوع وممكن يكون ليه بيانات محملة (payload). Actions بيتم إرسالها للـ Store، وبتبدأ تغيرات في state.

### 4. Reducers

**Reducers** هي pure functions بتاخد الحالة الحالية والـ action كـ مدخلات وبترجع حالة جديدة. هي اللي بتحدد ازاي حالة التطبيق بتتغير استجابةً للـ actions اللي بتتبعت للـ Store. Reducers بيشتغلوا كمعالجات لانتقال الحالة.

### 5. Selectors

**Selectors** هي pure functions بتستخدم لاستخراج أجزاء من الحالة من الـ Store. بتسمحلك انك تحصل على أجزاء معينة من الحالة بشكل قابل لإعادة الاستخدام والصيانة. Selectors ممكن تتجمع عشان تستخرج بيانات أكتر تعقيدًا.

### 6. Effects

**Effects** بتستخدم لمعالجة التأثيرات الجانبية في NgRx. بتسمع للـ actions اللي بتتبعت للـ Store وبتقوم بمهام زي العمليات الغير متزامنة، وبعدين تبعت actions جديدة بناءً على النتيجة. Effects بتسمح للفصل بين المنطق المعقد والمكونات والـ reducers، وتحافظ عليهم نظيفين ومركزين.

### 7. Entity

**NgRx Entity** هي مكتبة إضافية في نظام NgRx اللي بتسهل إدارة مجموعات من الكيانات. بتوفر دوال مساعدة لتقليل الأكواد المكررة لما تشتغل مع المجموعات في الـ Store، زي إضافة، تحديث وحذف الكيانات.

### 8. Store Module

**Store Module** هو الوحدة الرئيسية اللي بتضبط الـ Store لتطبيقك. بتستورد الـ reducers وبتحدد الحالة الأولية.

### Workflow in NgRx

1. **Action Dispatching**: بيتم إرسال action من مكون أو خدمة.
2. **Reducer Handling**: الـ reducer بيمسك الـ action وبيحدث الحالة.
3. **Store Update**: الـ Store بيحفظ الحالة الجديدة.
4. **Selector Querying**: Selectors بتستخدم لاستخراج الحالة المطلوبة من الـ Store.
5. **Effect Handling** (لو لازم): Effects بتسمع لـ actions معينة لمعالجة التأثيرات الجانبية زي مكالمات الـ API، وبعدين تبعت actions جديدة بناءً على النتيجة.

### مثال لكل مفهوم

#### Action

```typescript
export const loadItems = createAction("[Items] Load Items");
```

#### Reducer

```typescript
export const itemsReducer = createReducer(
  initialState,
  on(loadItems, (state) => ({
    ...state,
    loading: true,
  }))
);
```

#### Selector

```typescript
export const selectItems = createSelector(
  (state: AppState) => state.items,
  (itemsState: ItemsState) => itemsState.items
);
```

#### Effect

```typescript
@Injectable()
export class ItemsEffects {
  loadItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadItems),
      mergeMap(() =>
        this.itemsService.getAll().pipe(
          map((items) => loadItemsSuccess({ items })),
          catchError((error) => of(loadItemsFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private itemsService: ItemsService) {}
}
```

باختصار، NgRx بيوفر إطار عمل قوي لإدارة الحالة المعقدة والتأثيرات الجانبية في تطبيقات Angular. بفهم واستخدام المفاهيم دي، المطورين يقدروا يعملوا تطبيقات قابلة للتطوير والصيانة والتوقع.

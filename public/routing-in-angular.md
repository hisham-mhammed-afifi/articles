<details>
    <summary>Angular routing</summary>

    Angular's routing architecture is a core feature that enables navigation within a single-page application (SPA). It provides a way to map URLs to components, manage navigation, and handle various aspects of the app's state and data. Let's break down how Angular's routing works and its architecture:

### 1. **Router Module**

Angular's Router module is the core component that facilitates routing. It needs to be imported into your application module:

```typescript
import { RouterModule, Routes } from "@angular/router";
```

### 2. **Routes Configuration**

Routes are configured as an array of objects, each defining a path and the component that should be displayed when that path is accessed.

```typescript
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "**", component: PageNotFoundComponent }, // Wildcard route for a 404 page
];
```

### 3. **RouterModule.forRoot**

The `RouterModule.forRoot()` method is used to initialize the router with your defined routes. This is typically done in the root module (`AppModule`).

```typescript
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

### 4. **Router Outlet**

The `<router-outlet>` directive acts as a placeholder for the components based on the current route. It's placed in the main template, usually `app.component.html`.

```html
<router-outlet></router-outlet>
```

### 5. **Router Link**

To navigate between routes, Angular provides the `routerLink` directive. It can be used in templates to define navigation links.

```html
<a routerLink="/">Home</a>
<a routerLink="/about">About</a>
<a routerLink="/contact">Contact</a>
```

### 6. **Route Guards**

Route guards are services that can control access to routes. They implement interfaces such as `CanActivate`, `CanDeactivate`, `Resolve`, etc.

```typescript
@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(["/login"]);
      return false;
    }
  }
}
```

### 7. **Lazy Loading**

Lazy loading allows you to load feature modules on demand, which can significantly improve the performance of your application.

```typescript
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", loadChildren: () => import("./about/about.module").then((m) => m.AboutModule) },
  { path: "contact", loadChildren: () => import("./contact/contact.module").then((m) => m.ContactModule) },
];
```

### 8. **Route Parameters**

Route parameters are used to pass data in the URL. They can be accessed in the component using `ActivatedRoute`.

```typescript
const routes: Routes = [{ path: "user/:id", component: UserComponent }];
```

In the component:

```typescript
constructor(private route: ActivatedRoute) {}

ngOnInit() {
  this.route.paramMap.subscribe(params => {
    const id = params.get('id');
    // Use the id as needed
  });
}
```

### 9. **Handling Route Events**

You can subscribe to router events to handle actions such as navigation starts, ends, and errors.

```typescript
import { Router, NavigationStart, NavigationEnd, NavigationError, Event } from '@angular/router';

constructor(private router: Router) {
  this.router.events.subscribe((event: Event) => {
    if (event instanceof NavigationStart) {
      // Show loading indicator
    }

    if (event instanceof NavigationEnd) {
      // Hide loading indicator
    }

    if (event instanceof NavigationError) {
      // Hide loading indicator
      // Present error to user
      console.log(event.error);
    }
  });
}
```

### 10. **Route Data**

You can pass static data to routes which can be useful for providing additional context.

```typescript
const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    data: { role: 'admin' }
  }
];

// Accessing route data in the component
constructor(private route: ActivatedRoute) {}

ngOnInit() {
  this.route.data.subscribe(data => {
    console.log(data.role); // 'admin'
  });
}
```

</details>

<details>
    <summary>Routing guard</summary>

    When dealing with a large number of feature modules (more than 200), it's crucial to have a scalable and maintainable routing architecture. Here’s a comprehensive approach:

### Best Practices for Routing Architecture

#### 1. **Modular Approach with Lazy Loading**

Divide your application into feature modules, and use lazy loading to load these modules only when needed. This approach helps in reducing the initial load time and improving the performance.

#### 2. **Route Grouping**

Group related routes together in feature modules. Each feature module should have its own routing module that defines its routes.

```typescript
const routes: Routes = [
  { path: "feature1", loadChildren: () => import("./feature1/feature1.module").then((m) => m.Feature1Module) },
  { path: "feature2", loadChildren: () => import("./feature2/feature2.module").then((m) => m.Feature2Module) },
  // Add more feature routes here
  { path: "**", component: PageNotFoundComponent }, // Wildcard route for a 404 page
];
```

#### 3. **Core and Shared Modules**

- **Core Module**: Include services that are singleton throughout the application.
- **Shared Module**: Include components, directives, and pipes used across multiple modules.

#### 4. **Feature Modules**

Each feature module should be self-contained with its own routing and lazy loaded.

```typescript
@NgModule({
  imports: [CommonModule, Feature1RoutingModule],
  declarations: [Feature1Component],
})
export class Feature1Module {}
```

### Dynamic Authorization Handling

To handle authorization dynamically, you can use route guards combined with a central authorization service.

#### 1. **Authorization Service**

Create an authorization service that will check the user’s permissions.

```typescript
@Injectable({
  providedIn: "root",
})
export class AuthService {
  private userPermissions: string[] = [];

  constructor(private http: HttpClient) {}

  loadUserPermissions() {
    // Load permissions from an API or other sources
    this.http.get<string[]>("api/permissions").subscribe((permissions) => {
      this.userPermissions = permissions;
    });
  }

  hasPermission(permission: string): boolean {
    return this.userPermissions.includes(permission);
  }
}
```

#### 2. **Route Guards**

Implement `CanActivate` guard to protect routes based on permissions.

```typescript
@Injectable({
  providedIn: "root",
})
export class PermissionGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const requiredPermission = route.data.permission;
    if (this.authService.hasPermission(requiredPermission)) {
      return true;
    } else {
      // Redirect to an unauthorized page or home
      this.router.navigate(["/unauthorized"]);
      return false;
    }
  }
}
```

#### 3. **Defining Routes with Guards**

Define routes with guards in your feature modules.

```typescript
const routes: Routes = [
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [PermissionGuard],
    data: { permission: "admin" },
  },
  {
    path: "user",
    component: UserComponent,
    canActivate: [PermissionGuard],
    data: { permission: "user" },
  },
];
```

</details>

<details>
    <summary>Advanced features</summary>

    Advanced Angular routing features provide powerful tools for handling complex navigation scenarios in your applications. Here are some key features and their real-world use cases:

### 1. **Lazy Loading with Preloading**

**Use Case**: Improve application performance by loading only necessary modules initially but preloading others in the background.

```typescript
const routes: Routes = [
  { path: "feature1", loadChildren: () => import("./feature1/feature1.module").then((m) => m.Feature1Module) },
  { path: "feature2", loadChildren: () => import("./feature2/feature2.module").then((m) => m.Feature2Module), data: { preload: true } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

### 2. **Nested Routes and Auxiliary Routes**

**Use Case**: Creating a dashboard with multiple panels that can be navigated independently.

```typescript
const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      { path: "panel1", component: Panel1Component },
      { path: "panel2", component: Panel2Component },
    ],
  },
  { path: "settings", component: SettingsComponent, outlet: "sidebar" },
];
```

### 3. **Route Guards (CanActivate, CanDeactivate, Resolve, etc.)**

**Use Case**: Prevent access to certain routes for unauthorized users, or confirm navigation away from unsaved forms.

```typescript
@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(["/login"]);
      return false;
    }
  }
}

@Injectable({ providedIn: "root" })
export class UnsavedChangesGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate): boolean {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}

export interface CanComponentDeactivate {
  canDeactivate: () => boolean;
}
```

### 4. **Resolver**

**Use Case**: Pre-fetching data before navigating to a route to ensure the component has all required data loaded.

```typescript
@Injectable({ providedIn: "root" })
export class UserResolver implements Resolve<User> {
  constructor(private userService: UserService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    const userId = route.paramMap.get("id");
    return this.userService.getUser(userId);
  }
}

const routes: Routes = [
  {
    path: "user/:id",
    component: UserComponent,
    resolve: { user: UserResolver },
  },
];
```

### 5. **Query Parameters and Fragments**

**Use Case**: Passing additional parameters or state information without changing the route structure.

```typescript
this.router.navigate(['/search'], { queryParams: { query: 'angular' } });

const routes: Routes = [
  { path: 'search', component: SearchComponent }
];

// In SearchComponent
constructor(private route: ActivatedRoute) {}

ngOnInit() {
  this.route.queryParams.subscribe(params => {
    const query = params['query'];
    // Perform search with the query
  });
}
```

### 6. **Custom Preloading Strategies**

**Use Case**: Customize module preloading behavior based on specific criteria (e.g., user role or network status).

```typescript
@Injectable({ providedIn: "root" })
export class CustomPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    return route.data && route.data.preload ? load() : of(null);
  }
}

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadingStrategy })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

### 7. **Router Events**

**Use Case**: Tracking navigation events for analytics or displaying loading indicators.

```typescript
constructor(private router: Router) {
  this.router.events.subscribe(event => {
    if (event instanceof NavigationStart) {
      // Show loading indicator
    } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
      // Hide loading indicator
    }
  });
}
```

### 8. **URL Serialization and Custom URL Matching**

**Use Case**: Handling complex URL patterns or preserving the state in URLs.

```typescript
const routes: Routes = [{ matcher: customMatcher, component: CustomComponent }];

export function customMatcher(url: UrlSegment[]): UrlMatchResult {
  // Custom URL matching logic
  return { consumed: url };
}
```

</details>

<details>
    <summary>A code example</summary>

    Sure! Let's build an Angular app that incorporates all the advanced routing features we've discussed. For this example, we'll use Angular version 15. Here's a step-by-step guide to get you started:

### 1. **Set Up the Angular Application**

First, make sure you have Angular CLI installed. If not, install it using npm:

```bash
npm install -g @angular/cli
```

Create a new Angular application:

```bash
ng new advanced-routing-app
cd advanced-routing-app
```

### 2. **Create Core and Shared Modules**

Create core and shared modules to organize our services and shared components:

```bash
ng generate module core
ng generate module shared
```

### 3. **Create Feature Modules**

Let's create a few feature modules that we'll use in our app:

```bash
ng generate module feature1 --route feature1 --module app.module
ng generate module feature2 --route feature2 --module app.module
ng generate module dashboard --route dashboard --module app.module
ng generate module settings --route settings --module app.module
ng generate module unauthorized
ng generate module not-found
```

### 4. **Set Up Lazy Loading and Preloading**

In `app-routing.module.ts`, configure the routes with lazy loading and preloading strategy:

```typescript
import { NgModule } from "@angular/core";
import { RouterModule, Routes, PreloadAllModules } from "@angular/router";
import { PageNotFoundComponent } from "./not-found/page-not-found/page-not-found.component";
import { UnauthorizedComponent } from "./unauthorized/unauthorized/unauthorized.component";
import { CustomPreloadingStrategy } from "./core/custom-preloading-strategy.service";

const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "feature1", loadChildren: () => import("./feature1/feature1.module").then((m) => m.Feature1Module), data: { preload: true } },
  { path: "feature2", loadChildren: () => import("./feature2/feature2.module").then((m) => m.Feature2Module) },
  { path: "dashboard", loadChildren: () => import("./dashboard/dashboard.module").then((m) => m.DashboardModule) },
  { path: "settings", loadChildren: () => import("./settings/settings.module").then((m) => m.SettingsModule), outlet: "sidebar" },
  { path: "unauthorized", component: UnauthorizedComponent },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadingStrategy })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

Create `custom-preloading-strategy.service.ts` in the `core` module:

```typescript
import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CustomPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    return route.data && route.data.preload ? load() : of(null);
  }
}
```

### 5. **Create Components and Services**

Create components for the modules and set up the necessary services:

```bash
ng generate component core/nav
ng generate component feature1/feature1
ng generate component feature2/feature2
ng generate component dashboard/dashboard
ng generate component settings/settings
ng generate component unauthorized/unauthorized
ng generate component not-found/page-not-found
```

Create an `auth.service.ts` and `permission-guard.service.ts` in the `core` module:

#### `auth.service.ts`

```typescript
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private userPermissions: string[] = [];

  constructor(private http: HttpClient) {}

  loadUserPermissions() {
    // Simulate an API call
    this.userPermissions = ["admin", "user"];
  }

  hasPermission(permission: string): boolean {
    return this.userPermissions.includes(permission);
  }

  isLoggedIn(): boolean {
    // Simulate user authentication status
    return true;
  }
}
```

#### `permission-guard.service.ts`

```typescript
import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class PermissionGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const requiredPermission = route.data.permission;
    if (this.authService.hasPermission(requiredPermission)) {
      return true;
    } else {
      this.router.navigate(["/unauthorized"]);
      return false;
    }
  }
}
```

### 6. **Configure Nested and Auxiliary Routes**

In `dashboard-routing.module.ts`:

```typescript
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { Panel1Component } from "./panel1/panel1.component";
import { Panel2Component } from "./panel2/panel2.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      { path: "panel1", component: Panel1Component },
      { path: "panel2", component: Panel2Component },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
```

### 7. **Use Router Events for Navigation Tracking**

In `app.component.ts`:

```typescript
import { Component, OnInit } from "@angular/core";
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Event } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  loading = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        this.loading = false;
      }
    });
  }
}
```

### 8. **Create Route Guards and Resolvers**

In `feature1-routing.module.ts`:

```typescript
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Feature1Component } from "./feature1/feature1.component";
import { PermissionGuard } from "../core/permission-guard.service";
import { Feature1Resolver } from "./feature1-resolver.service";

const routes: Routes = [
  {
    path: "",
    component: Feature1Component,
    canActivate: [PermissionGuard],
    data: { permission: "admin" },
    resolve: { data: Feature1Resolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Feature1RoutingModule {}
```

Create `feature1-resolver.service.ts` in the `feature1` module:

```typescript
import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class Feature1Resolver implements Resolve<any> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    // Simulate data fetching
    return of({ key: "value" });
  }
}
```

### 9. **Create Query Parameters and Fragments**

In `app.component.html`:

```html
<nav>
  <a routerLink="/" routerLinkActive="active">Home</a>
  <a routerLink="/feature1" [queryParams]="{ filter: 'active' }" fragment="top">Feature1</a>
</nav>
<router-outlet></router-outlet>
```

In `feature1.component.ts`:

```typescript
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-feature1",
  templateUrl: "./feature1.component.html",
  styleUrls: ["./feature1.component.css"],
})
export class Feature1Component implements OnInit {
  filter: string;
  fragment: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.filter = params["filter"];
    });
    this.route.fragment.subscribe((fragment) => {
      this.fragment = fragment;
    });
  }
}
```

### 10. **Set Up the Components and Templates**

Create simple templates and styles for each component to visualize the navigation.

</details>

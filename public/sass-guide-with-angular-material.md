## Comprehensive Guide to "At-Rules" in Sass

### Introduction to Sass At-Rules

Sass (Syntactically Awesome Stylesheets) extends CSS with features that make it more powerful and maintainable. One of these features is "at-rules," which are special instructions encapsulated within `@` symbols. These at-rules enable advanced functionalities such as control directives, media queries, importing files, and more.

### Types of At-Rules in Sass

1. **@import**
2. **@use**
3. **@forward**
4. **@mixin**
5. **@include**
6. **@function**
7. **@if**
8. **@else if**
9. **@else**
10. **@for**
11. **@each**
12. **@while**
13. **@media**
14. **@supports**

### Detailed Explanation and Examples

#### 1. @import

The `@import` rule is used to import Sass files into other Sass files. This allows you to modularize your CSS by splitting it into multiple files.

```scss
// _colors.scss
$primary-color: #3498db;
$secondary-color: #2ecc71;

// main.scss
@import "colors";

body {
  background-color: $primary-color;
}
```

#### 2. @use

The `@use` rule loads mixins, functions, and variables from other Sass stylesheets, and it helps in namespace management to avoid naming conflicts.

```scss
// _colors.scss
$primary-color: #3498db;
$secondary-color: #2ecc71;

// main.scss
@use "colors";

body {
  background-color: colors.$primary-color;
}
```

#### 3. @forward

The `@forward` rule allows a Sass file to forward its members to other files. It's useful for creating libraries of Sass code.

```scss
// _colors.scss
$primary-color: #3498db;
$secondary-color: #2ecc71;

@forward "colors";

// main.scss
@use "colors";

body {
  background-color: colors.$primary-color;
}
```

#### 4. @mixin

The `@mixin` directive defines a reusable chunk of CSS that can be included in other rules.

```scss
@mixin box-shadow($x, $y, $blur, $color) {
  box-shadow: $x $y $blur $color;
}

.card {
  @include box-shadow(0px, 4px, 5px, rgba(0, 0, 0, 0.3));
}
```

#### 5. @include

The `@include` directive is used to include a mixin in a CSS rule.

```scss
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  @include flex-center;
}
```

#### 6. @function

The `@function` directive defines a reusable function that returns a value.

```scss
@function calculate-rem($size) {
  @return $size / 16 * 1rem;
}

body {
  font-size: calculate-rem(18);
}
```

#### 7. @if

The `@if` directive adds conditional logic to your styles.

```scss
$theme: dark;

body {
  @if $theme == dark {
    background-color: #333;
    color: #fff;
  } @else {
    background-color: #fff;
    color: #333;
  }
}
```

#### 8. @else if and @else

These directives are used in conjunction with `@if` for complex conditional logic.

```scss
$theme: light;

body {
  @if $theme == dark {
    background-color: #333;
    color: #fff;
  } @else if $theme == light {
    background-color: #fff;
    color: #333;
  } @else {
    background-color: #f0f0f0;
    color: #333;
  }
}
```

#### 9. @for

The `@for` directive creates styles in a loop.

```scss
@for $i from 1 through 3 {
  .column-#{$i} {
    width: 100% / $i;
  }
}
```

#### 10. @each

The `@each` directive iterates over a list of items.

```scss
$colors: red, green, blue;

@each $color in $colors {
  .#{$color}-text {
    color: $color;
  }
}
```

#### 11. @while

The `@while` directive creates styles based on a condition.

```scss
$i: 1;

@while $i < 4 {
  .item-#{$i} {
    width: 100% * $i / 4;
  }
  $i: $i + 1;
}
```

#### 12. @media

The `@media` directive applies styles based on media queries.

```scss
@mixin respond-to($media) {
  @if $media == "phone" {
    @media (max-width: 600px) {
      @content;
    }
  } @else if $media == "tablet" {
    @media (max-width: 768px) {
      @content;
    }
  } @else if $media == "desktop" {
    @media (min-width: 769px) {
      @content;
    }
  }
}

.container {
  width: 100%;

  @include respond-to("tablet") {
    width: 80%;
  }
}
```

#### 13. @supports

The `@supports` directive applies styles based on feature queries.

```scss
@supports (display: grid) {
  .grid-container {
    display: grid;
  }
}
```

### Real-World Example

Let's combine several at-rules in a real-world scenario to demonstrate their utility.

```scss
// _variables.scss
$primary-color: #3498db;
$secondary-color: #2ecc71;

// _mixins.scss
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

// _responsive.scss
@mixin respond-to($media) {
  @if $media == "phone" {
    @media (max-width: 600px) {
      @content;
    }
  } @else if $media == "tablet" {
    @media (max-width: 768px) {
      @content;
    }
  } @else if $media == "desktop" {
    @media (min-width: 769px) {
      @content;
    }
  }
}

// main.scss
@use "variables";
@use "mixins";
@use "responsive";

body {
  background-color: variables.$primary-color;
  color: #fff;
  @include mixins.flex-center;
  height: 100vh;
}

.container {
  width: 100%;

  @include responsive.respond-to("tablet") {
    width: 80%;
  }

  @include responsive.respond-to("desktop") {
    width: 60%;
  }
}
```

In this example, we have modularized our Sass into separate files for variables, mixins, and responsive design. We then use these modules in the `main.scss` file to apply styles to the body and container elements with responsive behavior.

---

## Comprehensive Guide to Maps in Sass

### Introduction to Maps in Sass

Maps in Sass are collections of key-value pairs. They are similar to dictionaries in other programming languages and are used to store related data. Maps provide an efficient way to look up values by their corresponding keys, making your Sass code more organized and maintainable.

### Creating Maps

To create a map in Sass, you use the syntax similar to JSON objects, with keys and values separated by colons and each pair separated by commas. Maps are enclosed in parentheses.

```scss
$colors: (
  primary: #3498db,
  secondary: #2ecc71,
  accent: #e74c3c,
);
```

### Accessing Map Values

You can access values in a map using the `map-get` function, which takes two arguments: the map and the key.

```scss
$primary-color: map-get($colors, primary);

body {
  background-color: $primary-color;
}
```

### Adding and Removing Map Items

To add or remove items from a map, Sass provides `map-merge` and `map-remove` functions.

#### Adding an Item

```scss
$new-colors: map-merge(
  $colors,
  (
    tertiary: #9b59b6,
  )
);

.container {
  color: map-get($new-colors, tertiary);
}
```

#### Removing an Item

```scss
$reduced-colors: map-remove($colors, accent);

.container {
  color: map-get($reduced-colors, primary); // accent color is removed
}
```

### Practical Examples

#### Example 1: Theme Configuration

Maps are particularly useful for managing theme configurations. You can define a theme map with various properties and use them throughout your styles.

```scss
$theme: (
  primary-color: #3498db,
  secondary-color: #2ecc71,
  font-size: 16px,
  padding: 10px,
);

body {
  background-color: map-get($theme, primary-color);
  font-size: map-get($theme, font-size);
}

.button {
  background-color: map-get($theme, secondary-color);
  padding: map-get($theme, padding);
}
```

#### Example 2: Responsive Breakpoints

You can use maps to manage responsive breakpoints, making your media queries more manageable.

```scss
$breakpoints: (
  small: 480px,
  medium: 768px,
  large: 1024px,
);

@mixin respond-to($size) {
  @media (min-width: map-get($breakpoints, $size)) {
    @content;
  }
}

.container {
  width: 100%;

  @include respond-to(medium) {
    width: 80%;
  }

  @include respond-to(large) {
    width: 60%;
  }
}
```

#### Example 3: Managing Font Styles

Maps can be used to manage different font styles, making it easy to apply consistent typography across your site.

```scss
$fonts: (
  header: (
    family: "Arial, sans-serif",
    size: 24px,
    weight: bold,
  ),
  body: (
    family: "Georgia, serif",
    size: 16px,
    weight: normal,
  ),
);

@mixin font-style($type) {
  font-family: map-get(map-get($fonts, $type), family);
  font-size: map-get(map-get($fonts, $type), size);
  font-weight: map-get(map-get($fonts, $type), weight);
}

h1 {
  @include font-style(header);
}

p {
  @include font-style(body);
}
```

#### Example 4: Color Schemes

Maps can help manage color schemes for different themes (e.g., light and dark themes).

```scss
$color-schemes: (
  light: (
    background: #ffffff,
    text: #000000,
  ),
  dark: (
    background: #333333,
    text: #ffffff,
  ),
);

@mixin theme($scheme) {
  background-color: map-get(map-get($color-schemes, $scheme), background);
  color: map-get(map-get($color-schemes, $scheme), text);
}

body.light-theme {
  @include theme(light);
}

body.dark-theme {
  @include theme(dark);
}
```

### Iterating Over Maps

You can use the `@each` directive to iterate over a map and apply styles based on its contents.

```scss
$social-colors: (
  facebook: #3b5998,
  twitter: #1da1f2,
  instagram: #e4405f,
);

@each $network, $color in $social-colors {
  .#{$network} {
    background-color: $color;
  }
}
```

---

## Comprehensive Guide to Angular Material Theming

### Introduction to Angular Material Theming

Angular Material is a UI component library that follows Google's Material Design guidelines. Its theming system allows you to customize base styles, colors, typography, and density of components in your application. The theming system is based on Material Design 3, the latest iteration of Google's design system.

### Setting Up Angular Material

Before diving into theming, ensure that Angular Material is set up in your Angular project. If not, you can install it using Angular CLI:

```sh
ng add @angular/material
```

### Basic Theming Concepts

1. **Themes**: Define the overall look and feel of your application.
2. **Palettes**: Sets of colors used to define themes.
3. **Typography**: Font styles used across components.
4. **Density**: Spacing and sizing of components.

### Creating a Custom Theme

A custom theme in Angular Material consists of defining primary, accent, and warn palettes. You can also define light or dark themes.

#### Example: Creating a Custom Light Theme

1. **Define Color Palettes**

```scss
@use "@angular/material" as mat;

$custom-primary: mat.define-palette(mat.$indigo-palette);
$custom-accent: mat.define-palette(mat.$pink-palette, A200, A100, A400);
$custom-warn: mat.define-palette(mat.$red-palette);
```

2. **Define a Theme**

```scss
$custom-theme: mat.define-light-theme(
  (
    color: (
      primary: $custom-primary,
      accent: $custom-accent,
      warn: $custom-warn,
    ),
    typography: mat.define-typography-config(),
  )
);
```

3. **Apply the Theme**

```scss
@include mat.all-component-themes($custom-theme);
```

4. **Include the Theme in Your Styles**

In your `styles.scss`:

```scss
@import "custom-theme";
```

### Customizing Typography

Typography in Angular Material can be customized by defining a typography config.

```scss
$custom-typography: mat.define-typography-config(
  (
    font-family: "Roboto, sans-serif",
    display-4: mat.typography-level(112px, 112px, 300),
    headline: mat.typography-level(24px, 32px, 400),
  )
);

$custom-theme: mat.define-light-theme(
  (
    color: (
      primary: $custom-primary,
      accent: $custom-accent,
      warn: $custom-warn,
    ),
    typography: $custom-typography,
  )
);
```

### Customizing Density

Density allows you to adjust the spacing and size of Angular Material components.

```scss
$custom-density: (
  button: 0,
  toolbar: 2,
  list-item: -1,
);

$custom-theme: mat.define-light-theme(
  (
    color: (
      primary: $custom-primary,
      accent: $custom-accent,
      warn: $custom-warn,
    ),
    density: $custom-density,
  )
);
```

### Practical Examples

#### Example 1: Custom Theme for an E-Commerce Application

1. **Define Color Palettes**

```scss
$ecommerce-primary: mat.define-palette(mat.$blue-palette);
$ecommerce-accent: mat.define-palette(mat.$amber-palette, A200, A100, A400);
$ecommerce-warn: mat.define-palette(mat.$red-palette);
```

2. **Define Typography and Density**

```scss
$ecommerce-typography: mat.define-typography-config(
  (
    font-family: "Arial, sans-serif",
    button: mat.typography-level(14px, 24px, 500),
    headline: mat.typography-level(32px, 40px, 600),
  )
);

$ecommerce-density: (
  button: 1,
  toolbar: 3,
  list-item: 0,
);
```

3. **Define and Apply the Theme**

```scss
$ecommerce-theme: mat.define-light-theme(
  (
    color: (
      primary: $ecommerce-primary,
      accent: $ecommerce-accent,
      warn: $ecommerce-warn,
    ),
    typography: $ecommerce-typography,
    density: $ecommerce-density,
  )
);

@include mat.all-component-themes($ecommerce-theme);
```

4. **Include the Theme in Your Styles**

In your `styles.scss`:

```scss
@import "ecommerce-theme";
```

#### Example 2: Dark Theme for a Dashboard Application

1. **Define Color Palettes**

```scss
$dashboard-primary: mat.define-palette(mat.$cyan-palette);
$dashboard-accent: mat.define-palette(mat.$lime-palette, A200, A100, A400);
$dashboard-warn: mat.define-palette(mat.$deep-orange-palette);
```

2. **Define Typography and Density**

```scss
$dashboard-typography: mat.define-typography-config(
  (
    font-family: "Verdana, sans-serif",
    headline: mat.typography-level(28px, 36px, 700),
    body-1: mat.typography-level(16px, 24px, 400),
  )
);

$dashboard-density: (
  button: -1,
  toolbar: 0,
  list-item: -2,
);
```

3. **Define and Apply the Theme**

```scss
$dashboard-theme: mat.define-dark-theme(
  (
    color: (
      primary: $dashboard-primary,
      accent: $dashboard-accent,
      warn: $dashboard-warn,
    ),
    typography: $dashboard-typography,
    density: $dashboard-density,
  )
);

@include mat.all-component-themes($dashboard-theme);
```

4. **Include the Theme in Your Styles**

In your `styles.scss`:

```scss
@import "dashboard-theme";
```

### Applying Themes Dynamically

You can switch themes dynamically in your Angular application using Angular's built-in theming support.

1. **Define Themes in SCSS**

```scss
// themes.scss
@use "@angular/material" as mat;

$light-theme: mat.define-light-theme(
  (
    color: (
      primary: mat.define-palette(mat.$indigo-palette),
      accent: mat.define-palette(mat.$pink-palette, A200, A100, A400),
      warn: mat.define-palette(mat.$red-palette),
    ),
  )
);

$dark-theme: mat.define-dark-theme(
  (
    color: (
      primary: mat.define-palette(mat.$cyan-palette),
      accent: mat.define-palette(mat.$lime-palette, A200, A100, A400),
      warn: mat.define-palette(mat.$deep-orange-palette),
    ),
  )
);

.light-theme {
  @include mat.all-component-themes($light-theme);
}

.dark-theme {
  @include mat.all-component-themes($dark-theme);
}
```

2. **Use Themes in Your Component**

```html
<!-- app.component.html -->
<div [ngClass]="themeClass">
  <!-- Your content here -->
</div>
```

```typescript
// app.component.ts
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  themeClass = "light-theme";

  toggleTheme() {
    this.themeClass = this.themeClass === "light-theme" ? "dark-theme" : "light-theme";
  }
}
```

---

### Practical Guide to BEM Methodology in CSS

#### Introduction

The Block Element Modifier (BEM) methodology offers a structured approach to naming CSS classes, enhancing code maintainability and scalability. Developed by Yandex, BEM is widely used for creating reusable and modular components in front-end development.

#### Understanding BEM

BEM stands for Block, Element, Modifier. It uses a consistent naming convention to create predictable and maintainable code.

- **Block**: An independent entity that is meaningful on its own. Example: `.block`
- **Element**: A part of a block that has no standalone meaning. Example: `.block__element`
- **Modifier**: A flag on a block or element that changes its appearance or behavior. Example: `.block--modifier` or `.block__element--modifier`

#### Practical Implementation

Let's explore practical examples, covering advanced use cases and potential corner cases.

##### Example 1: Navigation Menu

**HTML Structure**

```html
<nav class="nav">
  <ul class="nav__list">
    <li class="nav__item nav__item--active">
      <a href="#" class="nav__link">Home</a>
    </li>
    <li class="nav__item">
      <a href="#" class="nav__link nav__link--disabled">About</a>
    </li>
    <li class="nav__item nav__item--dropdown">
      <a href="#" class="nav__link">Services</a>
      <ul class="nav__dropdown">
        <li class="nav__dropdown-item">
          <a href="#" class="nav__dropdown-link">Consulting</a>
        </li>
        <li class="nav__dropdown-item">
          <a href="#" class="nav__dropdown-link">Development</a>
        </li>
      </ul>
    </li>
    <li class="nav__item">
      <a href="#" class="nav__link">Contact</a>
    </li>
  </ul>
</nav>
```

**CSS Styles**

```css
/* Block */
.nav {
  background-color: #333;
  padding: 10px;
}

/* Element */
.nav__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.nav__item {
  margin-right: 15px;
  position: relative;
}

.nav__link {
  color: white;
  text-decoration: none;
  padding: 5px 10px;
  display: block;
}

/* Modifiers */
.nav__item--active .nav__link {
  background-color: #555;
}

.nav__link--disabled {
  color: gray;
  pointer-events: none;
}

.nav__item--dropdown:hover .nav__dropdown {
  display: block;
}

/* Dropdown */
.nav__dropdown {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #444;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav__dropdown-item {
  margin: 0;
}

.nav__dropdown-link {
  color: white;
  text-decoration: none;
  padding: 10px 15px;
  display: block;
}
```

**Corner Cases**

- **Dropdown Menu**: `.nav__item--dropdown` handles dropdown functionality.
- **Disabled Links**: `.nav__link--disabled` disables interaction.
- **Active State**: `.nav__item--active` highlights the active menu item.

##### Example 2: E-commerce Product Card

**HTML Structure**

```html
<div class="product-card">
  <img src="product.jpg" alt="Product Image" class="product-card__image" />
  <h2 class="product-card__title">Product Title</h2>
  <p class="product-card__price">$29.99</p>
  <button class="product-card__button product-card__button--buy">Buy Now</button>
  <button class="product-card__button product-card__button--wishlist">Add to Wishlist</button>
  <div class="product-card__badge product-card__badge--sale">Sale</div>
</div>
```

**CSS Styles**

```css
/* Block */
.product-card {
  border: 1px solid #ccc;
  padding: 20px;
  text-align: center;
  position: relative;
}

/* Element */
.product-card__image {
  max-width: 100%;
  height: auto;
}

.product-card__title {
  font-size: 1.5em;
  margin: 10px 0;
}

.product-card__price {
  color: #f00;
  font-size: 1.2em;
}

.product-card__button {
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

/* Modifiers */
.product-card__button--buy {
  background-color: #008cba;
  color: #fff;
}

.product-card__button--wishlist {
  background-color: #ccc;
  color: #000;
}

.product-card__badge {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  background-color: #f00;
  color: #fff;
}

/* Modifier for Badge */
.product-card__badge--sale {
  background-color: #f00;
}

.product-card__badge--new {
  background-color: #008cba;
}
```

**Corner Cases**

- **Multiple Buttons**: Different button styles using modifiers (`.product-card__button--buy`, `.product-card__button--wishlist`).
- **Badges**: Use `.product-card__badge` for additional labels, such as `.product-card__badge--sale`.

##### Example 3: Form with Validation States

**HTML Structure**

```html
<form class="form">
  <div class="form__group">
    <label for="username" class="form__label">Username</label>
    <input type="text" id="username" class="form__input form__input--error" />
    <span class="form__error-message">Username is required</span>
  </div>
  <div class="form__group">
    <label for="email" class="form__label">Email</label>
    <input type="email" id="email" class="form__input" />
  </div>
  <button type="submit" class="form__button">Submit</button>
</form>
```

**CSS Styles**

```css
/* Block */
.form {
  max-width: 400px;
  margin: 0 auto;
}

/* Element */
.form__group {
  margin-bottom: 15px;
}

.form__label {
  display: block;
  margin-bottom: 5px;
}

.form__input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form__button {
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  cursor: pointer;
}

/* Modifiers */
.form__input--error {
  border-color: #dc3545;
}

.form__error-message {
  color: #dc3545;
  font-size: 0.875em;
}
```

**Corner Cases**

- **Error States**: `.form__input--error` and `.form__error-message` for validation feedback.
- **Form Grouping**: `.form__group` to maintain structure and spacing.

---

### Practical Guide to Mobile-First Design Strategy

#### Introduction

In the era where mobile device usage dominates, a Mobile-First Design Strategy is crucial for creating responsive, user-friendly websites. This approach ensures that your website is optimized for mobile devices first, progressively enhancing the experience for larger screens. This article will guide you through practical implementation and best practices, complete with real-world examples.

#### What is Mobile-First Design?

Mobile-First Design prioritizes the mobile user experience by designing the smallest screen version of a website first and then scaling up to larger screens. This strategy ensures essential content and functionalities are accessible on mobile devices, leading to a streamlined and efficient design.

#### Implementing Mobile-First Design

##### Step 1: Planning and Wireframing

Begin with planning the mobile layout of your website, focusing on core content and functionalities. Use wireframing tools like Sketch, Figma, or Adobe XD to create low-fidelity wireframes.

**Example**: For an e-commerce website, prioritize the product display, search functionality, and checkout process in your wireframe.

##### Step 2: Designing for Mobile

Design the mobile version first, incorporating best practices:

1. **Simplify Navigation**: Use hamburger menus or bottom navigation bars.
2. **Prioritize Content**: Display the most important content and features prominently.
3. **Touch-Friendly Elements**: Ensure buttons and interactive elements are large enough for touch interaction.
4. **Responsive Typography**: Use scalable fonts and maintain readability.
5. **Optimized Images**: Use responsive images and optimize them for faster loading.

**Example**:

**Mobile Wireframe for E-commerce Homepage:**

- **Header**: Logo, search bar, hamburger menu.
- **Main Content**: Featured products, categories.
- **Footer**: Quick links, contact information.

##### Step 3: Developing with Mobile-First CSS

Start with CSS for the smallest screen size and add media queries for larger screens. This ensures the mobile version is loaded first, improving performance.

**Example CSS**

```css
/* Base styles for mobile */
body {
  font-family: Arial, sans-serif;
  padding: 10px;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 10px;
}

nav a {
  text-decoration: none;
  color: #333;
}

/* Media query for tablets */
@media (min-width: 768px) {
  nav ul {
    gap: 20px;
  }
}

/* Media query for desktops */
@media (min-width: 1024px) {
  body {
    padding: 20px;
  }

  nav {
    padding: 20px 0;
  }

  nav ul {
    gap: 30px;
  }
}
```

##### Step 4: Testing Across Devices

Test your website on various devices and screen sizes to ensure responsiveness. Use browser developer tools, online testing tools like BrowserStack, and actual devices for thorough testing.

#### Best Practices for Mobile-First Design

1. **Content Prioritization**: Display the most important content first.
2. **Performance Optimization**: Minimize HTTP requests, optimize images, and use lazy loading.
3. **Progressive Enhancement**: Start with a basic mobile layout and enhance it for larger screens.
4. **Touch-Friendly UI**: Ensure buttons and links are large enough for touch interaction.
5. **Responsive Media**: Use responsive images and videos to adapt to different screen sizes.
6. **Testing**: Continuously test across various devices and screen sizes to ensure responsiveness and usability.

#### Practical Implementation of Best Practices

##### Example 1: E-commerce Product Page

**HTML Structure**

```html
<header>
  <nav>
    <a href="#" class="logo">ShopLogo</a>
    <button class="menu-toggle">Menu</button>
    <ul class="nav-menu">
      <li><a href="#">Home</a></li>
      <li><a href="#">Products</a></li>
      <li><a href="#">Cart</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</header>

<main>
  <section class="product">
    <img src="product.jpg" alt="Product Image" class="product__image" />
    <h1 class="product__title">Product Title</h1>
    <p class="product__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
    <p class="product__price">$29.99</p>
    <button class="product__button product__button--buy">Buy Now</button>
    <button class="product__button product__button--wishlist">Add to Wishlist</button>
  </section>
</main>
```

**Mobile-First CSS**

```css
/* Base styles for mobile */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f9f9f9;
}

header {
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  padding: 10px;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu-toggle {
  display: block;
  background-color: transparent;
  border: none;
  color: #333;
  font-size: 1.2em;
  cursor: pointer;
}

.nav-menu {
  list-style: none;
  margin: 0;
  padding: 0;
  display: none;
}

.nav-menu li {
  margin: 5px 0;
}

.nav-menu a {
  text-decoration: none;
  color: #333;
}

.product {
  padding: 15px;
}

.product__image {
  width: 100%;
  height: auto;
}

.product__title {
  font-size: 1.5em;
  margin: 10px 0;
}

.product__description {
  font-size: 1em;
  margin: 10px 0;
}

.product__price {
  color: #f00;
  font-size: 1.2em;
  margin: 10px 0;
}

.product__button {
  padding: 10px;
  margin: 5px 0;
  background-color: #008cba;
  color: #fff;
  border: none;
  cursor: pointer;
}

.product__button--wishlist {
  background-color: #ccc;
}

/* Media query for tablets */
@media (min-width: 768px) {
  .nav-menu {
    display: flex;
    gap: 15px;
  }

  .menu-toggle {
    display: none;
  }

  .product__title {
    font-size: 1.8em;
  }

  .product__description {
    font-size: 1.1em;
  }

  .product__price {
    font-size: 1.3em;
  }

  .product__button {
    padding: 12px;
  }
}

/* Media query for desktops */
@media (min-width: 1024px) {
  body {
    padding: 20px;
  }

  header {
    padding: 20px;
  }

  .nav-menu {
    gap: 20px;
  }

  .product__title {
    font-size: 2em;
  }

  .product__description {
    font-size: 1.2em;
  }

  .product__price {
    font-size: 1.4em;
  }

  .product__button {
    padding: 14px;
  }
}
```

**Key Considerations**:

- **Simplified Navigation**: The `menu-toggle` button is used for mobile navigation, and the `nav-menu` is hidden by default.
- **Touch-Friendly UI**: Buttons and links are large enough for touch interaction.
- **Responsive Media**: The product image scales with the screen size.

##### Example 2: News Website

**HTML Structure**

```html
<header>
  <nav>
    <a href="#" class="logo">NewsLogo</a>
    <button class="menu-toggle">Menu</button>
    <ul class="nav-menu">
      <li><a href="#">Home</a></li>
      <li><a href="#">World</a></li>
      <li><a href="#">Politics</a></li>
      <li><a href="#">Business</a></li>
    </ul>
  </nav>
</header>

<main>
  <article class="news-article">
    <h1 class="news-article__title">Article Title</h1>
    <p class="news-article__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies justo vel risus vestibulum, ut egestas sapien tincidunt...</p>
    <!-- More content... -->
  </article>
</main>
```

**Mobile-First CSS**

```css
/* Base styles for mobile */
body {
  font-family: "Georgia", serif;
  margin: 0;
  padding: 0;
  background-color: #fff;
}

header {
  background-color: #333;
  color: #fff;
  padding: 10px;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu-toggle {
  display: block;
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 1.2em;
  cursor: pointer;
}

.nav-menu {
  list-style: none;
  margin: 0;
  padding: 0;
  display: none;
}

.nav-menu li {
  margin: 5px 0;
}

.nav-menu a {
  text-decoration: none;
  color: #fff;
  font-size: 1em;
}

.news-article {
  padding: 15px;
}

.news-article__title {
  font-size: 1.5em;
  margin: 10px 0;
}

.news-article__content {
  font-size: 1em;
  line-height: 1.6;
}

/* Media query for tablets */
@media (min-width: 768px) {
  .nav-menu {
    display: flex;
    gap: 15px;
  }

  .menu-toggle {
    display: none;
  }

  .news-article__title {
    font-size: 1.8em;
  }

  .news-article__content {
    font-size: 1.1em;
  }
}

/* Media query for desktops */
@media (min-width: 1024px) {
  body {
    padding: 20px;
  }

  header {
    padding: 20px;
  }

  .nav-menu {
    gap: 20px;
  }

  .news-article__title {
    font-size: 2em;
  }

  .news-article__content {
    font-size: 1.2em;
  }
}
```

**Key Considerations**:

- **Readable Text**: Scalable fonts and sufficient line height for readability.
- **Simplified Navigation**: The `menu-toggle` button is used for mobile navigation, and the `nav-menu` is hidden by default.
- **Performance Optimization**: Minimized HTTP requests and optimized images for faster load times.

---

### Comprehensive and Practical Guide to Utilities API in Bootstrap 5

#### Introduction

Bootstrap 5 introduces a powerful Utilities API that allows developers to easily create and customize utility classes. This API extends Bootstrap's core functionality, making it possible to tailor utility classes to specific project needs without writing extensive custom CSS.

#### Core Concepts of Utilities API

The Utilities API is designed to generate utility classes dynamically, providing a flexible way to manage styles. The API offers:

- **Custom Utilities**: Define new utility classes.
- **Modify Existing Utilities**: Override or extend Bootstrap’s default utility classes.
- **Dynamic Utility Generation**: Create utilities based on specific design requirements.

#### Getting Started with Utilities API

##### Step 1: Setting Up

Ensure you have Bootstrap installed in your project. You can install it using npm:

```bash
npm install bootstrap
```

Create a custom Sass file where you will import Bootstrap and define your utility classes.

##### Step 2: Importing Bootstrap and Utilities API

In your custom Sass file, import the necessary Bootstrap files and the Utilities API:

```scss
// Import Bootstrap functions and variables
@import "node_modules/bootstrap/scss/functions";
@import "node_modules/bootstrap/scss/variables";

// Import Utilities API
@import "node_modules/bootstrap/scss/utilities";
```

##### Step 3: Defining Custom Utilities

Define custom utilities by modifying the `$utilities` map.

**Example: Custom Text Color Utilities**

```scss
// Define custom utilities
$utilities: map-merge(
  $utilities,
  (
    "text-color": (
      property: color,
      class: text,
      values: (
        red: #ff6347,
        green: #28a745,
        blue: #007bff,
      ),
    ),
  )
);

// Include utilities
@include utilities($utilities);
```

In this example, we define a new utility for text colors (`.text-red`, `.text-green`, `.text-blue`) by merging custom values into the `$utilities` map and including them using the `utilities` mixin.

#### Customizing Existing Utilities

You can also customize existing Bootstrap utilities by overriding the default values.

**Example: Customizing Margin Utilities**

```scss
// Customize margin utilities
$spacers: (
  0: 0,
  1: 0.25rem,
  2: 0.5rem,
  3: 1rem,
  4: 1.5rem,
  5: 3rem,
);

// Include utilities
@include utilities($utilities);
```

In this example, we redefine the `$spacers` map to change the default spacing values for margin and padding utilities.

#### Practical Examples of Utilities API

##### Example 1: Custom Background Utilities

Define custom background color utilities to enhance the styling of your components.

```scss
// Define custom background utilities
$utilities: map-merge(
  $utilities,
  (
    "background-color": (
      property: background-color,
      class: bg,
      values: (
        lightblue: #add8e6,
        lightgreen: #90ee90,
        lightcoral: #f08080,
      ),
    ),
  )
);

// Include utilities
@include utilities($utilities);
```

**Usage in HTML**

```html
<div class="bg-lightblue p-3">Light Blue Background</div>
<div class="bg-lightgreen p-3">Light Green Background</div>
<div class="bg-lightcoral p-3">Light Coral Background</div>
```

##### Example 2: Custom Border Radius Utilities

Create custom border-radius utilities to apply rounded corners to elements.

```scss
// Define custom border-radius utilities
$utilities: map-merge(
  $utilities,
  (
    "border-radius": (
      property: border-radius,
      class: rounded,
      values: (
        small: 0.2rem,
        large: 1rem,
      ),
    ),
  )
);

// Include utilities
@include utilities($utilities);
```

**Usage in HTML**

```html
<div class="rounded-small p-3 border">Small Rounded Corners</div>
<div class="rounded-large p-3 border">Large Rounded Corners</div>
```

##### Example 3: Custom Opacity Utilities

Add custom opacity utilities to control the transparency of elements.

```scss
// Define custom opacity utilities
$utilities: map-merge(
  $utilities,
  (
    "opacity": (
      property: opacity,
      class: opacity,
      values: (
        90: 0.9,
        70: 0.7,
        50: 0.5,
      ),
    ),
  )
);

// Include utilities
@include utilities($utilities);
```

**Usage in HTML**

```html
<div class="opacity-90 p-3">90% Opacity</div>
<div class="opacity-70 p-3">70% Opacity</div>
<div class="opacity-50 p-3">50% Opacity</div>
```

#### Advanced Customization Techniques

##### Combining Multiple Utilities

You can combine multiple utilities to create complex styles efficiently.

```html
<div class="bg-lightblue text-center p-3 rounded-large opacity-70">Combined Utilities</div>
```

##### Creating Responsive Utilities

Create responsive variations of custom utilities by using the `responsive-visibility` mixin.

```scss
// Define custom responsive visibility utilities
$utilities: map-merge(
  $utilities,
  (
    "display": (
      property: display,
      class: d,
      responsive: true,
      values: (
        none: none,
        inline: inline,
        block: block,
        flex: flex,
      ),
    ),
  )
);

// Include utilities
@include utilities($utilities);
```

**Usage in HTML**

```html
<div class="d-none d-md-block">Visible on medium and larger screens</div>
```

##### Extending Bootstrap with New Components

Create new components using the Utilities API for consistent styling.

```scss
// Define custom card component
.card-custom {
  @include utilities(
    (
      "padding": (
        property: padding,
        class: p,
        values: (
          4: 1rem,
          5: 1.5rem,
        ),
      ),
      "border-radius": (
        property: border-radius,
        class: rounded,
        values: (
          large: 1rem,
        ),
      ),
      "background-color": (
        property: background-color,
        class: bg,
        values: (
          primary: #007bff,
        ),
      ),
    )
  );
}

// Include custom card styles
@include card-custom;
```

**Usage in HTML**

```html
<div class="p-5 rounded-large bg-primary text-white">Custom Card Component</div>
```

---

### Comprehensive Guide to Using Sass for Bootstrap 5 Customization and Extension

#### Introduction

Bootstrap 5, a popular front-end framework, is built using Sass, a powerful CSS preprocessor. This allows for extensive customization and extension of Bootstrap's default styles. By leveraging Sass, developers can tailor Bootstrap to fit specific project requirements, ensuring a unique and cohesive design.

#### Getting Started with Sass and Bootstrap 5

##### Step 1: Setting Up Your Project

To start customizing Bootstrap 5 with Sass, you need to set up your development environment. Here’s how to do it:

1. **Install Node.js and npm**: Ensure you have Node.js and npm installed on your machine. You can download them from the [official Node.js website](https://nodejs.org/).

2. **Create a New Project**: Create a new directory for your project and navigate into it using the terminal.

```bash
mkdir bootstrap-custom
cd bootstrap-custom
```

3. **Initialize npm**: Initialize a new npm project.

```bash
npm init -y
```

4. **Install Bootstrap**: Install Bootstrap and its dependencies using npm.

```bash
npm install bootstrap
```

5. **Install Sass**: Install Sass to compile your custom Sass files.

```bash
npm install sass
```

##### Step 2: Project Structure

Organize your project with the following structure:

```
bootstrap-custom/
│
├── scss/
│   ├── custom.scss
│   └── _custom-variables.scss
│
├── dist/
│   └── css/
│       └── custom.css
│
├── index.html
└── package.json
```

#### Customizing Bootstrap 5 with Sass

##### Step 3: Importing Bootstrap and Custom Variables

Create a custom Sass file to import Bootstrap and define your custom variables.

**custom.scss**

```scss
// Import Bootstrap functions and variables
@import "node_modules/bootstrap/scss/functions";
@import "node_modules/bootstrap/scss/variables";

// Import custom variables
@import "custom-variables";

// Import Bootstrap
@import "node_modules/bootstrap/scss/bootstrap";
```

**\_custom-variables.scss**

```scss
// Override Bootstrap variables
$primary: #ff6347;
$secondary: #6c757d;
$font-family-sans-serif: "Roboto", sans-serif;

// Custom spacers
$spacers: (
  0: 0,
  1: 0.25rem,
  2: 0.5rem,
  3: 1rem,
  4: 1.5rem,
  5: 3rem,
);
```

##### Step 4: Compiling Sass

Compile your Sass file to CSS using the Sass CLI.

```bash
npx sass scss/custom.scss dist/css/custom.css
```

#### Extending Bootstrap 5

##### Step 5: Creating Custom Components

You can extend Bootstrap by creating custom components using Sass.

**Example: Custom Card Component**

**\_custom-variables.scss**

```scss
// Custom card variables
$card-border-radius: 0.5rem;
$card-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
```

**custom.scss**

```scss
// Import Bootstrap functions and variables
@import "node_modules/bootstrap/scss/functions";
@import "node_modules/bootstrap/scss/variables";

// Import custom variables
@import "custom-variables";

// Import Bootstrap
@import "node_modules/bootstrap/scss/bootstrap";

// Custom card component
.card-custom {
  border-radius: $card-border-radius;
  box-shadow: $card-box-shadow;
  padding: $spacers-3;
  background-color: $light;
  color: $dark;
}
```

**Usage in HTML**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="dist/css/custom.css" />
    <title>Custom Bootstrap</title>
  </head>
  <body>
    <div class="container mt-5">
      <div class="card-custom">
        <div class="card-body">
          <h5 class="card-title">Custom Card</h5>
          <p class="card-text">This is a custom card component using Bootstrap 5.</p>
        </div>
      </div>
    </div>
  </body>
</html>
```

##### Step 6: Customizing Bootstrap Components

You can also customize existing Bootstrap components by overriding their styles.

**Example: Customizing Buttons**

**\_custom-variables.scss**

```scss
// Custom button variables
$btn-primary-bg: #ff6347;
$btn-primary-border: #ff6347;
$btn-primary-color: #fff;
$btn-padding-y: 0.5rem;
$btn-padding-x: 1rem;
```

**custom.scss**

```scss
// Import Bootstrap functions and variables
@import "node_modules/bootstrap/scss/functions";
@import "node_modules/bootstrap/scss/variables";

// Import custom variables
@import "custom-variables";

// Import Bootstrap
@import "node_modules/bootstrap/scss/bootstrap";

// Custom styles
.btn-primary {
  background-color: $btn-primary-bg;
  border-color: $btn-primary-border;
  color: $btn-primary-color;
  padding: $btn-padding-y $btn-padding-x;
}
```

**Usage in HTML**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="dist/css/custom.css" />
    <title>Custom Bootstrap</title>
  </head>
  <body>
    <div class="container mt-5">
      <button class="btn btn-primary">Custom Button</button>
    </div>
  </body>
</html>
```

#### Advanced Customization Techniques

##### Step 7: Creating Utility Classes with Sass

Bootstrap 5's Utilities API can be used to create custom utility classes.

**Example: Custom Margin Utilities**

**\_custom-utilities.scss**

```scss
// Custom margin utilities
$utilities: map-merge(
  $utilities,
  (
    "margin": (
      property: margin,
      class: m,
      values: (
        auto: auto,
        1: 0.25rem,
        2: 0.5rem,
        3: 1rem,
        4: 1.5rem,
        5: 3rem,
      ),
    ),
  )
);

// Include utilities
@include utilities($utilities);
```

**custom.scss**

```scss
// Import Bootstrap functions and variables
@import "node_modules/bootstrap/scss/functions";
@import "node_modules/bootstrap/scss/variables";

// Import custom variables
@import "custom-variables";

// Import Bootstrap
@import "node_modules/bootstrap/scss/bootstrap";

// Import custom utilities
@import "custom-utilities";
```

**Usage in HTML**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="dist/css/custom.css" />
    <title>Custom Bootstrap</title>
  </head>
  <body>
    <div class="container mt-5">
      <div class="mb-3">Margin Bottom 3</div>
      <div class="mb-4">Margin Bottom 4</div>
    </div>
  </body>
</html>
```

##### Step 8: Theming with Bootstrap

Bootstrap 5 allows for theming by customizing its CSS variables. Create multiple themes for different parts of your application.

**Example: Dark Theme**

**\_custom-variables.scss**

```scss
// Dark theme variables
$theme-colors: (
  "primary": #343a40,
  "secondary": #6c757d,
  "success": #28a745,
  "info": #17a2b8,
  "warning": #ffc107,
  "danger": #dc3545,
  "light": #f8f9fa,
  "dark": #212529,
);

$body-bg: $dark;
$body-color: $light;
```

**custom.scss**

```scss
// Import Bootstrap functions and variables
@import "node_modules/bootstrap/scss/functions";
@import "node_modules/bootstrap/scss/variables";

// Import custom variables
@import "custom-variables";

// Import Bootstrap
@import "node_modules/bootstrap/scss/bootstrap";
```

**Usage in HTML**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="dist/css/custom.css" />
    <title>Custom Bootstrap</title>
  </head>
  <body>
    <div class="container mt-5">
      <h1 class="text-primary">Dark Theme</h1>
      <p class="text-light">This is a custom dark theme using Bootstrap 5.</p>
    </div>
  </body>
</html>
```

---

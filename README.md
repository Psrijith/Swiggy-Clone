# Swiggy Clone

This project is a clone of Swiggy, a popular food ordering and delivery app, built using Angular. It replicates key features such as displaying food deals, top picks, recommendations, and a cart functionality for a seamless user experience.

## Project Components

### HeaderComponent
- Displays the navbar with links to various sections of the app.
- Contains a cart icon that opens a right-side slider to show cart items when clicked.

### ProductListComponent
- Contains sections like 'Deals for You,' 'Top Picks,' and 'Recommended,' each displaying products fetched from `product.ts`.
- Uses `*ngFor` to loop through the products and display them dynamically.

### ProductItemComponent
- Displays individual product details, including name, image, price, and description.
- Includes an 'Add to Cart' button with a counter that increments or decrements product quantities.
- Uses `@Input()` and `@Output()` decorators to pass data between parent and child components.
  - `@Input()` allows the parent component to pass product data to `ProductItemComponent`.
  - `@Output()` emits an event to the parent when the 'Add to Cart' button is clicked to update the cart.

### CartSliderComponent
- A right-side slider that displays items added to the cart.
- Includes a cross icon at the top of the slider for closing it.
- Allows users to view, modify, and remove cart items.
- The slider opens when the cart icon in the header is clicked.

## Services Used

### CartService
- Manages cart operations such as adding/removing items and adjusting item quantities.
- Stores cart data locally using `BehaviorSubject`, which provides an observable stream for components to subscribe to and update the cart dynamically.
- Provides methods like `addItem()`, `removeItem()`, and `updateQuantity()` to handle cart-related functionality.

### ProductService
- Handles product data fetching (simulated via MockAPI for testing purposes).
- Provides methods to retrieve product data and manage it for display in the app.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

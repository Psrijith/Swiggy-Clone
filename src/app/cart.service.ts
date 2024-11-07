import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartKey = 'cartItems';

  constructor() {}

  // Get cart items from localStorage
  getCartItems(): Array<any> {
    const cartItems = localStorage.getItem(this.cartKey);
    return cartItems ? JSON.parse(cartItems) : [];
  }

  // Save cart items to localStorage
  saveCartItems(cartItems: Array<any>): void {
    localStorage.setItem(this.cartKey, JSON.stringify(cartItems));
  }

  // Add a product to the cart
  addToCart(product: any): void {
    let cartItems = this.getCartItems();
    const existingProductIndex = cartItems.findIndex(
      (item) => item[0] === product[0]
    );

    if (existingProductIndex > -1) {
      cartItems[existingProductIndex][2]++;
    } else {
      cartItems.push([...product, 1]); // Add new item with quantity 1
    }
    this.saveCartItems(cartItems);
  }

  // Remove a product from the cart
  removeFromCart(product: any): void {
    let cartItems = this.getCartItems();
    const index = cartItems.findIndex((item) => item[0] === product[0]);
    if (index !== -1) {
      cartItems.splice(index, 1);
    }
    this.saveCartItems(cartItems);
  }

  // Update the quantity of a product in the cart
  updateQuantity(product: any, quantity: number): void {
    let cartItems = this.getCartItems();
    const existingProductIndex = cartItems.findIndex(
      (item) => item[0] === product[0]
    );

    if (existingProductIndex > -1 && quantity > 0) {
      cartItems[existingProductIndex][2] = quantity;
      this.saveCartItems(cartItems);
    }
  }
}

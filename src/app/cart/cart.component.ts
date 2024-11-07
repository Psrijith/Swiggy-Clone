import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';  
import { CartService } from '../cart.service'; 

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  @Input() cartItems: Array<any> = [];
  @Output() updateQuantity: EventEmitter<Array<any>> = new EventEmitter(); 
router: any;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  increaseQuantity(item: any): void {
    item[2]++;
    this.cartService.updateQuantity(item, item[2]);
  }

  // Handle quantity decrease
  decreaseQuantity(item: any): void {
    if (item[2] > 1) {
      item[2]--;
      this.cartService.updateQuantity(item, item[2]);
    } else {
      this.cartService.removeFromCart(item);
      this.cartItems = this.cartService.getCartItems(); // Refresh cart
    }
  }

  // Calculate the total price of the items in the cart
  getTotal(): number {
    const total = this.cartItems.reduce(
      (total, item) => total + item[1] * item[2],
      0
    );
    return parseFloat(total.toFixed(3));
  }
  
}
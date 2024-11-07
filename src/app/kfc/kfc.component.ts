import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CartComponent } from '../cart/cart.component';
import { CommonModule } from '@angular/common'; 
import { CartService } from '../cart.service';

@Component({
  selector: 'app-kfc',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CartComponent, CommonModule],
  templateUrl: './kfc.component.html',
  styleUrls: ['./kfc.component.css'],
})
export class KfcComponent {
  cart: Array<any> = []; // To store the cart items
  cartVisible = false; // Toggle for cart visibility

  constructor(private cartService: CartService) {}

  // Use the service to add items to the cart
  addtocart(product: any): void {
    this.cartService.addToCart(product);
    this.cart = this.cartService.getCartItems();
    alert(`${product[0]} has been added to your cart. Open the cart to modify.`);
  }

  // Listen for the toggleCart event and toggle the cart visibility
  toggleCartPanel() {
    this.cartVisible = !this.cartVisible;
  }
}

import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,CartComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  dropdownOpen: boolean = false;
  @Output() toggleCart: EventEmitter<void> = new EventEmitter();

  constructor(private router: Router) {}

  // Method to toggle the dropdown visibility
  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  // Method to handle logout and redirect
  logout(): void {
    console.log('User logged out');
    this.router.navigate(['/home']); 
  }

  toggleCartPanel() {
    this.toggleCart.emit();
  }
}

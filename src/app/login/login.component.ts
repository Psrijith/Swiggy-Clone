import { CommonModule } from '@angular/common';
import { Component, Input , Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @Input() openSlidePanel: boolean = false;
  @Output() closePanel = new EventEmitter<void>();
  phoneNumber: string ='';
  closeSlidePanel() {
    this.closePanel.emit();  
  }
}
  
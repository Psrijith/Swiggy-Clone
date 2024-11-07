import { Component } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core'; 
import { LoginComponent } from '../login/login.component'; 

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
})
export class StartComponent {
  isSlidePanelOpen = false;

  constructor(private cdRef: ChangeDetectorRef) {}

  openSlidePanel() {
    this.isSlidePanelOpen = true;
    this.cdRef.detectChanges();  
  }

  closeSlidePanel() {
    this.isSlidePanelOpen = false;
    this.cdRef.detectChanges(); 
  }
}

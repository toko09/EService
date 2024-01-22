import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 togglehamnav() { 
    const hamnav = document.querySelector('.nav') as HTMLElement;
    hamnav.style.display = (hamnav.style.display === 'none' || hamnav.style.display === '') ? 'flex' : 'none';   
  }
  call() { 
    window.location.href = 'tel:+995577227589'
  }
}

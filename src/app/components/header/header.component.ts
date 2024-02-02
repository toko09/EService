import { Component, ViewChild } from '@angular/core';
import { LandingComponent } from '../landing/landing.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ LandingComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 togglehamnav() { 
    const hamnav = document.querySelector('.nav') as HTMLElement;
    hamnav.style.display = (hamnav.style.display === 'none' || hamnav.style.display === '') ? 'flex' : 'none';   
  }
  call() { 
    window.location.href = 'tel:+995558444812';
  }
  checkwidth() { 
    const windowWidth = window.innerWidth;
    if (windowWidth < 401) { 
      this.togglehamnav()
    }

  }

}

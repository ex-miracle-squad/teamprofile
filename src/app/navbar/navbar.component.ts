import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../shared/scroll.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private scrollService: ScrollService) {}
  isMobileMenuOpen = false;
  ngOnInit() {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }
  }

  toggleMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();
    this.toggleMenu();
    this.scrollService.scrollToSection(sectionId);
  }
}

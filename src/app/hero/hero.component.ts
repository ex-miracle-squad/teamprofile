import { Component } from '@angular/core';
import { ScrollService } from '../shared/scroll.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  constructor(private scrollService: ScrollService) {
    // Constructor logic can be added here if needed
  }

  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();
    this.scrollService.scrollToSection(sectionId);
  }
}

// Create a new file: src/app/shared/scroll.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ScrollService {
  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
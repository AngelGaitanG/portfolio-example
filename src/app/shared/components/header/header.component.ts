import { NgClass } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  activeSection: string = "";

  @ViewChild('expandedMenu') expandedMenu!: ElementRef;
  @ViewChild('menuBtn') menuBtn!: ElementRef;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = document.querySelectorAll('app-home, app-portfolio, app-about, app-contact');
    let currentSection = '';

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
        currentSection = section.tagName.toLowerCase();
      }
    });

    this.activeSection = currentSection;
  }
  
  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });

      history.pushState(null, '', sectionId);
    }
  }

  openMenu() {
    if (this.expandedMenu) {
      this.expandedMenu.nativeElement.classList.toggle('expanded');
      this.menuBtn.nativeElement.classList.toggle('collapsed');
    }
  }
  


}

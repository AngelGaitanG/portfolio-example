import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @ViewChild('expandedMenu') expandedMenu!: ElementRef;
  @ViewChild('menuBtn') menuBtn!: ElementRef;

  openMenu() {
    if (this.expandedMenu) {
      this.expandedMenu.nativeElement.classList.toggle('expanded');
      this.menuBtn.nativeElement.classList.toggle('collapsed');
    }
  }
  


}

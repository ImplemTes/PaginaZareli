import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent   {
  title = 'mi-app';
  isMenuOpen = false;  
  isSubmenuOpen = false; 
  menuVisible: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleSubmenu() {
    this.isSubmenuOpen = !this.isSubmenuOpen;
  }


    toggleMenu2(event: Event): void {
    this.menuVisible = !this.menuVisible;
    event.stopPropagation(); // Evita que el clic cierre el menú inmediatamente
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(): void {
    this.menuVisible = false; // Oculta el menú cuando haces clic fuera de él
  }
}
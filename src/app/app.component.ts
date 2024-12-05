import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mi-app';
   // Variable que controla la apertura del menú
   isMenuOpen: boolean = false;
     // Estado del submenú (Productos)
  isSubMenuOpen = false;
     // Método para alternar la visibilidad del menú
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }


 
}
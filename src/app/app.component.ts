import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'mi-app';
  isMenuOpen = false; // Estado para el menú móvil
  isSubmenuOpen = false; // Estado para el submenú "Conta"

  // Array con las imágenes
  images = [
    {
      src: '/assets/carrusel/imagen1.jpg'
    },
    {
      src: '/assets/carrusel/imagen4.jpg'
    },
    {
      src: '/assets/carrusel/imagen3.jpg'
    }
  ];
  currentIndex: number = 0;
  interval: any;

  // Se ejecuta cuando el componente se inicializa
  ngOnInit(): void {
    this.startCarousel();
  }

  startCarousel() {
    this.interval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 6000); // Cambia de imagen cada 5 segundos
  }

  goToNext() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  goToPrevious() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleSubmenu() {
    this.isSubmenuOpen = !this.isSubmenuOpen;
  }


}
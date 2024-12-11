import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-flota',
  templateUrl: './flota.component.html',
  styleUrls: ['./flota.component.scss']
})
export class FlotaComponent implements OnInit, OnDestroy {
  // Lista de imágenes para el carrusel
  images2 = [
    { src: '/assets/carrusel/imagen1.jpg' },
    { src: '/assets/carrusel/imagen2.jpg' },
    { src: '/assets/carrusel/imagen3.jpg' }
  ];

  // Índice actual de la imagen visible
  currentIndex2: number = 0;
  // Intervalo de auto-transición
  interval: any;

  ngOnInit(): void {
    this.startCarousel2(); // Iniciar el carrusel
  }

  // Método para iniciar el carrusel con transición automática
  startCarousel2() {
    this.interval = setInterval(() => {
      this.currentIndex2 = (this.currentIndex2 + 1) % this.images2.length;
    }, 3000);  // Cambia cada 3 segundos
  }

  // Método para ir a la siguiente imagen
  goToNext() {
    this.currentIndex2 = (this.currentIndex2 + 1) % this.images2.length;
  }

  // Método para ir a la imagen anterior
  goToPrevious() {
    this.currentIndex2 = (this.currentIndex2 - 1 + this.images2.length) % this.images2.length;
  }

  // Limpiar el intervalo cuando se destruye el componente
  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}

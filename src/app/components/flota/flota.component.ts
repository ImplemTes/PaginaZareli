import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-flota',
  templateUrl: './flota.component.html',
  styleUrls: ['./flota.component.scss']
})
export class FlotaComponent implements OnInit, OnDestroy {
  images = [
    '/assets/flota/imagen1.jpg',
    '/assets/flota/imagen2.jpg',
    '/assets/flota/imagen3.jpg'
  ];
  currentSlide = 0;
  intervalId: any;

  ngOnInit() {
    // Inicia el cambio automático cada 3 segundos
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  ngOnDestroy() {
    // Limpia el intervalo al destruir el componente
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide > 0) ? this.currentSlide - 1 : this.images.length - 1;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.images.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }
}

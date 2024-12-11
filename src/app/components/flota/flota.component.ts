import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-flota',
  templateUrl: './flota.component.html',
  styleUrls: ['./flota.component.scss']
})
export class FlotaComponent implements OnInit, OnDestroy {
  images2 = [
    { src: '/assets/carrusel/imagen1.jpg' },
    { src: '/assets/carrusel/imagen2.jpg' },
    { src: '/assets/carrusel/imagen3.jpg' }
  ];

  currentIndex2: number = 0;
  interval2: any;

  ngOnInit(): void {
    this.startCarousel2();
  }

  startCarousel2() {
    this.interval2 = setInterval(() => {
      this.currentIndex2 = (this.currentIndex2 + 1) % this.images2.length;
    }, 3000);
  }

  ngOnDestroy(): void {
    if (this.interval2) {
      clearInterval(this.interval2);
    }
  }

  goToNext2() {
    this.currentIndex2 = (this.currentIndex2 + 1) % this.images2.length;
  }

  goToPrevious2() {
    this.currentIndex2 = (this.currentIndex2 - 1 + this.images2.length) % this.images2.length;
  }
}

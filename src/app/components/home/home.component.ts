import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  isMenuOpen = false;  
  isSubmenuOpen = false; 
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

 
  ngOnInit(): void {
    this.startCarousel();
  setInterval(() => this.nextSlide(), 3000); // cada 3s/ cada 3s
  }

  startCarousel() {
    this.interval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 6000);  
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

  values = [
    {
      title: 'Puntualidad',
      description:
        'Nos comprometemos a entregar los materiales de construcción a tiempo, garantizando la satisfacción de nuestros clientes.',
    },
    {
      title: 'Innovación',
      description:
        'Incorporamos las últimas tecnologías para optimizar nuestros procesos y mejorar la calidad de nuestros productos.',
    },
    {
      title: 'Calidad',
      description:
        'Ofrecemos materiales de la más alta calidad, asegurando durabilidad y fiabilidad en todos nuestros productos.',
    },
    {
      title: 'Seguridad',
      description:
        'La seguridad es nuestra prioridad, asegurando un entorno de trabajo seguro tanto para nuestros empleados como para nuestros clientes.',
    },
    {
      title: 'Responsabilidad',
      description:
        'Nos comprometemos con la ética y la responsabilidad en cada proyecto, respetando el medio ambiente y cumpliendo nuestras promesas con los clientes.',
    },
        {
      title: 'Compromiso',
      description:
        'Compromiso con nuestros clientes, empleados y la sociedad. Nos dedicamos a cumplir nuestras promesas y garantizar que cada proyecto sea realizado con la máxima dedicación.',
    },
  ];

  openedIndex: number | null = null;

  toggleAccordion(index: number) {
    // Si el índice está abierto, lo cerramos, sino lo abrimos
    this.openedIndex = this.openedIndex === index ? null : index;
  }




  images_colaboradores = [
    '/assets/producto/cemento.jpg',
    '/assets/producto/cemento2.jpg',
    '/assets/producto/cemento3.jpg',
    '/assets/producto/cemento2.jpg',
    '/assets/producto/cemento3.jpg',
    '/assets/producto/cemento2.jpg',
    '/assets/producto/cemento3.jpg',

  ];
  
  visibleCount = 7; // Puedes cambiar a 3, 5, 6, etc. según lo que quieras mostrar a la vez
  currentIndex2 = 0;
  transitioning2 = false;
  nextSlide() {
    if (this.transitioning2) return;
    this.transitioning2 = true;
    this.currentIndex2++;

    // Esperamos a que termine la animación CSS (~500ms)
    setTimeout(() => {
      const first = this.images_colaboradores.shift();
      if (first) this.images_colaboradores.push(first);
      this.currentIndex2 = 0;
      this.transitioning2 = false;
    }, 500);
  }



}

import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  isMenuOpen = false;
  isSubmenuOpen = false;
  currentIndex: number = 0;
images = [
  {
    desktop: '/assets/carrusel/imagenordenador2.jpg',
    mobile: '/assets/carrusel/imagenmovil2.png'
  },
  {
    desktop: '/assets/carrusel/imagenordenador3.jpg',
    mobile: '/assets/carrusel/imagenmovil3.png'
  },
    {
    desktop: '/assets/carrusel/imagenordenador4.jpg',
    mobile: '/assets/carrusel/imagenmovil4.png'
  },
      {
    desktop: '/assets/carrusel/imagenordenador5.jpg',
    mobile: '/assets/carrusel/imagenmovil5.png'
  }
];

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
      console.log('Siguiente - Índice actual:', this.currentIndex);
  }

  goToPrevious() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
     console.log('Anterior - Índice actual:', this.currentIndex); 
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
    '/assets/empresas/empresa1.png',
    '/assets/empresas/empresa2.png',
    '/assets/empresas/empresa3.png',
    '/assets/empresas/empresa4.png',
    '/assets/empresas/empresa5.png',
    '/assets/empresas/empresa6.png',
    '/assets/empresas/empresa7.png',
    '/assets/empresas/empresa8.png',
    '/assets/empresas/empresa9.png',
    '/assets/empresas/empresa10.png',
     '/assets/empresas/empresa11.png',
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

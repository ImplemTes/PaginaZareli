import { Component, ElementRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-ladrillo',
  templateUrl: './ladrillo.component.html',
  styleUrl: './ladrillo.component.scss'
})
export class LadrilloComponent implements AfterViewInit {
  @ViewChildren('card') cardRefs!: QueryList<ElementRef>;
  @ViewChildren('image') imageRefs!: QueryList<ElementRef>;

  cards: HTMLElement[] = [];
  images: HTMLElement[] = [];

  ngAfterViewInit() {
    // Convertir QueryList a arrays
    this.cards = this.cardRefs.toArray().map(ref => ref.nativeElement);
    this.images = this.imageRefs.toArray().map(ref => ref.nativeElement);
  }

  onMouseMove(event: MouseEvent, index: number) {
    const card = this.cards[index];
    const image = this.images[index];
    
    if (!card || !image) return;

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
 
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -70;
    const rotateY = ((x - centerX) / centerX) * 70;

    image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.50)`;
    image.style.transition = 'transform 0.2s ease';
  }

  onMouseLeave(index: number) {
    const image = this.images[index];
    
    if (!image) return;

    image.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
    image.style.transition = 'transform 0.2s ease';
  }
}
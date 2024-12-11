import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss'
})
export class ContactoComponent {


  RedirigirE() {
    window.open("https://www.facebook.com/Zareli-Arroyo-110743790447724/", "_blank");
  }
}
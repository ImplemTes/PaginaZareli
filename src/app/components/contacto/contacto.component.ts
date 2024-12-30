import { Component } from '@angular/core';
import { EmailService } from '../../services/email.service';
 
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss'
})
export class ContactoComponent {

 

 



  EnviarConsulta(){

  }





  RedirigirE() {
    window.open("https://www.facebook.com/Zareli-Arroyo-110743790447724/", "_blank");
  }
}
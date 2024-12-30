import { Component } from '@angular/core';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {
  // Propiedades enlazadas al formulario
  nombre: string = '';
  correo: string = '';
  descripcion: string = '';

  // Constructor con el servicio inyectado
  constructor(private emailService: EmailService) {}

  // Método para enviar la consulta
  EnviarConsulta() {
    // En este punto, el formulario ya estará validado por Angular en la plantilla (form.invalid)
    this.emailService.sendEmail(this.nombre, this.correo, this.descripcion).subscribe({
      next: () => {
        alert('Correo enviado con éxito.');
        this.resetForm(); // Limpia el formulario después de enviar
      },
      error: (error) => {
        alert('Hubo un error al enviar el correo: ' + error.message);
      }
    });
  }

  // Método para redirigir a otra página (enlace al comprobante)
  RedirigirE() {
    window.open('https://www.facebook.com/Zareli-Arroyo-110743790447724/', '_blank');
  }

  // Método para limpiar el formulario
  private resetForm() {
    this.nombre = '';
    this.correo = '';
    this.descripcion = '';
  }
}

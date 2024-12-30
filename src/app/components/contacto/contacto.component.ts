import { Component } from '@angular/core';
import { EmailService } from '../../services/email.service';
import Swal from 'sweetalert2';

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
  constructor(private emailService: EmailService) { }

  // Método para enviar la consulta
  EnviarConsulta() {
    // En este punto, el formulario ya estará validado por Angular en la plantilla (form.invalid)
    this.emailService.sendEmail(this.nombre, this.correo, this.descripcion).subscribe({
/*************  ✨ Codeium Command ⭐  *************/
        // Manejador de respuesta exitosa al enviar el formulario de consulta
        // Muestra una alerta con el resultado y limpia el formulario
/******  e2a7ea7b-f0ab-4522-ade5-9ed04e490958  *******/next: () => {
        this.showAlert('Consulta enviada con éxito', 'Gracias por contactarnos. Te responderemos pronto.', 'success');
        this.resetForm(); // Limpia el formulario después de enviar
      },
      error: (error) => {
        this.showAlert('Error al enviar la consulta', 'Por favor, intenta nuevamente más tarde.', 'error');
      }
    });
  }
  // Método para mostrar la alerta SweetAlert2
  showAlert(title: string, text: string, icon: 'success' | 'error') {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
      confirmButtonText: 'Aceptar'
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

  //npm install sweetalert2 @sweetalert2/ngx-sweetalert2
}
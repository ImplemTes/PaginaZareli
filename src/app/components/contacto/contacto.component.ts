import { Component } from '@angular/core';
import { DocumentoService } from '../../services/documento.service';
import Swal from 'sweetalert2';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Documento } from '../../models/documento';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {
  // Propiedades enlazadas al formulario
  documentoForm: FormGroup;


  seConsulto: boolean = false; // se activa cuando se hace una búsqueda
  isLoading: boolean = false;
  resultados: Documento[] = [];
  // Constructor con el servicio inyectado
  constructor(
    private consultaService: DocumentoService,
    private fb: FormBuilder
  ) {

    this.documentoForm = this.fb.group({
      ruc: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      fechaDesde: ['', [Validators.required]],
      fechaHasta: ['', [Validators.required]],
      tipoComprobante: ['', [Validators.required]],
      serie: ['', [Validators.required]]
    });
  }

  // Método para enviar la consulta

  EnviarConsulta() {
    if (this.documentoForm.valid) {
      this.isLoading = true; // Activa el loader
      // Puedes activar un loader aquí

      this.consultaService.sendInfo(this.documentoForm.value).subscribe({
        next: (data: Documento[]) => {
          this.isLoading = false; // Desactiva el loader en caso de éxito
          this.resultados = data; // Guarda los resultados recibidos
          this.seConsulto = true; // 👈 aquí se activa
          if (data.length > 0) {
            this.showAlert('Consulta enviada', 'Tu solicitud fue procesada correctamente', 'success');
          } else {
            this.showAlert('Sin resultados', 'No se encontraron comprobantes con los datos ingresados.', 'info');
          }
        },
        error: (error) => {
          this.isLoading = false;
          this.seConsulto = false;
          this.showAlert('Error al enviar la consulta', 'Por favor, intenta nuevamente', 'error');
        }
      });
    } else {
      console.error('Formulario inválido');
      this.documentoForm.markAllAsTouched(); // Opcional: muestra errores al usuario
    }
  }

  // Método para limpiar el formulario

  LimpiarForm(): void {
    this.isLoading = false;
    this.seConsulto = false; // 👈 para que no se muestre el mensaje
    this.resultados = []; // 👈 Vacía la lista de resultados
    this.documentoForm.reset({
      ruc: '',
      fechaDesde: '',
      fechaHasta: '',
      tipoComprobante: '',
      serie: ''
    });
  }


  // Método para mostrar la alerta SweetAlert2
  showAlert(title: string, text: string, icon: 'success' | 'error' | 'info') {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
      confirmButtonText: 'Aceptar'
    });
  }

  //npm install sweetalert2 @sweetalert2/ngx-sweetalert2
}
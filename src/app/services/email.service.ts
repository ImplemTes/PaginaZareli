import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = environment.apiUrl + '/send-email';

  constructor(private http: HttpClient) {}
  sendEmail(nombre: string, correo: string, descripcion: string): Observable<any> {
    const payload = { nombre, correo, descripcion };
    return this.http.post(this.apiUrl, payload);
  }
}

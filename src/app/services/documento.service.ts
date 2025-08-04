import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Documento } from '../models/documento';
@Injectable({
  providedIn: 'root'
})
export class DocumentoService {
  private apiUrl = environment.apiUrl + '/consuldoc';

  constructor(private http: HttpClient) {}
  sendInfo(data: any): Observable<Documento[]> {
    return this.http.post<Documento[]>(this.apiUrl, data);
  }
}

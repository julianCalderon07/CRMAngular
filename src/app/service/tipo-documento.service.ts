import { Injectable } from '@angular/core';
import { tipoDocumento } from '../Interfaces/tipoDocumento';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoDocumentoService {

  constructor(private http: HttpClient) { }

  getTipoDocumento() : Observable<tipoDocumento[]>{
    return this.http.get<tipoDocumento[]>('https://localhost:7121/TipoDocumentos');
  }
}

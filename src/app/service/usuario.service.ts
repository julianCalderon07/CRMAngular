import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { usuario } from '../Interfaces/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  public GetUser(): Observable<usuario[]>{
    return this.http.get<usuario[]>('https://localhost:7121/Usuarios');
  }
  public GetValidateUser(user:string, password:string): Observable<any>{
    return this.http.get<any>('https://localhost:7121/Usuarios/ValidateUser?user='+user+'&password='+password);
  }

  public saveUser(user: usuario): Observable<any> {
    const url = 'https://localhost:7121/Usuarios/Create';
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<any>(url, JSON.stringify(user), { headers });
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { rol } from '../Interfaces/rol';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class RolService {

  constructor(private http: HttpClient) { }

  getRol() : Observable<rol[]>{
    return this.http.get<rol[]>('https://localhost:7121/Rols');
  }
}

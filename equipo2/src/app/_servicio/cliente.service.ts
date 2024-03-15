import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../_modelo/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  url:string=`http://localhost:8080/clientes`
  constructor(private http:HttpClient) { }

    obtenerUno(id:number):Observable<Cliente>{  
      return this.http.get<Cliente>(`${this.url}/${id}`);
    }
  }


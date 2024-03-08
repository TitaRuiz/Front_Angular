import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from '../_modelo/empleado';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private url:string = 'http://localhost:8080/empleados';
  empleadoCambio = new Subject<Empleado[]>();

  listar(): Observable<Empleado[]>{
    return this.http.get<Empleado[]>(this.url);    
  }

  alta(e:Empleado){
    console.log('ha llegado al servicio'+e.nombreEmpleado)
    return this.http.post(this.url,e);
  }

  constructor(private http:HttpClient) { }

  
}

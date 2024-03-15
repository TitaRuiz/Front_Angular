import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DetalleFactura } from '../_modelo/detallefactura';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetalleFacturaService {

  constructor(private http:HttpClient) { }

  private url:string = 'http://localhost:8080/detallesfactura/porcliente';

  obtenerPorCliente(id:number):Observable<DetalleFactura[]>{
      return this.http.get<DetalleFactura[]>(`${this.url}/${id}`);
  }
}

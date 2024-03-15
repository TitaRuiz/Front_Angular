import { Component, Input, OnInit } from '@angular/core';
import { DetalleFacturaService } from '../_servicio/detalle-factura.service';
import { DetalleFactura } from '../_modelo/detallefactura';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-detalle-factura',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './detalle-factura.component.html',
  styleUrl: './detalle-factura.component.css'
})
export class DetalleFacturaComponent implements OnInit{
  @Input()   idFactura:number=0;
  detalles:DetalleFactura[]=[];

  constructor(private servicio:DetalleFacturaService){}

  ngOnInit(): void {
    console.log('id recibido ->'+this.idFactura);
    this.servicio.obtenerPorCliente(this.idFactura).subscribe(
      data =>{ this.detalles = data}
    )

  }

}

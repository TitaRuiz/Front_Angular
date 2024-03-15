import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../_servicio/cliente.service';
import { Cliente } from '../_modelo/cliente';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent implements OnInit {
  cliente:Cliente={"idCliente": 1,
  "nombre": "",
  "telefono": "",
  "direccion": "",
  "facturas": [{
    "idFactura": 0,
    "tipoPago": "",
    "fecha": ""
}]
};
  constructor(private servicio:ClienteService){}
  ngOnInit(): void {
    this.servicio.obtenerUno(1).subscribe(data => {
      this.cliente = data;
      console.log(this.cliente);
    })
  }


}

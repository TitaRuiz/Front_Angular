import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InmuebleService } from '../_servicio/inmueble.service';
import { Inmueble } from '../_modelo/inmueble';

@Component({
  selector: 'app-detalle-inmueble',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './detalle-inmueble.component.html',
  styleUrl: './detalle-inmueble.component.css'
})
export class DetalleInmuebleComponent implements OnInit{
  @Input() id:string='';
  inmueble:Inmueble=new Inmueble();
  
  constructor(private inmuebleServicio:InmuebleService){}

  ngOnInit(): void {
    console.log('id recibido ->'+ this.id);
    this.inmueble = this.inmuebleServicio.obtenerUno(this.id);
  }
}

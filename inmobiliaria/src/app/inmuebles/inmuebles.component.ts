import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InmuebleService } from '../_servicio/inmueble.service';
import { Inmueble } from '../_modelo/inmueble';

@Component({
  selector: 'app-inmuebles',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './inmuebles.component.html',
  styleUrl: './inmuebles.component.css'
})
export class InmueblesComponent implements OnInit {

  inmuebles:Inmueble[]=[];
   
  constructor(private inmuebleServicio: InmuebleService){}

  ngOnInit(): void {
    this.inmuebles = this.inmuebleServicio.obtenerTodos();
  }

}

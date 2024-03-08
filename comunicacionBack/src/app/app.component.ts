import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { EmpleadosService } from './_servicio/empleados.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ListaEmpleadosComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {

  

 
  
  
}

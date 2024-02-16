import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpleadoDinamicoComponent } from './empleado-dinamico/empleado-dinamico.component';
import { ArmaPCComponent } from './arma-pc/arma-pc.component';
import { ReservaVuelosComponent } from './reserva-vuelos/reserva-vuelos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmpleadoDinamicoComponent, ArmaPCComponent,ReservaVuelosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'htmldirectivas';
}

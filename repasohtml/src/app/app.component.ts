import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TiendaonlineComponent } from './tiendaonline/tiendaonline.component';
import { EmpleadoComponent } from './empleado/empleado.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TiendaonlineComponent, EmpleadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'repasohtml';
}

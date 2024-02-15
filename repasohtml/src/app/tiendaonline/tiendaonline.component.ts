import { Component } from '@angular/core';
import { DetalleProductoComponent } from '../detalle-producto/detalle-producto.component';
import { PiePaginaComponent } from '../pie-pagina/pie-pagina.component';

@Component({
  selector: 'app-tiendaonline',
  standalone: true,
  imports: [DetalleProductoComponent,PiePaginaComponent],
  templateUrl: './tiendaonline.component.html',
  styleUrl: './tiendaonline.component.css'
})
export class TiendaonlineComponent {

}

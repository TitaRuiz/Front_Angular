import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente02',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './componente02.component.html',
  styleUrl: './componente02.component.css'
})
export class Componente02Component {
  nombre:string='';
  dni:string='';
  edad:number=0;
  cursoSeleccionado:string='';
  nivelEsutdio:string='';

}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  correoElectronico:string='';
  contrasena:string='';
  contresenaRepetir:string='';
  correcto:boolean=false;

  verificar():void {
    if(this.contrasena===this.contresenaRepetir){
        this.correcto=true;
    }else{
      this.correcto=false;
    }
  }

}

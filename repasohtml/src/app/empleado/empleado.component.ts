import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-empleado',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent {


  nombre: string='';
  fechaNacimiento:any='';
  nacionalidad:string='Española';
  genero:string='';
  cMas:boolean=false; 
  java:boolean=false;
  js:boolean=false;
  python:boolean=false;

  mostrarInfo():void {
    let mensaje:string=`Nombre: ${this.nombre} 
    Fecha nacimiento: ${this.fechaNacimiento} 
    Nacionalidad : ${this.nacionalidad} 
    genero : ${this.genero} 
    Lenguajes de programación : `;

    if(this.cMas){
      mensaje += 'C++ ';
    }

    if(this.java){
      mensaje+='Java ';
    }

    if(this.js){
      mensaje+='JS ';
    }

    if(this.python){
      mensaje+='Python '
    }

    alert(mensaje);
    
  }

}

import { Component, EventEmitter, Output } from '@angular/core';
import { EmpleadosService } from '../_servicio/empleados.service';
import { Empleado } from '../_modelo/empleado';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-altaempleado',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './altaempleado.component.html',
  styleUrl: './altaempleado.component.css'
})
export class AltaempleadoComponent {
  e1:Empleado={
    "idEmpleado": 0,
    "nombreEmpleado": "",
    "dni": "",
    "sueldo":0};

  @Output() avisoPadre:EventEmitter<Observable<Empleado[]>>=
  new EventEmitter();

  constructor(private servicio: EmpleadosService,
    private route: ActivatedRoute,
    private router: Router){}

  altaEmpleado(){
    this.servicio.alta(this.e1).subscribe(()=>
    {console.log("se ha dado de alta");
     this.servicio.listar().subscribe(data =>
      {this.servicio.empleadoCambio.next(data)})});  
   this.router.navigate(['']);  
  }

  altaEmpleadoHP(){
    this.servicio.alta(this.e1).subscribe(()=>
    this.avisoPadre.emit(this.servicio.listar()));
  }

}

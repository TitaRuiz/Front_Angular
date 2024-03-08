import { Routes } from '@angular/router';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { AltaempleadoComponent } from './altaempleado/altaempleado.component';

export const routes: Routes = [
   
    {path:'', component:ListaEmpleadosComponent, children:
    [{path:'alta', component:AltaempleadoComponent},
    ]
    }
];

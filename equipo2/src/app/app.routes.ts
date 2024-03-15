import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { DetalleFacturaComponent } from './detalle-factura/detalle-factura.component';
import { ClienteComponent } from './cliente/cliente.component';

export const routes: Routes = [
    {"path":"",component:ClienteComponent},
    {"path":"detalle/:idFactura", component: DetalleFacturaComponent},
   
];

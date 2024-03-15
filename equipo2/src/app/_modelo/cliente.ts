import { Factura } from "./factura";

export interface Cliente {
    idCliente: number;
    nombre: string;
    telefono: string;
    direccion: string;
    facturas: Factura[];
}
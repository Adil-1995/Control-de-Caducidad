import { Producto } from "./productos.model";


export interface CargarProductos{
  total: number;
  productos: Producto[];
}

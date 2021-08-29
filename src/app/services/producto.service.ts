import { Producto } from './../models/productos.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProductForm } from '../interfaces/product-form';
import { CargarProductos } from '../models/cargar-productos';
import { map } from 'rxjs/operators';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  public producto: Producto;

  constructor(private http: HttpClient) {}

  get id(): string {
    return this.producto._id || '';


  }

  getProductos(desde: number = 0) {

    const url = `${base_url}/productos?desde=${desde}`;
    return this.http.get<CargarProductos>(url).pipe(
      // delay(5000), keep loading
      map((resp) => {
        console.log('my resp:' ,resp);

        const productos = resp.productos.map(
          (producto) =>
            new Producto(
              producto.codigo,
              producto.descripcion,
              producto.fechaCaducidad,
              producto.proveedor,

            )
        );

        return {
          total: resp.total,
          productos,

        };

      })
    );
  }

  anadirProducto(formData: ProductForm) {
    return this.http.post(`${base_url}/productos`, formData);
  }

  actualizarProducto(data:{fechaCaducidad: Date}) {
    console.log('my Id :',this.id);
    return this.http.put(`${base_url}/productos/${this.id}`,data);
  }
}

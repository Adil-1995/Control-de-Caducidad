import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto } from 'src/app/models/productos.model';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  public hoy = new Date();
  public productoActualizadoForm: FormGroup;
  public producto: Producto;
  public formSubmitted = false;
  public productos: Producto[] = [];
  public desde: number = 0;
  public totalUsuarios: number = 0;

  public productoForm = this.fb.group({
    codigo: ['', [Validators.required, Validators.minLength(3)]],
    descripcion: ['', [Validators.required]],
    fechaCaducidad: ['', [Validators.required]],
    avisame: ['', [Validators.required]],
    proveedor: [''],
  });

  constructor(
    private fb: FormBuilder,
    private productoService: ProductoService
  ) {}

  ngOnInit(): void {
    this.getProductos();

    this.productoActualizadoForm = this.fb.group({
      codigo: ['1234', Validators.required],
      descripcion: ['safaqewgf', [Validators.required]],
      fechaCaducidad: ['2021-09-01', [Validators.required]],
      proveedor: ['efewee', [Validators.required]],
      avisame: ['2', [Validators.required]],
    });
  }

  getProductos() {
    this.productoService
      .getProductos(this.desde)
      .subscribe(({ total, productos }) => {
        this.totalUsuarios = total;
        this.productos = productos;
      });
  }

  anadirProducto() {
    this.formSubmitted = true;
    console.log(this.productoForm.value);

    if (this.productoForm.invalid) {
      return;
    }
    // Realizar el posteo
    this.productoService.anadirProducto(this.productoForm.value).subscribe(
      (resp) => {
        console.log('Producto añadido');

        console.log(resp);
        Swal.fire('Good job!', 'You clicked the button!', 'success');
      },
      (err) => {
        // si hay un error
        Swal.fire('Error', err.error.msg, 'error');
      }
    );
  }

  campoNoValido(campo: string): boolean {
    if (this.productoForm.get(campo).invalid && this.formSubmitted) {
      return true;
    } else {
      return false;
    }
  }

  actualizarProducto() {
    console.log('heyyyyyyyyyy');

    console.log(this.productoActualizadoForm.value);
    this.productoService
      .actualizarProducto(this.productoActualizadoForm.value)
      .subscribe((resp) => {
        console.log(resp);
      });
  }
}

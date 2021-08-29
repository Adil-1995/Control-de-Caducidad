import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Producto } from 'src/app/models/productos.model';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-caducidad',
  templateUrl: './caducidad.component.html',
  styleUrls: ['./caducidad.component.sass']
})
export class CaducidadComponent implements OnInit {

  public productoActualizadoForm: FormGroup;
  public producto: Producto;

  hoy = new Date();

  constructor(private fb: FormBuilder,
    private productoService: ProductoService) {}

  ngOnInit(): void {

    this.productoActualizadoForm = this.fb.group({
      codigo: [ '1234' , Validators.required ],
      descripcion: [ 'safaqewgf', [ Validators.required ] ],
      fechaCaducidad: [ '2021-09-01', [ Validators.required ] ],
      proveedor: ['efewee' , [ Validators.required ] ],
    });

  }


  actualizarProducto(){
    console.log(this.productoActualizadoForm.value);
    // this.productoService.actualizarProducto(this.productoForm.value)
    //                     .subscribe(resp =>{
    //                       console.log(resp);

    //                     })


  }

}

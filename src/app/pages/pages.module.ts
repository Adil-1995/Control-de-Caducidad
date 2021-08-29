import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './productos/productos.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CaducidadComponent } from './caducidad/caducidad.component';



@NgModule({
  declarations: [
    ProductosComponent,
    PagesComponent,
    CaducidadComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FontAwesomeModule,
    ReactiveFormsModule


  ],
  exports: [
    ProductosComponent,
  ]
})
export class PagesModule { }

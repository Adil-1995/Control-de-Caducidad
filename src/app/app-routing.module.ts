import { ProductosComponent } from './pages/productos/productos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
    { path: 'productos', component: ProductosComponent },
    { path: '', redirectTo:'/productos',pathMatch:'full' },

  ],
  },

  //Rutas publicas
  { path: 'login', component: LoginComponent },
  // {path: '', redirectTo: '/productos', pathMatch: 'full'},
  { path: '**', component: NopagefoundComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

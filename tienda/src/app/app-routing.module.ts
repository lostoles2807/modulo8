import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogoComponent } from './inicio/catalogo/catalogo.component';
import { CarritoComponent } from './inicio/carrito/carrito.component';
import { DetalleComponent } from './inicio/detalle/detalle.component';
import { BusquedaComponent } from './inicio/busqueda/busqueda.component';
import { LoginComponent } from './login/login.component';
import { BarraComponent } from './inicio/barra/barra.component';
import { InicioComponent } from './inicio/inicio.component';

const routes:Routes = [
{ path: '', component: LoginComponent },
{ path: 'inicio', component: InicioComponent, children:[
  {path: '',  redirectTo: 'Catalogo',  pathMatch: 'full'},
  { path: 'Catalogo', component: CatalogoComponent },
  { path: 'Detalle/:id', component: DetalleComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'Busqueda/:producto', component: BusquedaComponent },
]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const app_routing = RouterModule.forRoot(routes, {useHash:true});
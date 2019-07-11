import { RouterModule, Routes} from '@angular/router'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment} from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { TiendaService} from '../servicios/tienda.service';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogoComponent } from './inicio/catalogo/catalogo.component';
import { CarritoComponent } from './inicio/carrito/carrito.component';
import { DetalleComponent } from './inicio/detalle/detalle.component';
import { BusquedaComponent } from './inicio/busqueda/busqueda.component';
import { LoginComponent } from './login/login.component';
import { BarraComponent } from './inicio/barra/barra.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogoComponent,
    CarritoComponent,
    DetalleComponent,
    BusquedaComponent,
    LoginComponent,
    BarraComponent,
    InicioComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    FormsModule
    
  ],
  providers: [TiendaService, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }

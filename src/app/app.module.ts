import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { InicioComponent } from './inicio/inicio.component';
import { InstalacionesComponent } from './instalaciones/instalaciones.component';
import { MetodologiaComponent } from './metodologia/metodologia.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {GalleriaModule} from 'primeng/galleria';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    InstalacionesComponent,
    MetodologiaComponent,
    UbicacionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    GalleriaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { InstalacionesComponent } from './instalaciones/instalaciones.component';
import { MetodologiaComponent } from './metodologia/metodologia.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'instalaciones', component: InstalacionesComponent },
  { path: 'metodologia', component: MetodologiaComponent },
  { path: 'ubicacion', component: UbicacionComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


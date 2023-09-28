import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlarmaComponent } from './alarma/alarma.component';
import { MedicamentosComponent } from './medicamentos/medicamentos.component';
import { CitaComponent } from './cita/cita.component';
import { InicioComponent } from './inicio/inicio.component';
import { InfoComponent } from './info/info.component';
import { NotificacionComponent } from './notificacion/notificacion.component';
import { CreadaalarmaComponent } from './creadaalarma/creadaalarma.component';
import { CreadacitaComponent } from './creadacita/creadacita.component';

const routes: Routes = [
  {path: '', component:InicioComponent},
  {path: 'alarma', component:AlarmaComponent},
  {path: 'medicamento', component:MedicamentosComponent},
  {path: 'cita', component:CitaComponent},
  {path: 'informacion', component:InfoComponent},
  {path: 'notificacion', component:NotificacionComponent},
  {path: 'creadaalarma', component:CreadaalarmaComponent},
  {path: 'creadacita', component:CreadacitaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MedicamentosComponent } from './medicamentos/medicamentos.component';
import { AlarmaComponent } from './alarma/alarma.component';
import { CitaComponent } from './cita/cita.component';
import { InicioComponent } from './inicio/inicio.component';
import { InfoComponent } from './info/info.component';
import { HeaderComponent } from './header/header.component';
import { NotificacionComponent } from './notificacion/notificacion.component';
import { CreadaalarmaComponent } from './creadaalarma/creadaalarma.component';
import { CreadacitaComponent } from './creadacita/creadacita.component';

@NgModule({
  declarations: [								
    AppComponent,
    MedicamentosComponent,
      AlarmaComponent,
      CitaComponent,
      InicioComponent,
      InfoComponent,
      HeaderComponent,
      NotificacionComponent,
      CreadaalarmaComponent,
      CreadacitaComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

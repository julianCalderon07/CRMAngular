import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from 'src/app/module/material/material.module';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ReporteComponent } from './reporte/reporte.component';
import { NewUserComponent } from './usuario/new-user/new-user.component';
import { PeticionComponent } from './peticion/peticion.component';
import { RespuestaComponent } from './respuesta/respuesta.component';
import { NewRequestComponent } from './peticion/new-request/new-request.component';
import { NewResponseComponent } from './respuesta/new-response/new-response.component';




@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    UsuarioComponent,
    ReporteComponent,
    NewUserComponent,
    PeticionComponent,
    RespuestaComponent,
    NewRequestComponent,
    NewResponseComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
  ]
})
export class DashboardModule { }

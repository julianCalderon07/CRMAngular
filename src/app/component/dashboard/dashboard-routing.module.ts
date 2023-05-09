import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ReporteComponent } from './reporte/reporte.component';
import { PeticionComponent } from './peticion/peticion.component';
import { RespuestaComponent } from './respuesta/respuesta.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      { path: '', component: InicioComponent },
      { path: 'inicio', component: InicioComponent },
      { path: 'usuarios', component: UsuarioComponent },
      { path: 'reportes', component: ReporteComponent },
      { path: 'peticiones', component: PeticionComponent },
      { path: 'respuesta', component: RespuestaComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

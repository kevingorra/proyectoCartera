import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistrarClienteComponent } from './registrar-cliente/registrar-cliente.component';
import { TablaIndicadoresComponent } from './tabla-indicadores/tabla-indicadores.component';
import { TablaMaestroComponent } from './tabla-maestro/tabla-maestro.component';
import { TablaSuperComponent } from './tabla-super/tabla-super.component';

const routes: Routes = [
  {path:"",component:DashboardComponent,children : [
    {path:"",component:InicioComponent},
    {path:"indicadores",component:TablaIndicadoresComponent},
    {path:"maestro",component:TablaMaestroComponent},
    {path:"super",component:TablaSuperComponent},

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistrarClienteComponent } from './registrar-cliente/registrar-cliente.component';
import { TablaIndicadoresComponent } from './tabla-indicadores/tabla-indicadores.component';
import { TablaIndicadores2Component } from './tabla-indicadores2/tabla-indicadores2.component';
import { TablaMaestroComponent } from './tabla-maestro/tabla-maestro.component';
import { TablaSuperComponent } from './tabla-super/tabla-super.component';
import { TablasTotalesComponent } from './tablas-totales/tablas-totales.component';

const routes: Routes = [
  {path:"",component:DashboardComponent,children : [
    {path:"",component:DashboardComponent},
    {path:"registrar",component:RegistrarClienteComponent},
    {path:"inicio",component:InicioComponent},
    {path:"tablas",component:TablasTotalesComponent},
    {path:"indicadores2",component:TablaIndicadores2Component},
    {path:"indicadores",component:TablaIndicadoresComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

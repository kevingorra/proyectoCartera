import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { RegistrarClienteComponent } from './registrar-cliente/registrar-cliente.component';
import { TablaRegistroClienteComponent } from './tabla-registro-cliente/tabla-registro-cliente.component';
import { GraficaDinamicaComponent } from './grafica-dinamica/grafica-dinamica.component';
import { TablaIndicadoresComponent } from './tabla-indicadores/tabla-indicadores.component';
import { TablaMaestroComponent } from './tabla-maestro/tabla-maestro.component';
import { TablaSuperComponent } from './tabla-super/tabla-super.component';
import { SharedModule } from '../shared/shared.module';
import { InicioComponent } from './inicio/inicio.component';
import { BuscarMaestroComponent } from './buscar-maestro/buscar-maestro.component';
import { BuscarindicadoresComponent } from './buscarindicadores/buscarindicadores.component';
import { TablasTotalesComponent } from './tablas-totales/tablas-totales.component';
import { TablaIndicadores2Component } from './tabla-indicadores2/tabla-indicadores2.component';
import { RegistroPdfComponent } from './registro-pdf/registro-pdf.component';


@NgModule({
  declarations: [
    DashboardComponent,
    MenuComponent,
    FooterComponent,
    RegistrarClienteComponent,
    TablaRegistroClienteComponent,
    GraficaDinamicaComponent,
    TablaIndicadoresComponent,
    TablaMaestroComponent,
    TablaSuperComponent,
    InicioComponent,
    BuscarMaestroComponent,
    BuscarindicadoresComponent,
    TablasTotalesComponent,
    TablaIndicadores2Component,
    RegistroPdfComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }

import { Component, ViewChild,AfterViewInit,OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SuperintendenciafinanzasService } from 'src/app/services/superintendenciafinanzas.service';



@Component({
  selector: 'app-tabla-super',
  templateUrl: './tabla-super.component.html',
  styleUrls: ['./tabla-super.component.css']
})
export class TablaSuperComponent implements OnInit {


  displayedColumns = [
    'id',
    'ano', 
    'nit', 
    'activosCorrientesTotales',
    'activosIntagiblesDistintosDeLaPlusvalia',
    'activosPorImpuestosCorrientesCorriente',
    'activosPorImpuestosDiferidos',
    'capitalEmitido',
    'costoDeVentas',
    'costosFinancieros',
    'cuentasComercialesPorCobrarYOtrasCuentasPorCobrarCorrientes',
    'cuentasComercialesPorCobrarYOtrasCuentasPorCobrarNoCorrientes',
    'cuentasComercialesPorPagarYOtrasCuentasPorPagarNoCorrientes',
    'cuentasPorPagarComercialesYOtrasCuentasPorPagar',
    'efectivoYEquivalentesAlEfectivo',
    'fechaDeCorte',
    'gananciaBruta',
    'gananciaPerdida',
    'gananciaPerdidaAntesDeImpuestos',
    'gananciaPerdidaPorActividadesDeOperacion',
    'gananciaPerdidaProcedentedeOperacionesContinuadas',
    'gananciaPerdidaprocedenteDeOperacionesDiscontinuadas',
    'gananciasAcumuladas',
    'gastosDeAdministracion',
    'ingresoDeActividadesOrdinales',
    'ingresoGastoPorImpuestos',
    'ingresosFinancieros',
    'inventariosCorrientes',
    'otrasParticipacionesEnElPatrimonio',
    'otrasReservas',
    'otrosActivosFinancierosCorrientes',
    'otrosActivosNoFinancierosCorrientes',
    'otrosActivosNoFinancierosNoCorrientes',
    'otrosGastos',
    'otrosIngresos',
    'otrosPasivosFinancierosCorrientes',
    'otrosPasivosFinancierosNoCorrientes',
    'otrosPasivosNoFinancierosCorrientes',
    'pasivoPorImpuestosDiferidos',
    'pasivosCorrientesTotales',
    'patrimonioTotal',
    'propiedadesPlantaYEquipo',
    'tipoDeEmpresa',
    'totalDeActivos',
    'totalDeActivosNoCorrientes',
    'totalDePasivosNoCorrientes',
    'totalDePatrimonioYPasivos',
    'totalPasivo',
    'start'
 
  ];
  listaindicadores:any[]=[]
  formulario!:FormGroup;

  dataSource!: MatTableDataSource<any>;

  
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.displayedColumns, event.previousIndex, event.currentIndex);
  }



  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
 


  constructor(
   
    private  SuperintendenciafinanzasService:SuperintendenciafinanzasService,
   
    public fabricaDiccionario:FormBuilder) { }


  ngOnInit(): void {
    this.cargarUsuario();
  }

  cargarUsuario(){

    this.formulario=this.inicializarFormulario()
    this.SuperintendenciafinanzasService.buscar()
    .subscribe(respuesta=>{
      this.listaindicadores=respuesta.map((datos:any)=>{
        return {

          id:datos.id,
          ano:datos.ano,
          nit:datos.nit,
          activosCorrientesTotales:datos.activosCorrientesTotales,
          activosIntagiblesDistintosDeLaPlusvalia:datos.activosIntagiblesDistintosDeLaPlusvalia,
          activosPorImpuestosCorrientesCorriente:datos.activosPorImpuestosCorrientesCorriente,
          activosPorImpuestosDiferidos:datos.activosPorImpuestosDiferidos,
          capitalEmitido:datos.capitalEmitido,
          costoDeVentas:datos.costoDeVentas,
          costosFinancieros:datos.costosFinancieros,   
          cuentasComercialesPorCobrarYOtrasCuentasPorCobrarCorrientes:datos.cuentasComercialesPorCobrarYOtrasCuentasPorCobrarCorrientes,       
          cuentasComercialesPorCobrarYOtrasCuentasPorCobrarNoCorrientes:datos.cuentasComercialesPorCobrarYOtrasCuentasPorCobrarNoCorrientes,      
          cuentasComercialesPorPagarYOtrasCuentasPorPagarNoCorrientes:datos.cuentasComercialesPorPagarYOtrasCuentasPorPagarNoCorrientes,      
          cuentasPorPagarComercialesYOtrasCuentasPorPagar:datos.cuentasPorPagarComercialesYOtrasCuentasPorPagar,   
          efectivoYEquivalentesAlEfectivo:datos.efectivoYEquivalentesAlEfectivo,      
          fechaDeCorte:datos.fechaDeCorte,        
          gananciaBruta:datos.gananciaBruta,      
          gananciaPerdida:datos.gananciaPerdida,
          gananciaPerdidaAntesDeImpuestos:datos.gananciaPerdidaAntesDeImpuestos,
          gananciaPerdidaPorActividadesDeOperacion:datos.gananciaPerdidaPorActividadesDeOperacion,
          gananciaPerdidaProcedentedeOperacionesContinuadas:datos.gananciaPerdidaProcedentedeOperacionesContinuadas,
          gananciaPerdidaprocedenteDeOperacionesDiscontinuadas:datos.gananciaPerdidaprocedenteDeOperacionesDiscontinuadas,
          gananciasAcumuladas:datos.gananciasAcumuladas,
          gastosDeAdministracion:datos.gastosDeAdministracion,
          ingresoDeActividadesOrdinales:datos.ingresoDeActividadesOrdinales,
          ingresoGastoPorImpuestos:datos.ingresoGastoPorImpuestos,
          ingresosFinancieros:datos.ingresosFinancieros,
          inventariosCorrientes:datos.inventariosCorrientes,
          otrasParticipacionesEnElPatrimonio:datos.otrasParticipacionesEnElPatrimonio,
          otrasReservas:datos.otrasReservas,
          otrosActivosFinancierosCorrientes:datos.otrosActivosFinancierosCorrientes,
          otrosActivosNoFinancierosCorrientes:datos.otrosActivosNoFinancierosCorrientes,
          otrosActivosNoFinancierosNoCorrientes:datos.otrosActivosNoFinancierosNoCorrientes,
          otrosGastos:datos.otrosGastos,
          otrosIngresos:datos.otrosIngresos,
          otrosPasivosFinancierosCorrientes:datos.otrosPasivosFinancierosCorrientes,
          otrosPasivosFinancierosNoCorrientes:datos.otrosPasivosFinancierosNoCorrientes,
          otrosPasivosNoFinancierosCorrientes:datos.otrosPasivosNoFinancierosCorrientes,
          pasivoPorImpuestosDiferidos:datos.pasivoPorImpuestosDiferidos,
          pasivosCorrientesTotales:datos.pasivosCorrientesTotales,
          patrimonioTotal:datos.patrimonioTotal,
          propiedadesPlantaYEquipo:datos.propiedadesPlantaYEquipo,
          tipoDeEmpresa:datos.tipoDeEmpresa,
          totalDeActivos:datos.totalDeActivos,
          totalDeActivosNoCorrientes:datos.totalDeActivosNoCorrientes,
          totalDePasivosNoCorrientes:datos.totalDePasivosNoCorrientes,
          totalDePatrimonioYPasivos:datos.totalDePatrimonioYPasivos,
          totalPasivo:datos.totalPasivo,
     
 

        };
       
      })

      this.dataSource= new  MatTableDataSource(this.listaindicadores)
      console.log(this.dataSource)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
    
   
  }
  public inicializarFormulario ():FormGroup{
    return this.fabricaDiccionario.group({
      id:['',[Validators.required]],
      nit:['',[Validators.required]],//Validators.minLength(6)
      activosCorrientesTotales:['',[Validators.required]],
      ano:['',[Validators.required]],
      activosIntagiblesDistintosDeLaPlusvalia:['',[Validators.required]],
      activosPorImpuestosCorrientesCorriente:['',[Validators.required]],
      activosPorImpuestosDiferidos:['',[Validators.required]],
      capitalEmitido:['',[Validators.required]],
      costoDeVentas:['',[Validators.required]],
      costosFinancieros:['',[Validators.required]],
      cuentasComercialesPorCobrarYOtrasCuentasPorCobrarCorrientes:['',[Validators.required]],
      cuentasComercialesPorCobrarYOtrasCuentasPorCobrarNoCorrientes:['',[Validators.required]],
      cuentasComercialesPorPagarYOtrasCuentasPorPagarNoCorrientes:['',[Validators.required]],
      cuentasPorPagarComercialesYOtrasCuentasPorPagar:['',[Validators.required]],
      efectivoYEquivalentesAlEfectivo:['',[Validators.required]],
      fechaDeCorte:['',[Validators.required]],
      gananciaBruta:['',[Validators.required]],
      gananciaPerdida:['',[Validators.required]],
      gananciaPerdidaAntesDeImpuestos:['',[Validators.required]],
      gananciaPerdidaPorActividadesDeOperacion:['',[Validators.required]],
      gananciaPerdidaProcedentedeOperacionesContinuadas:['',[Validators.required]],
      gananciaPerdidaprocedenteDeOperacionesDiscontinuadas:['',[Validators.required]],
      gananciasAcumuladas:['',[Validators.required]],
      gastosDeAdministracion:['',[Validators.required]],
      ingresoDeActividadesOrdinales:['',[Validators.required]],
      ingresoGastoPorImpuestos:['',[Validators.required]],
      ingresosFinancieros:['',[Validators.required]],
      inventariosCorrientes:['',[Validators.required]],
      otrasParticipacionesEnElPatrimonio:['',[Validators.required]],
      otrasReservas:['',[Validators.required]],
      otrosActivosFinancierosCorrientes:['',[Validators.required]],
      otrosActivosNoFinancierosCorrientes:['',[Validators.required]],
      otrosActivosNoFinancierosNoCorrientes:['',[Validators.required]],
      otrosGastos:['',[Validators.required]],
      otrosIngresos:['',[Validators.required]],
      otrosPasivosFinancierosCorrientes:['',[Validators.required]],
      otrosPasivosFinancierosNoCorrientes:['',[Validators.required]],
      otrosPasivosNoFinancierosCorrientes:['',[Validators.required]],
      pasivoPorImpuestosDiferidos:['',[Validators.required]],
      pasivosCorrientesTotales:['',[Validators.required]],
      patrimonioTotal:['',[Validators.required]],
      propiedadesPlantaYEquipo:['',[Validators.required]],
      tipoDeEmpresa:['',[Validators.required]],
      totalDeActivos:['',[Validators.required]],
      totalDeActivosNoCorrientes:['',[Validators.required]],
      totalDePasivosNoCorrientes:['',[Validators.required]],
      totalDePatrimonioYPasivos:['',[Validators.required]],
      totalPasivo:['',[Validators.required]],
      




    })

  }


  
 
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

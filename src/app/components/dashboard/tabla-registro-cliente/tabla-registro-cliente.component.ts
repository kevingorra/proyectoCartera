import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SuperintendenciafinanzasService } from 'src/app/services/superintendenciafinanzas.service';

@Component({
  selector: 'app-tabla-registro-cliente',
  templateUrl: './tabla-registro-cliente.component.html',
  styleUrls: ['./tabla-registro-cliente.component.css']
})
export class TablaRegistroClienteComponent implements OnInit {

  // formulario!:FormGroup;
  // ConsolidadosSuper:any[]=[];

  // constructor(
  //   public fabricaDiccionario:FormBuilder,
  //   public SuperintendenciafinanzasService:SuperintendenciafinanzasService,
 

  //   ) { }

  // ngOnInit(): void {

  //   this.formulario=this.inicializarFormulario()
  //   this.SuperintendenciafinanzasService.buscar()
  //   .subscribe(respuesta=>{
  //     this.ConsolidadosSuper=respuesta.map((datos:any)=>{
  //       return {
  //        id:datos.id,
  //        ano:datos.ano,
  //        nit:datos.nit,
  //        activosCorrientesTotales:datos.activosCorrientesTotales,
  //        activosIntagiblesDistintosDeLaPlusvalia:datos.activosIntagiblesDistintosDeLaPlusvalia,
  //        activosPorImpuestosCorrientesCorriente:datos.activosPorImpuestosCorrientesCorriente,
  //        activosPorImpuestosDiferidos:datos.activosPorImpuestosDiferidos,
  //        capitalEmitido:datos.capitalEmitido,
  //        costoDeVentas:datos.costoDeVentas,
  //        costosFinancieros:datos.costosFinancieros,   
  //        cuentasComercialesPorCobrarYOtrasCuentasPorCobrarCorrientes:datos.cuentasComercialesPorCobrarYOtrasCuentasPorCobrarCorrientes,       
  //        cuentasComercialesPorCobrarYOtrasCuentasPorCobrarNoCorrientes:datos.cuentasComercialesPorCobrarYOtrasCuentasPorCobrarNoCorrientes,      
  //        cuentasComercialesPorPagarYOtrasCuentasPorPagarNoCorrientes:datos.cuentasComercialesPorPagarYOtrasCuentasPorPagarNoCorrientes,      
  //        cuentasPorPagarComercialesYOtrasCuentasPorPagar:datos.cuentasPorPagarComercialesYOtrasCuentasPorPagar,   
  //        efectivoYEquivalentesAlEfectivo:datos.efectivoYEquivalentesAlEfectivo,      
  //        fechaDeCorte:datos.fechaDeCorte,        
  //        gananciaBruta:datos.gananciaBruta,      
  //        gananciaPerdida:datos.gananciaPerdida,
  //        gananciaPerdidaAntesDeImpuestos:datos.gananciaPerdidaAntesDeImpuestos,
  //        gananciaPerdidaPorActividadesDeOperacion:datos.gananciaPerdidaPorActividadesDeOperacion,
  //        gananciaPerdidaProcedentedeOperacionesContinuadas:datos.gananciaPerdidaProcedentedeOperacionesContinuadas,
  //        gananciaPerdidaprocedenteDeOperacionesDiscontinuadas:datos.gananciaPerdidaprocedenteDeOperacionesDiscontinuadas,
  //        gananciasAcumuladas:datos.gananciasAcumuladas,
  //        gastosDeAdministracion:datos.gastosDeAdministracion,
  //        ingresoDeActividadesOrdinales:datos.ingresoDeActividadesOrdinales,
  //        ingresoGastoPorImpuestos:datos.ingresoGastoPorImpuestos,
  //        ingresosFinancieros:datos.ingresosFinancieros,
  //        inventariosCorrientes:datos.inventariosCorrientes,
  //        otrasParticipacionesEnElPatrimonio:datos.otrasParticipacionesEnElPatrimonio,
  //        otrasReservas:datos.otrasReservas,
  //        otrosActivosFinancierosCorrientes:datos.otrosActivosFinancierosCorrientes,
  //        otrosActivosNoFinancierosCorrientes:datos.otrosActivosNoFinancierosCorrientes,
  //        otrosActivosNoFinancierosNoCorrientes:datos.otrosActivosNoFinancierosNoCorrientes,
  //        otrosGastos:datos.otrosGastos,
  //        otrosIngresos:datos.otrosIngresos,
  //        otrosPasivosFinancierosCorrientes:datos.otrosPasivosFinancierosCorrientes,
  //        otrosPasivosFinancierosNoCorrientes:datos.otrosPasivosFinancierosNoCorrientes,
  //        otrosPasivosNoFinancierosCorrientes:datos.otrosPasivosNoFinancierosCorrientes,
  //        pasivoPorImpuestosDiferidos:datos.pasivoPorImpuestosDiferidos,
  //        pasivosCorrientesTotales:datos.pasivosCorrientesTotales,
  //        patrimonioTotal:datos.patrimonioTotal,
  //        propiedadesPlantaYEquipo:datos.propiedadesPlantaYEquipo,
  //        tipoDeEmpresa:datos.tipoDeEmpresa,
  //        totalDeActivos:datos.totalDeActivos,
  //        totalDeActivosNoCorrientes:datos.totalDeActivosNoCorrientes,
  //        totalDePasivosNoCorrientes:datos.totalDePasivosNoCorrientes,
  //        totalDePatrimonioYPasivos:datos.totalDePatrimonioYPasivos,
  //        totalPasivo:datos.totalPasivo,
    

  //       }
       
  //     })

  //   })

  // }

  // public analizarFormulario(): void{
  //   let datosConsolidados=this.formulario.value
  //   console.log(this.formulario.value)
  //   // datosConsolidados.nit={id:this.formulario.value.nit}


  //   this.SuperintendenciafinanzasService.ingresar(datosConsolidados)
  //   .subscribe(respuesta=>{
     
  //     // window.location.reload()
  //   }
    
  //   )
   
  // }



  // public inicializarFormulario ():FormGroup{ 
 
  //   return this.fabricaDiccionario.group({
  //     id:['',[Validators.required]],
  //     nit:['',[Validators.required]],//Validators.minLength(6)
  //     activosCorrientesTotales:['',[Validators.required]],
  //     ano:['',[Validators.required]],
  //     activosIntagiblesDistintosDeLaPlusvalia:['',[Validators.required]],
  //     activosPorImpuestosCorrientesCorriente:['',[Validators.required]],
  //     activosPorImpuestosDiferidos:['',[Validators.required]],
  //     capitalEmitido:['',[Validators.required]],
  //     costoDeVentas:['',[Validators.required]],
  //     costosFinancieros:['',[Validators.required]],
  //     cuentasComercialesPorCobrarYOtrasCuentasPorCobrarCorrientes:['',[Validators.required]],
  //     cuentasComercialesPorCobrarYOtrasCuentasPorCobrarNoCorrientes:['',[Validators.required]],
  //     cuentasComercialesPorPagarYOtrasCuentasPorPagarNoCorrientes:['',[Validators.required]],
  //     cuentasPorPagarComercialesYOtrasCuentasPorPagar:['',[Validators.required]],
  //     efectivoYEquivalentesAlEfectivo:['',[Validators.required]],
  //     fechaDeCorte:['',[Validators.required]],
  //     gananciaBruta:['',[Validators.required]],
  //     gananciaPerdida:['',[Validators.required]],
  //     gananciaPerdidaAntesDeImpuestos:['',[Validators.required]],
  //     gananciaPerdidaPorActividadesDeOperacion:['',[Validators.required]],
  //     gananciaPerdidaProcedentedeOperacionesContinuadas:['',[Validators.required]],
  //     gananciaPerdidaprocedenteDeOperacionesDiscontinuadas:['',[Validators.required]],
  //     gananciasAcumuladas:['',[Validators.required]],
  //     gastosDeAdministracion:['',[Validators.required]],
  //     ingresoDeActividadesOrdinales:['',[Validators.required]],
  //     ingresoGastoPorImpuestos:['',[Validators.required]],
  //     ingresosFinancieros:['',[Validators.required]],
  //     inventariosCorrientes:['',[Validators.required]],
  //     otrasParticipacionesEnElPatrimonio:['',[Validators.required]],
  //     otrasReservas:['',[Validators.required]],
  //     otrosActivosFinancierosCorrientes:['',[Validators.required]],
  //     otrosActivosNoFinancierosCorrientes:['',[Validators.required]],
  //     otrosActivosNoFinancierosNoCorrientes:['',[Validators.required]],
  //     otrosGastos:['',[Validators.required]],
  //     otrosIngresos:['',[Validators.required]],
  //     otrosPasivosFinancierosCorrientes:['',[Validators.required]],
  //     otrosPasivosFinancierosNoCorrientes:['',[Validators.required]],
  //     otrosPasivosNoFinancierosCorrientes:['',[Validators.required]],
  //     pasivoPorImpuestosDiferidos:['',[Validators.required]],
  //     pasivosCorrientesTotales:['',[Validators.required]],
  //     patrimonioTotal:['',[Validators.required]],
  //     propiedadesPlantaYEquipo:['',[Validators.required]],
  //     tipoDeEmpresa:['',[Validators.required]],
  //     totalDeActivos:['',[Validators.required]],
  //     totalDeActivosNoCorrientes:['',[Validators.required]],
  //     totalDePasivosNoCorrientes:['',[Validators.required]],
  //     totalDePatrimonioYPasivos:['',[Validators.required]],
  //     totalPasivo:['',[Validators.required]],
     
  //   })

  // }
  constructor(){}
ngOnInit(): void {


}
 
}

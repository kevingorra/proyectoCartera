import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SuperintendenciafinanzasService } from 'src/app/services/superintendenciafinanzas.service';


@Component({
  selector: 'app-registro-pdf',
  templateUrl: './registro-pdf.component.html',
  styleUrls: ['./registro-pdf.component.css']
})
export class RegistroPdfComponent implements OnInit {
numero1=0;
numero2=0;
numero3=0;
numero4=0;
numero5=0;
numero6=0;
numero7=0;
numero8=0;
numero9=0;
numero10=0;
numero11=0;
numero12=0;
numero13=0;
numero14=0;
numero15=0;
numero16=0;
numero17=0;
numero18=0;
numero19=0;
numero20=0;
numero21=0;
numero22=0;
numero23=0;
numero24=0;
numero25=0;
numero26=0;
numero27=0;
numero28=0;
numero29=0;
numero30=0;
numero31=0;
numero32=0;
numero33=0;
resultado1= 0;
subresultado1=0;
subresultado2=0;
resultado2=0;
subresultado3=0;
subresultado4=0;
resultado3=0;
resultado4=0;
resultado5=0;
resultado6=0;
resultado7=0;
resultado8=0;
resultado9=0;
resultado10=0;
resultado11=0;
resultado12=0; 
formulario!:FormGroup;
ConsolidadosSuper:any[]=[];
  constructor(public fabricaDiccionario:FormBuilder,public SuperintendenciafinanzasService:SuperintendenciafinanzasService,) { }
  calculo1():void{
    this.resultado1=  this.numero1 - this.numero2;
  } 
  calculo2():void{
    this.subresultado1=this.resultado1+this.numero3
    this.subresultado2=this.numero5+this.numero6+this.numero4
    this.resultado2=this.subresultado1-this.subresultado2
    console.log(this.resultado1)
    console.log(this.resultado2)
  }
  calculo3():void{
    
    this.subresultado3=this.resultado2+this.numero8
    this.subresultado4=this.numero9+this.numero10
    this.resultado3=this.subresultado3-this.subresultado4
  }
  calculo4():void{
    this.resultado4=this.resultado3-this.numero11
  }
  calculo5():void{
    this.resultado5=this.numero12+this.numero13+this.numero14+this.numero15+this.numero16
  }
  calculo6():void{
    this.resultado6=this.numero18+this.numero17+this.numero19
  }
  calculo7():void{
    this.resultado7=this.resultado5+this.resultado6
  }
  calculo8():void{
    this.resultado8=this.numero21+this.numero22+this.numero20
  }
  calculo9():void{
    this.resultado9=this.numero23+this.numero24+this.numero25
  }
  calculo10():void{
    this.resultado10=this.resultado8+this.resultado9
  }
  calculo11():void{
    this.resultado11=this.numero26+this.numero27+this.numero28+this.numero29+this.numero30
  }
  calculo12():void{
    this.resultado12=this.resultado11+this.resultado10
  }
  ngOnInit(): void {

    
    
    this.formulario=this.inicializarFormulario()
    this.SuperintendenciafinanzasService.buscar()
    .subscribe(respuesta=>{
    
      this.ConsolidadosSuper=respuesta.map((datos:any)=>{
     
        return {
          
          id:datos.id,
          nit:datos.nit,
          fechadecorte:datos.fechadecorte,
          ano:datos.ano,
          ingresosoperacionales:datos.ingresosoperacionales,
          costosdeventasydeprestaciondeservicios:datos.costosdeventasydeprestaciondeservicios,
          gananciabruta:datos.gananciabruta,
          otrosingresos:datos.otrosingresos,
          gastosoperacionalesdeventa:datos.gastosoperacionalesdeventa,   
          gastosoperacionalesdeadmon:datos.gastosoperacionalesdeadmon,       
          otrosgastos:datos.otrosgastos,      
          otrasganacias:datos.otrasganacias,      
          utilidadoperacional:datos.utilidadoperacional,   
          ingresosfinancieros:datos.ingresosfinancieros,      
          costosfinancieros:datos.costosfinancieros,        
          otrosingresosoegresos:datos.otrosingresosoegresos,      
          utilidadantesdeimpuesto:datos.utilidadantesdeimpuesto,
          inpuestoderentaycomplementarias:datos.inpuestoderentaycomplementarias,
          gananciasyperdidas:datos.gananciasyperdidas,
          efectivosyequivalentealefectivo:datos.efectivosyequivalentealefectivo,
          clientescp:datos.clientescp,
          inventarioscp:datos.inventarioscp,
          otrosactivosfinancieros:datos.otrosactivosfinancieros,
          otrosactivoscorrientes:datos.otrosactivoscorrientes,
          totalactivocorriente:datos.totalactivocorriente,
          deudoreslp:datos.deudoreslp,
          otrosactivosnocorriente:datos.otrosactivosnocorriente,
          propiedadesplantayequipo:datos.propiedadesplantayequipo,
          totalactivonocorriente:datos.totalactivonocorriente,
          totalactivo:datos.totalactivo,
          obligacionescp:datos.obligacionescp,
          proveedorescp:datos.proveedorescp,
          otrospasivoscorriente:datos.otrospasivoscorriente,
          totalpasivocorriente:datos.totalpasivocorriente,
          obligacionesfinancieraslp:datos.obligacionesfinancieraslp,
          proveedoreslp:datos.proveedoreslp,
          otrospasivosnocorriente:datos.otrospasivosnocorriente,
          totalpasivonocorriente:datos.totalpasivonocorriente,
          totalpasivo:datos.totalpasivo,
          capitalsocial:datos.capitalsocial,
          primadeemision:datos.primadeemision,
          reservas:datos.reservas,
          gananciasacumuladas:datos.gananciasacumuladas,
          otrospatrimonios:datos.otrospatrimonios,
          totalpatrimonio:datos.totalpatrimonio,
          totalpasivomaspatrimonio:datos.totalpasivomaspatrimonio,
        
        }
       
      })

    })
  }


  public analizarFormulario(): void{
    let datosConsolidados=this.formulario.value
    console.log(this.formulario.value)
    // datosConsolidados.nit={id:this.formulario.value.nit}
   
    this.SuperintendenciafinanzasService.ingresar(datosConsolidados)
    .subscribe(respuesta=>{

    datosConsolidados.gananciabruta=this.resultado1
    datosConsolidados.utilidadoperacional=this.resultado2
    datosConsolidados.utilidadantesdeimpuesto=this.resultado3
    datosConsolidados.gananciasyperdidas=this.resultado4
    datosConsolidados.totalactivocorriente=this.resultado5
    datosConsolidados.totalactivonocorriente=this.resultado6
    datosConsolidados.totalactivo=this.resultado7
    datosConsolidados.totalpasivocorriente=this.resultado8
    datosConsolidados.totalpasivonocorriente=this.resultado9
    datosConsolidados.totalpasivo=this.resultado10
    datosConsolidados.totalpatrimonio=this.resultado11
    datosConsolidados.totalpasivomaspatrimonio=this.resultado12
      // window.location.reload()
    }
    
    )
   
  }



  public inicializarFormulario ():FormGroup{ 
 
    return this.fabricaDiccionario.group({
      id:['',[Validators.required]],
      nit:['',[Validators.required]],//Validators.minLength(6)
      fechadecorte:['',[Validators.required]],
      ano:['',[Validators.required]],
      ingresosoperacionales:['',[Validators.required]],
      costosdeventasydeprestaciondeservicios:['',[Validators.required]],
      gananciabruta:['',[Validators.required]],
      otrosingresos:['',[Validators.required]],
      gastosoperacionalesdeventa:['',[Validators.required]],
      gastosoperacionalesdeadmon:['',[Validators.required]],
      otrosgastos:['',[Validators.required]],
      otrasganacias:['',[Validators.required]],
      utilidadoperacional:['',[Validators.required]],
      ingresosfinancieros:['',[Validators.required]],
      costosfinancieros:['',[Validators.required]],
      otrosingresosoegresos:['',[Validators.required]],
      utilidadantesdeimpuesto:['',[Validators.required]],
      inpuestoderentaycomplementarias:['',[Validators.required]],
      gananciasyperdidas:['',[Validators.required]],
      efectivosyequivalentealefectivo:['',[Validators.required]],
      clientescp:['',[Validators.required]],
      inventarioscp:['',[Validators.required]],
      otrosactivosfinancieros:['',[Validators.required]],
      otrosactivoscorrientes:['',[Validators.required]],
      totalactivocorriente:['',[Validators.required]],
      deudoreslp:['',[Validators.required]],
      otrosactivosnocorriente:['',[Validators.required]],
      propiedadesplantayequipo:['',[Validators.required]],
      totalactivonocorriente:['',[Validators.required]],
      totalactivo:['',[Validators.required]],
      obligacionescp:['',[Validators.required]],
      proveedorescp:['',[Validators.required]],
      otrospasivoscorriente:['',[Validators.required]],
      totalpasivocorriente:['',[Validators.required]],
      obligacionesfinancieraslp:['',[Validators.required]],
      proveedoreslp:['',[Validators.required]],
      otrospasivosnocorriente:['',[Validators.required]],
      totalpasivonocorriente:['',[Validators.required]],
      totalpasivo:['',[Validators.required]],
      capitalsocial:['',[Validators.required]],
      primadeemision:['',[Validators.required]],
      reservas:['',[Validators.required]],
      gananciasacumuladas:['',[Validators.required]],
      otrospatrimonios:['',[Validators.required]],
      totalpatrimonio:['',[Validators.required]],
      totalpasivomaspatrimonio:['',[Validators.required]],
     
    })

  }

   
  

}

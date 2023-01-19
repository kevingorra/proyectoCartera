import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Indicadores2019pruebaService } from 'src/app/services/indicadores2019prueba.service';
import { MaestropruebaService } from 'src/app/services/maestroprueba.service';

@Component({
  selector: 'app-buscar-maestro',
  templateUrl: './buscar-maestro.component.html',
  styleUrls: ['./buscar-maestro.component.css']
})
export class BuscarMaestroComponent implements OnInit {
  hide = true;
  formulario!:FormGroup;
  controlDeZona:boolean=true;
  datosZonas:any[]=[];

  constructor(
    public fabricaDiccionario:FormBuilder,
    public servicioMercancias:MaestropruebaService,
    public servicioZonas:Indicadores2019pruebaService

  ) { }

  ngOnInit(): void {

    this.formulario=this.inicializarFormulario()
    this.servicioZonas.consultarZonas()
    .subscribe(respuesta=>{
      this.datosZonas=respuesta.map((zona:any)=>{
        return {nombre:zona.capacidad,id:zona.id}
      })
    })

  }

  public analizarFormulario(): void{
    let datosMercancia=this.formulario.value
    
    datosMercancia.zona={id:this.formulario.value.zona}


    console.log(datosMercancia)
    this.servicioMercancias.ingresarMercancia(datosMercancia)
    .subscribe(respuesta=>{
      console.log(respuesta)
      window.location.reload()
    
    
    })

  }

  public inicializarFormulario ():FormGroup{
    return this.fabricaDiccionario.group({
      iup:['',[Validators.required]],//Validators.minLength(6)
      nit:['',[Validators.required]],
      nombrecliente:['',[Validators.required]],
      fechaantiguedad:['',[Validators.required]],
      tergeneral:['',[Validators.required]],
      cupocredito:['',[Validators.required]],
      clasificacioncliente:['',[Validators.required]],
      clienteperfil:['',[Validators.required]],
      volumen:['',[Validators.required]],
      zona:['',[Validators.required]]

    })

  }

  public buscarMercancia(){
    let iup=this.formulario.value.iup
    console.log(this.datosZonas)
  this.servicioMercancias.buscarMercanciaPorId(iup)
  .subscribe(respuesta=>{
   this.formulario.patchValue({
    nit:respuesta.nit,
    nombrecliente:respuesta.nombrecliente,
    fechaantiguedad:respuesta.fechaantiguedad,
    tergeneral:respuesta.tergeneral,
    cupocredito:respuesta.cupocredito,
    clasificacioncliente:respuesta.clasificacioncliente,
    clienteperfil:respuesta.clienteperfil,
    volumen:respuesta.volumen,
   

   })
   this.formulario.disable()
   this.formulario.controls['iup'].enable()
   this.controlDeZona=false
  },
    error=>{console.log(error.error)
      this.formulario.enable()
      // this.formulario=this.inicializarFormulario()
      this.controlDeZona=true

    })
  }


}

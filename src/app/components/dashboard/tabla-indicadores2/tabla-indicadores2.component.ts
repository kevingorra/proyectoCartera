

import { Component, ViewChild,AfterViewInit,OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Indicadores2020pruebaService } from 'src/app/services/indicadores2020prueba.service';




@Component({
  selector: 'app-tabla-indicadores2',
  templateUrl: './tabla-indicadores2.component.html',
  styleUrls: ['./tabla-indicadores2.component.css']
})
export class TablaIndicadores2Component implements OnInit {

  displayedColumns = [
    'ano', 'nit', 'diascartera', 'capitaltrabajo',
    'kdwventas','razoncorriente','pruebaacida',
    'diasinventario','diasproveedores','endeudamientofinanciero',
    'margenbruto','margenoperacional','margenneto','endeudamientototal','start'
 
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
   
    private  Indicadores2020pruebaService:Indicadores2020pruebaService,
   
    public fabricaDiccionario:FormBuilder) { }


  ngOnInit(): void {
    this.cargarUsuario();
  }

  cargarUsuario(){

    this.formulario=this.inicializarFormulario()
    this.Indicadores2020pruebaService.consultarZonas()
    .subscribe(respuesta=>{
      this.listaindicadores=respuesta.map((datos:any)=>{
        return {
          ano:datos.ano,
          nit:datos.id,
          capitaltrabajo:datos.capitaltrabajo,
          diascartera:datos.diascartera,
          kdwventas:datos.kdwventas,
          razoncorriente:datos.razoncorriente,
          pruebaacida:datos.pruebaacida,
          diasinventario:datos.diasinventario,
          diasproveedores:datos.diasproveedores,
          endeudamientofinanciero:datos.endeudamientofinanciero,
          margenbruto:datos.margenbruto,
          margenoperacional:datos.margenoperacional,
          margenneto:datos.margenneto,
          endeudamientototal:datos.endeudamientototal


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
      nit:['',[Validators.required]],//Validators.minLength(6)
      ano:['',[Validators.required]],
      capitaltrabajo:['',[Validators.required]],
      diascartera:['',[Validators.required]],
      kdwventas:['',[Validators.required]],
      razoncorriente:['',[Validators.required]],
      pruebaacida:['',[Validators.required]],
      diasinventario:['',[Validators.required]],
      diasproveedores:['',[Validators.required]],
      id:['',[Validators.required]],
      endeudamientofinanciero:['',[Validators.required]],
      margenbruto:['',[Validators.required]],
      margenoperacional:['',[Validators.required]],
      margenneto:['',[Validators.required]],
      endeudamientototal:['',[Validators.required]]
     

    })

  }


  
 
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

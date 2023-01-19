import { Component, ViewChild,AfterViewInit,OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MaestropruebaService } from 'src/app/services/maestroprueba.service';


@Component({
  selector: 'app-tabla-maestro',
  templateUrl: './tabla-maestro.component.html',
  styleUrls: ['./tabla-maestro.component.css']
})
export class TablaMaestroComponent implements OnInit {

  displayedColumns = [
    'iup','nombrecliente', 'fechaantiguedad',
    'tergeneral','cupocredito','clasificacioncliente',
    'clienteperfil','start'
 
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
   
    private  MaestropruebaService:MaestropruebaService,
   
    public fabricaDiccionario:FormBuilder) { }


  ngOnInit(): void {
    this.cargarUsuario();
  }

  cargarUsuario(){

    this.formulario=this.inicializarFormulario()
    this.MaestropruebaService.buscar()
    .subscribe(respuesta=>{
      this.listaindicadores=respuesta.map((datos:any)=>{
        return {
          iup:datos.iup,
          nombrecliente:datos.nombrecliente,
          fechaantiguedad:datos.fechaantiguedad,
          tergeneral:datos.tergeneral,
          cupocredito:datos.cupocredito,
          clasificacioncliente:datos.clasificacioncliente,
          clienteperfil:datos.clienteperfil,
       

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
      iup:['',[Validators.required]],//Validators.minLength(6)
 
      nombrecliente:['',[Validators.required]],
      fechaantiguedad:['',[Validators.required]],
      tergeneral:['',[Validators.required]],
      cupocredito:['',[Validators.required]],
      clasificacioncliente:['',[Validators.required]],
      clienteperfil:['',[Validators.required]],
  

    })

  }


  
 
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

import { Injectable } from '@angular/core';
import{HttpClient}from'@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Indicadores2020pruebaService {

  constructor(public peticion:HttpClient) { }
  
  public consultarZonas():Observable<any>{
    let uri="http://localhost:8080/api/tcc/zonas2"
  
  return this.peticion.get(uri)
  }
  buscarZonaPorId(id:any):Observable<any>{


    let uri=`http://localhost:8080/api/tcc/zonas2/${id}`
    return this.peticion.get(uri)
  }
  
  ingresarZona(datosZona:any):Observable<any>{
    let uri=`http://localhost:8080/api/tcc/zonas2`
    return this.peticion.post(uri,datosZona)
  }
  
  
  
  
  
  }
  
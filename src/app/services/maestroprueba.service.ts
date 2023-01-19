import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{HttpClient}from'@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MaestropruebaService {

  constructor( public peticion:HttpClient) { }

  actualizar(id:any):Observable<any>{


    let uri="http://localhost:8080/api/tcc/mercancias"
    return this.peticion.put(uri,id)
  }



  buscarMercanciaPorId(id:any):Observable<any>{


    let uri=`http://localhost:8080/api/tcc/mercancias/${id}`
    return this.peticion.get(uri)
  }

  ingresarMercancia(datosMercancia:any):Observable<any>{
    let uri=`http://localhost:8080/api/tcc/mercancias`
    return this.peticion.post(uri,datosMercancia)
  }

  retirarMercancia(id:any):Observable<any>{
    let uri=`http://localhost:8080/api/tcc/mercancias/${id}`
    return this.peticion.delete(uri)

  }

  public buscar():Observable<any>{
    let uri="http://localhost:8080/api/tcc/mercancias"
  
  return this.peticion.get(uri)
  }
}

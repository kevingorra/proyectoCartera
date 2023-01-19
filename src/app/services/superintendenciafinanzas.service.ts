import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuperintendenciafinanzasService {

  constructor( public peticion:HttpClient) { }

  buscarporid({ id }: { id: any; }):Observable<any>{


    let uri=`http://localhost:8080/api/tcc/consolidado/${id}`
    return this.peticion.get(uri)
  }

  ingresar(datosConsolidados:any):Observable<any>{
    let uri=`http://localhost:8080/api/tcc/consolidado`
    return this.peticion.post(uri,datosConsolidados)
  }

  eliminar (id:any):Observable<any>{
    let uri=`http://localhost:8080/api/tcc/consolidado/${id}`
    return this.peticion.delete(uri)

  }

  public buscar():Observable<any>{
    let uri="http://localhost:8080/api/tcc/consolidado"
  
  return this.peticion.get(uri)
  }
}

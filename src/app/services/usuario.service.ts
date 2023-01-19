import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  listUsuarios: Usuario[] = [
  {usuario: "pKevin", nombre: 'andreuan', apellido: "Gomez", sexo: 'f'},
  {usuario: "jperez", nombre: 'juan', apellido: "perez", sexo: 'M'},
  {usuario: "jperez", nombre: 'juan', apellido: "perez", sexo: 'M'},
  {usuario: "jperez", nombre: 'kevin', apellido: "perez", sexo: 'M'},
  {usuario: "jperez", nombre: 'pablo', apellido: "perez", sexo: 'M'},
  {usuario: "jperez", nombre: 'santiago', apellido: "perez", sexo: 'M'},
  {usuario: "jperez", nombre: 'rodolfo', apellido: "perez", sexo: 'M'},
  {usuario: "jperez", nombre: 'juan', apellido: "perez", sexo: 'M'},
  {usuario: "lele", nombre: 'juan', apellido: "perez", sexo: 'M'},
  {usuario: "migel", nombre: 'juan', apellido: "perez", sexo: 'M'},
  {usuario: "jperez", nombre: 'juan', apellido: "perez", sexo: 'M'},
  {usuario: "jperez", nombre: 'juan', apellido: "perez", sexo: 'M'},
  {usuario: "jperez", nombre: 'juan', apellido: "perez", sexo: 'M'},
  {usuario: "pepe", nombre: 'juan', apellido: "perez", sexo: 'f'},
  {usuario: "jperez", nombre: 'juan', apellido: "perez", sexo: 'M'},
  {usuario: "jperez", nombre: 'juan', apellido: "perez", sexo: 'M'},


];

constructor() { }

getUsuario(){
  return this.listUsuarios.slice()
}
eliminarusuario(index:number){
this.listUsuarios.splice(index,1)
}

agregarusuario(usuario: Usuario){
this.listUsuarios.unshift(usuario)
}
}

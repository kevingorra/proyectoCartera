import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscarindicadores',
  templateUrl: './buscarindicadores.component.html',
  styleUrls: ['./buscarindicadores.component.css']
})
export class BuscarindicadoresComponent {

  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}

export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: "Capital Trabajo", name: '$ 124514', weight: "$ 1.0079", symbol: '514521'},
  {position: "Dias Cartera", name: '$ 512584', weight: "$ 4.0026", symbol: '65565'},
  {position: "Dias Inventario", name: '$ 5615165', weight: "$ 6.941", symbol: '6955'},
  {position: "Dias Proveedores", name: '$ 51885115', weight: "$ 9.0122", symbol: '824863'},
  {position: "Endeudamiento Financiero", name: '$ 115861', weight: "$ 10.811", symbol: '45823'},
  {position: "K de W Ventas", name: '$ 1156156156', weight: "$ 12.0107", symbol: '565984'},
  {position: "Margen Bruto", name: '$ 51156165', weight: "$ 14.0067", symbol: '95486'},
  {position: "Margen Neto", name: '$ 115615651', weight: "$ 15.9994", symbol: '61894'},
  {position: "Margen Operacional", name: '$ 2265158', weight: "$ 18.9984", symbol: '549148'},
  {position: "Prueba Acida", name: '$ 69614', weight: "$ 20.1797", symbol: '5586521'},
  {position: "Razon Corriente", name: '$ 955159', weight: "$ 20.1797", symbol: '54255'},
];
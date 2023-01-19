

import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-grafica-dinamica',
  templateUrl: './grafica-dinamica.component.html',
  styleUrls: ['./grafica-dinamica.component.css']
})
export class GraficaDinamicaComponent {
  selectedValue!: string;

  foods: Food[] = [
    {value: '1', viewValue: 'Ganancia Bruta'},
    {value: '2', viewValue: 'Otros Gastos'},
    {value: '3', viewValue: 'Otros Ingresos'},
    {value: '4', viewValue: 'Patrimonio Total'},
    {value: '5', viewValue: 'Activos Corrientes'},
    {value: '6', viewValue: 'Total de activos'},
    {value: '7', viewValue: 'Capital Emitido'},


  ];
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.4
      }
    },
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: { display: true },
    }
  };
  public barChartLabels: string[] = [ 'Fecha 1', 'Fecha 2','fecha 3'  ];
  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: this.barChartLabels,
    datasets: [
      { data: [ 65, 59,32 ], label: 'ITEM 1' },
      { data: [ 28, 48,29 ], label: 'ITEM 2' },
      { data: [ 61, 39,43 ], label: 'ITEM 3' }
    ]
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    this.barChartType = this.barChartType === 'bar' ? 'line' : 'bar';
  }
}


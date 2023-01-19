import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Se uso angular material (ng add @angular/material)
// se importaron los  siguientes modulos para ser usados 

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatNativeDateModule } from '@angular/material/core';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';





// se importo Formularios De Angular
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//se importo el servicio Http para poder consumir apis
import { HttpClientModule } from '@angular/common/http';
//se importo  esto para la grafica
import { NgChartsModule } from 'ng2-charts';
//PARA MOVER COLUMNAS





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    HttpClientModule,
    MatTableModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatGridListModule,
    MatSelectModule,
    MatChipsModule,
    MatDatepickerModule,
    DragDropModule,
    NgChartsModule,
    MatNativeDateModule,
    MatTabsModule,
    MatStepperModule,
    FormsModule
    
 

  ],
  exports:[
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    HttpClientModule,
    MatTableModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatGridListModule,
    MatSelectModule,
    MatChipsModule,
    MatDatepickerModule,
    DragDropModule,
    NgChartsModule,
    MatNativeDateModule,
    MatTabsModule,
    MatStepperModule,
    FormsModule
   

  ]
})
export class SharedModule { }

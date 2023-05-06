import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAlumnosComponent } from './list-alumnos/list-alumnos.component';
import { AbmAlumnosComponent } from './abm-alumnos/abm-alumnos.component';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { FeaturesModule } from '../features/features.module';



@NgModule({
  declarations: [
    ListAlumnosComponent,
    AbmAlumnosComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    ReactiveFormsModule,
    FeaturesModule,
  ],
  exports :[
    ListAlumnosComponent,
    AbmAlumnosComponent,
    MatTableModule,
    ReactiveFormsModule,
  ]
})
export class EstudiantesModule { }

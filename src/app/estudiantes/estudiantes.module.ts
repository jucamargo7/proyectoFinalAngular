import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAlumnosComponent } from './list-alumnos/list-alumnos.component';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { FeaturesModule } from '../features/features.module';
import { RouterModule } from '@angular/router';
import { EditEstudiantesComponent } from './edit-estudiantes/edit-estudiantes.component';
import { AgregAlumnosComponent } from './agreg-alumnos/agreg-alumnos.component';
import { PersonaService } from '../features/persona.service';


@NgModule({
  declarations: [
    ListAlumnosComponent,
    EditEstudiantesComponent,
    AgregAlumnosComponent,

  ],
  imports: [
    CommonModule,
    MatTableModule,
    ReactiveFormsModule,
    FeaturesModule,
    RouterModule
  ],
  exports :[
    ListAlumnosComponent,
    MatTableModule,
    ReactiveFormsModule,
    EditEstudiantesComponent,
    AgregAlumnosComponent,
  ],
  providers:[
    PersonaService
  ]
})
export class EstudiantesModule { }

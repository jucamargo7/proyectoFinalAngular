import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosModule } from './cursos/cursos.module';
import { CursosComponent } from './cursos/cursos/cursos.component';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { ClasesModule } from './clases/clases.module';
import { ClasesComponent } from './clases/clases/clases.component';
import { ListAlumnosComponent } from './estudiantes/list-alumnos/list-alumnos.component';
import { EditEstudiantesComponent } from './estudiantes/edit-estudiantes/edit-estudiantes.component';
import { AgregAlumnosComponent } from './estudiantes/agreg-alumnos/agreg-alumnos.component';



const routes: Routes = [
{path: "cursos", component: CursosComponent},
{path: "clases", component: ClasesComponent},
{path: "estudiantes", component: ListAlumnosComponent},
{path: "estudiantes/editar/:id", component: EditEstudiantesComponent},
{path: "estudiantes/agregar", component: AgregAlumnosComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CursosModule,
    ClasesModule,
    EstudiantesModule,
  ],
  exports: [RouterModule
  ]
})
export class AppRoutingModule { }

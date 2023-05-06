import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosModule } from './cursos/cursos.module';
import { CursosComponent } from './cursos/cursos/cursos.component';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { ClasesModule } from './clases/clases.module';
import { ClasesComponent } from './clases/clases/clases.component';
import { ListAlumnosComponent } from './estudiantes/list-alumnos/list-alumnos.component';
import { AbmAlumnosComponent } from './estudiantes/abm-alumnos/abm-alumnos.component';

const routes: Routes = [
{path: "cursos", component: CursosComponent},
{path: "clases", component: ClasesComponent},
{path: "estudiantes", component: ListAlumnosComponent},
{path: "estudiantes", component: AbmAlumnosComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CursosModule,
    EstudiantesModule,
    ClasesModule,
  ],
  exports: [RouterModule
  ]
})
export class AppRoutingModule { }

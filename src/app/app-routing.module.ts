import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { ListAlumnosComponent } from './estudiantes/list-alumnos/list-alumnos.component';
import { EditEstudiantesComponent } from './estudiantes/edit-estudiantes/edit-estudiantes.component';
import { AgregAlumnosComponent } from './estudiantes/agreg-alumnos/agreg-alumnos.component';



export const routes: Routes = [
  {
    path: "clases",
    loadChildren: ()=> import("./clases/clases-module.module").then(m=> m.ClasesModuleModule)
  },
  {
    path: "cursos",
    loadChildren: ()=> import("./cursos/cursos.module").then(m=> m.CursosModule)
  },
  {path: "estudiantes", component: ListAlumnosComponent},
  {path: "estudiantes/editar/:id", component: EditEstudiantesComponent},
  {path: "estudiantes/agregar", component: AgregAlumnosComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    EstudiantesModule,
  ],
  exports: [RouterModule
  ]
})
export class AppRoutingModule { }

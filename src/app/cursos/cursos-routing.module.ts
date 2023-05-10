import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './cursos/cursos.component';



const routes:Routes =[
  {
    path:"",
    children:[
      {path: "mis-cursos", component: CursosComponent},
      {path: "**", redirectTo: "mis-cursos"}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class CursosRoutingModule { }

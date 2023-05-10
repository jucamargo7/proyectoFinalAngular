import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClasesComponent } from './clases/clases.component';

const routes:Routes =[
  {
    path:"",
    children:[
      {path: "mis-clases", component: ClasesComponent},
      {path: "**", redirectTo: "mis-clases"}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ClasesRoutingModule { }

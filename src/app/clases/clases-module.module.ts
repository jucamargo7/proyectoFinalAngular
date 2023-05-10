import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClasesComponent } from './clases/clases.component';
import { ClasesRoutingModule } from './clases-routing.module';



@NgModule({
  declarations: [
    ClasesComponent
  ],
  imports: [
    CommonModule,
    ClasesRoutingModule
  ]
})
export class ClasesModuleModule { }

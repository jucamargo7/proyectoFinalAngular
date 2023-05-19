import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos/cursos.component';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursosStoreModule } from './cursos-store.module';



@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    CursosStoreModule,
  ]
})
export class CursosModule { }

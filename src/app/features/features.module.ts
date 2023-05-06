import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { MiDirectivaDirective } from './mi-directiva.directive';



@NgModule({
  declarations: [
    MiDirectivaDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MatTableModule,
    MiDirectivaDirective
  ],
})
export class FeaturesModule { }

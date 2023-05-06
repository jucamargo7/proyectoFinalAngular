import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';



@NgModule({
  declarations: [
    ToolbarComponent,
    BarraLateralComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToolbarComponent,
    BarraLateralComponent
  ],
})
export class SharedModule { }

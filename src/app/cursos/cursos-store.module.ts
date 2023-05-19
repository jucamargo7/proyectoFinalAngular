import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { CursosEffects } from './store/cursos.effects';
import { StoreModule } from '@ngrx/store';
import { cursosFeatureKey, reducer } from './store/cursos.reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(cursosFeatureKey, reducer),
    EffectsModule.forFeature([CursosEffects])
  ]
})
export class CursosStoreModule { }

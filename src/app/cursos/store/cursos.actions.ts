import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
import { Usuarios } from '../models/cursos.model';



export const CursosActions = createActionGroup({
  source: 'Cursos',
  events: {
    // 'Load Cursoss': emptyProps(),
    'Load Cursoss': props<{page: number, per_page: number}>(),
    'Load Cursoss Success': props<{ data: Usuarios[] }>(),
    'Load Cursoss Failure': props<{ error: any }>(),
  }
});


// export const loadCursos = createAction(
//   "[Cursos] Load Cursos",
//   props<{page: number, per_page: number}>()
// );
// export const loadCursosSuccess = createAction(
//   "[Cursos] Load Cursos Success",
//   props<{data: Usuarios}>()
// );
// export const loadCursosFaiture = createAction(
//   "[Cursos] Load Cursos Faiture",
//   props<{error: any}>()
// );
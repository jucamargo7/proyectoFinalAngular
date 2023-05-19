import { createFeature, createReducer, on } from '@ngrx/store';
import { CursosActions } from './cursos.actions';
import { Usuarios } from '../models/cursos.model';

export const cursosFeatureKey = 'cursos';

export interface State {
  data: Usuarios[],

}

export const initialState: State = {
  data: [],
};

export const reducer = createReducer(
  initialState,
  on(CursosActions.loadCursoss, state => state),
  on(CursosActions.loadCursossSuccess, (state, action) =>{
    return {
      ...state,
      data: action.data,
    }
  }),
  on(CursosActions.loadCursossFailure, (state, action) => state),
);

export const cursosFeature = createFeature({
  name: cursosFeatureKey,
  reducer,
});


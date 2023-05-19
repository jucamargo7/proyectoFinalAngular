import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CursosActions } from '../store/cursos.actions';
import { selectCursosState } from '../store/cursos.selectors';



@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(CursosActions.loadCursoss({page: 1, per_page: 6}));
    this.store.select(selectCursosState).subscribe(console.log);
  }

}




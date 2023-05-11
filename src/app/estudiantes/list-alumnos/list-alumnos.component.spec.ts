import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAlumnosComponent } from './list-alumnos.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

describe('ListAlumnosComponent', () => {
  let component: ListAlumnosComponent;
  let fixture: ComponentFixture<ListAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAlumnosComponent ],
      imports: [HttpClientTestingModule],
      

    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

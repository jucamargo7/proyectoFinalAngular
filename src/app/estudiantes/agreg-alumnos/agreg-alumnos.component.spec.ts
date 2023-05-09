import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregAlumnosComponent } from './agreg-alumnos.component';

describe('AgregAlumnosComponent', () => {
  let component: AgregAlumnosComponent;
  let fixture: ComponentFixture<AgregAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregAlumnosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

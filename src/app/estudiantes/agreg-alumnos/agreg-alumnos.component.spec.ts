import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregAlumnosComponent } from './agreg-alumnos.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AgregAlumnosComponent', () => {
  let component: AgregAlumnosComponent;
  let fixture: ComponentFixture<AgregAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregAlumnosComponent ],
      imports: [HttpClientTestingModule, FormsModule, ReactiveFormsModule],

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

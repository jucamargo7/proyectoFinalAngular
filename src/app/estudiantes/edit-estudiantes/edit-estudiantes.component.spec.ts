import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEstudiantesComponent } from './edit-estudiantes.component';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


describe('EditEstudiantesComponent', () => {
  let component: EditEstudiantesComponent;
  let fixture: ComponentFixture<EditEstudiantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEstudiantesComponent ],
      imports:[RouterTestingModule, HttpClientTestingModule, FormsModule, ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

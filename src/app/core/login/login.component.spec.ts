import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [HttpClientTestingModule, FormsModule, ReactiveFormsModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it("Debe retornar formulario invalido", () =>{
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const email = component.loginForm.controls["email"]
    email.setValue("juanpablo9911hotmail.com")
    expect(component.loginForm.invalid).toBeTruthy();
  });

  it("Debe retornar formulario valido", () =>{
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const email = component.loginForm.controls["email"]
    const password = component.loginForm.controls["password"]

    email.setValue("juanpablo9911@hotmail.com")
    password.setValue("12345")

    expect(component.loginForm.invalid).toBeFalse();
  });

})

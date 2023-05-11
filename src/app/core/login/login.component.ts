import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/features/login.service';
import { loginRequest } from '../login-request';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private formBuilder: FormBuilder, private routes:Router, private loginService: LoginService){ }
  loginForm= this.formBuilder.group({
    email: ["juanpablo9911@hotmail.com", [Validators.required, Validators.email]],
    password: [" ", Validators.required],
  })
  ngOnInit(): void {
  }
  get email(){
    return this.loginForm.controls.email;
  }
  get password(){
    return this.loginForm.controls.password;
  }

  login(){
    if(this.loginForm.valid){
      this.loginService.login(this.loginForm.value as loginRequest).subscribe({
        next: (userData)=>  {
            console.log(userData);
        },
        error: (errorData)=>{
            console.log(errorData);
        },
        complete: ()=>{
            console.info("Login esta completo");
            this.routes.navigateByUrl("/estudiantes");
            this.loginForm.reset();
        }
      })
    }
    else{
      this.loginForm.markAllAsTouched();
      alert("Error")
    }
  }

}

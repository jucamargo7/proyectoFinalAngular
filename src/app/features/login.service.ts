import { Injectable } from '@angular/core';
import { loginRequest } from '../core/login-request';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Observable, catchError, throwError} from "rxjs";
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }


  login(credentials:loginRequest):Observable<User>{
    return this.http.get<User>("././assets/data.json").pipe(
      catchError(this.manejoErrores)
    )
  }
  private manejoErrores( error: HttpErrorResponse){
    if(error.status===0){
      console.error("se ha producido un error", error.error);
    }
    else{
      console.error("Backend retornó código de estado", error.status, error.error);
    }
    return throwError(()=> Error("Algo falló. Por favor intente nuevamente"));
  }

}

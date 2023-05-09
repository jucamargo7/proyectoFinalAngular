import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../core/persona';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  add(persona: Persona) {
    throw new Error('Method not implemented.');
  }
  private url= "http://localhost:3000/estudiantes";

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<Persona[]>{
  return this.httpClient.get<Persona[]>(this.url);

}
  update(persona:Persona){
    return this.httpClient.put(this.url + "/" + persona.id, persona);
  }
  get(id:number):Observable<Persona>{
    return this.httpClient.get<Persona>(this.url + "/" + id );
  }
  agregar(persona:Persona){
    return this.httpClient.post(this.url, persona);
  }
}

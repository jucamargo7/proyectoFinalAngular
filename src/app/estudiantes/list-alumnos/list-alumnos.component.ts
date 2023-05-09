import { Component, OnInit} from '@angular/core';
import { Persona } from 'src/app/core/persona';
import { PersonaService } from 'src/app/features/persona.service';


@Component({
  selector: 'app-list-alumnos',
  templateUrl: './list-alumnos.component.html',
  styleUrls: ['./list-alumnos.component.css']
})
export class ListAlumnosComponent implements OnInit{
  personas: Persona[] | undefined;

  constructor(private personaService: PersonaService){ }

  ngOnInit(): void {
    this.personaService.getAll().subscribe((data:Persona[]) =>{
      this.personas = data;
    })
  }
  borrar(id:number){
    this.personaService.delete(id).subscribe((resp) =>{
      this.personaService.getAll().subscribe((data:Persona[])=>{
        this.personas=data;
      })

    })
  }
}







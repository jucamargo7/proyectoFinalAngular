import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/core/persona';
import { PersonaService } from 'src/app/features/persona.service';

@Component({
  selector: 'app-edit-estudiantes',
  templateUrl: './edit-estudiantes.component.html',
  styleUrls: ['./edit-estudiantes.component.css']
})
export class EditEstudiantesComponent implements OnInit {

  mainFormGroup: FormGroup;
  persona!: Persona;

  constructor (private activateRoute:ActivatedRoute,
    private router: Router,
    private personaService: PersonaService,
    private formBuilder:FormBuilder) { 

      this.mainFormGroup = formBuilder.group({
        Nombre: ["", Validators.required],
        Apellido: ["", Validators.required],
      });

    }
  ngOnInit(): void {
    this.activateRoute.params.subscribe( (params) => {
      var id = params["id"];
      this.personaService.get(id).subscribe((data:Persona)=>{
        this.persona = data;
        this.mainFormGroup.patchValue(data);
      })
    })
  }
  submitForm(){
    this.persona.Nombre = this.mainFormGroup.get("Nombre")?.value;
    this.persona.Apellido = this.mainFormGroup.get("Apellido")?.value;
    this.personaService.update(this.persona).subscribe((_resp)=>{
      this.router.navigate(["persona"]);
    })

  }

}

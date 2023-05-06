import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-abm-alumnos',
  templateUrl: './abm-alumnos.component.html',
  styleUrls: ['./abm-alumnos.component.css']
})
export class AbmAlumnosComponent implements OnInit{
  public formularioRegistro: FormGroup | undefined;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formularioRegistro = this.fb.group({
      nombreRegistro: [],
      apellidoRegistro: [],
      emailRegistro: [],
    })
  }

}

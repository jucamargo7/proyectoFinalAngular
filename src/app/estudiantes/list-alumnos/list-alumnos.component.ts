import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Estudiantes } from 'src/app/core/estudiantes-lista';

@Component({
  selector: 'app-list-alumnos',
  templateUrl: './list-alumnos.component.html',
  styleUrls: ['./list-alumnos.component.css']
})
export class ListAlumnosComponent implements OnInit {
  estudiantes: Estudiantes [] = [
    new Estudiantes(1, "Juan", "Camargo", "juanpablo9911@hotmailcom", false),
    new Estudiantes(1, "Camilo", "Manjarrez", "camilo_m@hotmailcom", true),
    new Estudiantes(1, "Daniel", "Alzate", "dani-alzate@hotmailcom", false),
    new Estudiantes(1, "Javier", "Cardenas", "javicardenas@hotmailcom", true),
  ];
  displayedColumns = ["id", "nombre", "apellido", "correo", "estado"];

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


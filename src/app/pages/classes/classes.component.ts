import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  constructor() { }
  title= "Cursos / Clases";
blocks=[
  {
    title:"Exámenes Internacionales",
    text: "Harry Potter se ha quedado huérfano y vive en casa de sus abominables tíos y del insoportable primo Dudley. Harry se siente muy triste y solo, hasta que un buen día recibe una carta que cambiará su vida para siempre",
    src:"/assets/images/international.jpg",
    alt:"Exámenes Internacionales"
  },
  {
    title:"Clases de Apoyo Escolar",
    text:"Harry Potter se ha quedado huérfano y vive en casa de sus abominables tíos y del insoportable primo Dudley. Harry se siente muy triste y solo, hasta que un buen día recibe una carta que cambiará su vida para siempre.",
    src:"/assets/images/escolar.jpg",
    alt:"Clases de Apoyo Escolar"
  },
  {
    title:"Apoyo a Alumnos del Profesorado",
    text:"Harry Potter se ha quedado huérfano y vive en casa de sus abominables tíos y del insoportable primo Dudley. Harry se siente muy triste y solo, hasta que un buen día recibe una carta que cambiará su vida para siempre.",
    src:"/assets/images/profesorado.jpg",
    alt:"Profesorado"
  },
  {
    title:"Clases de Conversación",
    text:"Harry Potter se ha quedado huérfano y vive en casa de sus abominables tíos y del insoportable primo Dudley. Harry se siente muy triste y solo, hasta que un buen día recibe una carta que cambiará su vida para siempre.",
    src:"/assets/images/conversacion.jpg",
    alt:"Clases de Conversación"
  },
  {
    title:"Inglés con Fines Específicos",
    text:"Harry Potter se ha quedado huérfano y vive en casa de sus abominables tíos y del insoportable primo Dudley. Harry se siente muy triste y solo, hasta que un buen día recibe una carta que cambiará su vida para siempre.",
    src:"/assets/images/ingeniero.jpg",
    alt:"Inglés con Fines Específicos"
  },
  {
    title:"Inglés General",
    text:"Harry Potter se ha quedado huérfano y vive en casa de sus abominables tíos y del insoportable primo Dudley. Harry se siente muy triste y solo, hasta que un buen día recibe una carta que cambiará su vida para siempre.",
    src:"/assets/images/general.jpg",
    alt:"Inglés General"
  }
]

  ngOnInit(): void {
  }

}

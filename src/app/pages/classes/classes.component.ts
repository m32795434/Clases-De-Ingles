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
    src:"/assets/images/3840/international.jpg",
    alt:"Exámenes Internacionales",
    src1600:"/assets/images/1600/international1600.jpg"
  },
  {
    title:"Clases de Apoyo Escolar",
    text:"Harry Potter se ha quedado huérfano y vive en casa de sus abominables tíos y del insoportable primo Dudley. Harry se siente muy triste y solo, hasta que un buen día recibe una carta que cambiará su vida para siempre.",
    src:"/assets/images/3840/escolar.jpg",
    alt:"Clases de Apoyo Escolar",
    src1600:"/assets/images/1600/escolar1600.jpg"
  },
  {
    title:"Apoyo a Alumnos del Profesorado",
    text:"Harry Potter se ha quedado huérfano y vive en casa de sus abominables tíos y del insoportable primo Dudley. Harry se siente muy triste y solo, hasta que un buen día recibe una carta que cambiará su vida para siempre.",
    src:"/assets/images/3840/profesorado.jpg",
    alt:"Profesorado",
    src1600:"/assets/images/1600/profesorado1600.jpg"
  },
  {
    title:"Clases de Conversación",
    text:"Harry Potter se ha quedado huérfano y vive en casa de sus abominables tíos y del insoportable primo Dudley. Harry se siente muy triste y solo, hasta que un buen día recibe una carta que cambiará su vida para siempre.",
    src:"/assets/images/3840/conversacion.jpg",
    alt:"Clases de Conversación",
    src1600:"/assets/images/1600/conversacion1600.jpg"
  },
  {
    title:"Inglés con Fines Específicos",
    text:"Harry Potter se ha quedado huérfano y vive en casa de sus abominables tíos y del insoportable primo Dudley. Harry se siente muy triste y solo, hasta que un buen día recibe una carta que cambiará su vida para siempre.",
    src:"/assets/images/3840/ingeniero.jpg",
    alt:"Inglés con Fines Específicos",
    src1600:"/assets/images/1600/ingeniero1600.jpg"
  },
  {
    title:"Inglés General",
    text:"Harry Potter se ha quedado huérfano y vive en casa de sus abominables tíos y del insoportable primo Dudley. Harry se siente muy triste y solo, hasta que un buen día recibe una carta que cambiará su vida para siempre.",
    src:"/assets/images/3840/general.jpg",
    alt:"Inglés General",
    src1600:"/assets/images/1600/general1600.jpg"
  }
]

  ngOnInit(): void {
  }

}

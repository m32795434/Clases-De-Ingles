import { Component, OnInit } from '@angular/core';
import { ResourcesService} from 'src/app/services/resources.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {

  constructor(
    private resourcesService: ResourcesService

  ) { }
  title= "Recursos";
  datita : any;

blocks=[
  {
    title:"Recursos Tipo 1",
    text: "Harry Potter se ha quedado huérfano y vive en casa de sus abominables tíos y del insoportable primo Dudley. Harry se siente muy triste y solo, hasta que un buen día recibe una carta que cambiará su vida para siempre"
  },
  {
    title:"Recursos Tipo 2",
    text:"Harry Potter se ha quedado huérfano y vive en casa de sus abominables tíos y del insoportable primo Dudley. Harry se siente muy triste y solo, hasta que un buen día recibe una carta que cambiará su vida para siempre."
  },
  {
    title:"Recursos Tipo 3",
    text:"Harry Potter se ha quedado huérfano y vive en casa de sus abominables tíos y del insoportable primo Dudley. Harry se siente muy triste y solo, hasta que un buen día recibe una carta que cambiará su vida para siempre."
  }
    
]

showResources () {
  this.resourcesService.getResources()
  .subscribe((data: any)=>{
    console.log(data);
    this.datita = data;
  });
}

ngOnInit(): void {
  this.showResources();
}
}

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

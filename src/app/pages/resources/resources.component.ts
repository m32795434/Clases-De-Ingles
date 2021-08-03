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
  


recursos : any;
showResources () {
  this.resourcesService.getResources()
  .subscribe((data: any)=>{
    
    this.recursos = data;
  });
}

ngOnInit(): void {
  this.showResources();
}
}

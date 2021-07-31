
import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-nav',
  templateUrl: `./nav.component.html`,
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {
  
  constructor(
    private app: AppComponent
  
   ) { }
  
  toggleInformationNav () {
   return this.app.mostrar = !this.app.mostrar;
  }
  ngOnInit(): void  {
    
  }
}
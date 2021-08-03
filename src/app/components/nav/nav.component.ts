
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: `./nav.component.html`,
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  constructor(){}
    
 
  public shouldshow:any = false;
  
  toggleInformation (){
  this.shouldshow = !this.shouldshow;
  
  }
  
  
  
  ngOnInit(): void  {
    
  }
}


// import { AppComponent } from 'src/app/app.component';

// export class NavComponent implements OnInit {
  
//   constructor(
//    private app: AppComponent
  
//    ) { }
  
//    toggleInformationNav () {
//    return this.app.mostrar = !this.app.mostrar;
//   }
//   ngOnInit(): void  {
    
//   }
// }
import { Component } from '@angular/core';
// import { NavComponent } from './components/nav/nav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(
    // private nav: NavComponent
   ) { }
  
  mostrar = false;
  toggleInformation () {
    this.mostrar = !this.mostrar;
  }

  ngOnInit(): void  {
  }
}

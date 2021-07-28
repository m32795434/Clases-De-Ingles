
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

/* . . . */
@Component({
  selector: 'app-nav',
  styleUrls: ['./nav.component.scss'],
  template: `
    <a [href]="skipLinkPath">Skip to main content</a>
    <nav>
    <ul class="nav-list" id="nav"> 
        <li class="nav-list-item">
            <a routerLink="/about" class="nav-list-item-link">Sobre Mí</a>
        </li>
        <li class="nav-list-item">
            <a routerLink="/classes" class="nav-list-item-link">Cursos/Clases</a>
        </li>
        <li class="nav-list-item">
            <a routerLink="/contact" class="nav-list-item-link">Contacto</a>
        </li>
        <li class="nav-list-item">
            <a routerLink="/resources" class="nav-list-item-link">Recursos</a>
        </li>
    </ul>
</nav>
  `
})

export class NavComponent implements OnInit {
  skipLinkPath: string | undefined;

  constructor( 
    private route: ActivatedRoute) { }
  
  ngOnInit() {
    
    this.skipLinkPath = `${this.route.url}#main`;
    console.log(this.route)
   
    
  }}
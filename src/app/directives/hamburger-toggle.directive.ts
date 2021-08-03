// <!--Directive selector: appHamburgerToggle:open/close animation on click. LA APAGUÉ-->
import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHamburgerToggle]'
})
export class HamburgerToggleDirective {

  constructor() { }

  @HostBinding('class.is-active')
  isActive = false;


  @HostListener('click')
  toggleActive(): void {
    this.isActive = !this.isActive;
  }
}
 


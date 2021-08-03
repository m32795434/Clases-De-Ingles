import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHamburgerToggle]'
})
export class HamburgerToggleDirective {

  constructor() { }

  @HostBinding('class.is-active')
  private isActive = false;


  @HostListener('click')
  toggleActive(): void {
    this.isActive = !this.isActive;
  }
}
 


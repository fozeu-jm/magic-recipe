import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirectiveDirective {

  @HostBinding('class.open') isOpen = false;

  constructor() { }

  @HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen;
  }

}

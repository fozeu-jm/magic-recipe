import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appActiveRecipeDirective]'
})
export class ActiveRecipeDirectiveDirective {

  @HostBinding('class.active') isActive = false;
  
  constructor() { }

  @HostListener('click') toggleOpen(){
    this.isActive = !this.isActive;
  }

}

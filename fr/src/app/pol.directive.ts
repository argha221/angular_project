import { Directive,ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appPol]'
})
export class PolDirective {

  constructor(public ele:ElementRef) {
    ele.nativeElement.style.color = 'blue';
   }

}

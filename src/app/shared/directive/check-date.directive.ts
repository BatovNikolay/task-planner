import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: 'input [checkDate]'
})
export class CheckDateDirective {

  constructor(
    private element: ElementRef
    ) {
  }

  @HostListener('input', ['$event'])
  onInput(event) {
    this.element.nativeElement.value = event.target.value.replace(/[^ -:0-9]+/, '');
  }
}

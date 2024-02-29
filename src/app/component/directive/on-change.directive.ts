import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnChange]'
})
export class OnChangeDirective {


  @HostListener('input', ['$event']) onInputChange(event : any) {
    console.log('Input cambiato:', event.target.value);
  }
}
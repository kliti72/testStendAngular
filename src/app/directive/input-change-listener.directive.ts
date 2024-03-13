import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appInputChangeListener]'
})
export class InputChangeListenerDirective {

  @Input() inputIdentifier: string = ''; // Identificatore univoco per l'input
  @Output() inputChange: EventEmitter<{ id: string, value: string }> = new EventEmitter<{ id: string, value: string }>();

  constructor() { }

  @HostListener('input', ['$event.target.value'])
  onInput(value: string): void {
    this.inputChange.emit({ id: this.inputIdentifier, value: value });
  }

}

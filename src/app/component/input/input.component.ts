import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {


  @Input() nameInput : string = '';
  @Input() type : string = '';
  @Input() placeholder : string = '';
  @Input() id : string = '';
  @Input() name : string = '';
  


}

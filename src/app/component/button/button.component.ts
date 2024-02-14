import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css', '../header/header.component.css']
})
export class ButtonComponent  { 

  @Input() textInfo : string = '';
  @Input() classes : string[] = [];
  @Input() routerLink : string = '';
  @Input() routerLinkActive : string = '';



}

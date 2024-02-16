import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrl: './notify.component.css'
})
export class NotifyComponent {

  @Input() classes : string[] = [];
  @Input() contenutoNotifica : string = '';


}

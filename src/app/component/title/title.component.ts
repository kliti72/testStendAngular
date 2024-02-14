import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css', '../header/header.component.css']
})
export class TitleComponent {
   @Input() title : string;
   @Input() classi: string[] = [];

   constructor() {
    this.title = '';
    this.classi = [];
   }


}

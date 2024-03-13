import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InputChangeListenerDirective } from '../../directive/input-change-listener.directive';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.css',
  
})
export class FormBuilderComponent implements OnInit {

  @Input() url : string = '';
  @Input() id : string = "";

  @Input() input : {
    id : string,
    name : string,
    classes : string[],
    type : string,
    placeholder: string,
  }[] = [];

  @Input() button : {
    id : string,
    type : string,
    text : string,
    clickAction : string,
  }[] = [];

  constructor(private http : HttpClient ){}

  ngOnInit(): void {

    this.http.get<any>(this.url).subscribe(data => {
      console.log(data)
      this.id = data.id;
      this.input = data.input;
      this.button = data.button;
    })
    
  }
  
}

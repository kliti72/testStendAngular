import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.css'
})
export class FormBuilderComponent implements OnInit {

  @Input() url : string = '';
  @Input() idForm : string = "";

  @Input() input : {
    name : string,
    classes : string[],
    type : string,
    placeholder: string
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
      this.idForm = data.idForm;
      this.input = data.input;
      this.button = data.button;
    })
    
  }
}

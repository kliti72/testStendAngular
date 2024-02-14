import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ul-list',
  templateUrl: './ul-list.component.html',
  styleUrls: ['./ul-list.component.css', '../header/header.component.css']
})

export class UlListComponent implements OnInit {
  @Input() classes : string[] = ['menu_list'];

  @Input() items : {
    classes: string[],
    routerLink : string,
    routerLinkActive : string,
    text : string
  }[] = []

    
  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get<any>('../assets/json/headerItems.json').subscribe(data => {
      this.items = data;
    })
  }

}

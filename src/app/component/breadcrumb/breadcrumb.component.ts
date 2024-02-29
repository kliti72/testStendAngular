import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Route } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css'
})
export class BreadcrumbComponent {

  breadcrumb : string = 'Home / ';

  queryParams : any;

  breadcumpList : {
    url : string,
    name : string
  }[] = []

  listRoute : string[] = [];

  

  constructor(private router : Router){
    this.router.events.subscribe((event) => {
      let str: string = this.router.url;
      str = str.replaceAll(("%20"), ' ');
      str = str.replace(("/"), ' ');
      str = str.replaceAll(("/"), ' / ');
      this.breadcrumb = str;

      str = str.replaceAll(("/"), '/');
      let listRoute = str.split("/");
      this.listRoute = listRoute;

    });
  }
    
  sendTo(listTo : string[], items : string) : void {
    
    let urlBuild = '';
    let posizioneAttuale = 0;
    
    // Ricerca posizione richiesta
    for(let y=0; y < listTo.length; y++){
      if(listTo[y] === items){
        posizioneAttuale = y;
      } 
    }

    // Costruisci fino alla posizione attuale
    for(let o=0; o<=posizioneAttuale; o++){
      urlBuild += listTo[o] + "/";
    }

    urlBuild = urlBuild.replace(/%20/g, '').replace(/\s/g, '');
    
    if(urlBuild === "/showNotePages"){
      this.router.navigate(["/home"]);
    } else {
      this.router.navigate([urlBuild]);
    }
    // Stampa costrutto fino alla posizione richiesta
    console.log(urlBuild);
  }
}


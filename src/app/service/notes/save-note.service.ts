import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface Note {
  title : string;
  description : string;
}

@Injectable({
  providedIn: 'root'
})

export class SaveNoteService {

  base = "http://localhost:8080"
  notecontainer : Note[] = []

  constructor(private http : HttpClient) { }

  saveData(title = '', description = ''){
    this.notecontainer.push({
      title : title,
      description : description,
    });
  }

  getDati(): Observable<Note[]> {
    return this.http.get<Note[]>(this.base + "/getNotesByUserId/152");
  }


  
  getData(){

    this.getDati().subscribe(dati => {
      console.log(dati)
      this.notecontainer = [];
      dati.forEach(element  => {
        this.notecontainer.push({
          title : element['title'],
          description: element['description']
        });
      });

    });

    return this.notecontainer;
  }


}

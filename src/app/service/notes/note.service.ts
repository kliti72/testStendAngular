import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { notesDTO } from '../../dto/notesDTO';
import { userDTO } from '../../dto/userDTO';
import { Envoirment } from '../../../Envoirment';

interface Note {
  title : string;
  description : string;
}

@Injectable({
  providedIn: 'root'
})

export class SaveNoteService {

  base = "http://localhost:8080"
  notecontainer : Note[] = [];
  env : Envoirment = new Envoirment();
  apiNotes = this.env.generateApiWithRoute("getNotesByUserId")
  apiInsertNotes = this.env.generateApiWithRoute("insertNotes")

  constructor(private http : HttpClient) { }

  getNotesByUserId(id : number) : Observable<notesDTO[]> {
    return this.http.get<notesDTO[]>(this.apiNotes + "/" + id);
  }

  insertNotes(id : number, notesDTO : notesDTO) : Observable<notesDTO[]> {
    return this.http.put<notesDTO[]>(this.apiInsertNotes + "/" + id, notesDTO);
  }

}

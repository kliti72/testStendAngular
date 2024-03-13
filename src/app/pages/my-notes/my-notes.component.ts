import { Component, OnInit } from '@angular/core';
import { SaveNoteService } from '../../service/notes/note.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { notesDTO } from '../../dto/notesDTO';


@Component({
  selector: 'app-my-notes',
  templateUrl: './my-notes.component.html',
  styleUrl: './my-notes.component.css'
})
export class MyNotesComponent implements OnInit {

  constructor(private http : HttpClient, private saveNoteService : SaveNoteService, private cookie : CookieService){}

  userId : string = this.cookie.get("userId");
  notes : notesDTO[] = [];

  ngOnInit(): void {

    let id = parseInt(this.userId);

    this.saveNoteService.getNotesByUserId(id).subscribe({
      next: (response) => {
          console.log("lettura avventua con successo, inject card")
          this.notes = response;
      },
      error: (error) => {
        console.log(error)
      }
    })

  }

}

import { Component, OnInit } from '@angular/core';
import { SaveNoteService } from '../../service/notes/save-note.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrl: './note-card.component.css',
  preserveWhitespaces: true
})
export class NoteCardComponent {

  note : {
    title : string,
    description : string,
  }[] = [];

  
  noteSlice : {
    title : string,
    description : string,
  }[] = [];

  router : Router;

  constructor(saveNote : SaveNoteService, router : Router){
    this.note = saveNote.getData();
    this.noteSlice = this.getSliced();
    this.router = router;
  }

  readAllNote(title : string): void {
     this.router.navigate(["/showNotePages", title])
  }


  getSliced() : {
    title : string,
    description : string
  }[] {

    let note = this.note;

    for(let x=0; x< note.length; x++){
      let noteCopy = {...note[x]};
      this.noteSlice.push(noteCopy);
      let dataSlice = note[x].description.slice(0, 80);
      this.noteSlice[x].description = dataSlice + "...";
    }
    return this.noteSlice;
  }

}


import { Component } from '@angular/core';
import { SaveNoteService } from '../../service/save-note.service';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrl: './note-card.component.css'
})
export class NoteCardComponent {

  note : {
    title : string,
    data : string,
  }[] = [];


  constructor(saveNote : SaveNoteService){
    this.note = saveNote.getData()
  }



}

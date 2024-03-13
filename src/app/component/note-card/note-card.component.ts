import { Component, Input, OnInit } from '@angular/core';
import { SaveNoteService } from '../../service/notes/note.service';
import { Router } from '@angular/router';
import { notesDTO } from '../../dto/notesDTO';


@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrl: './note-card.component.css',
  preserveWhitespaces: true
})
export class NoteCardComponent {

  @Input() title : string = '' ;
  @Input() description : string = '';


}


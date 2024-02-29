import { Component, Input, OnInit, input } from '@angular/core';
import { SaveNoteService } from '../../service/notes/save-note.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { NoteCardComponent } from '../../component/note-card/note-card.component';

@Component({
  selector: 'app-show-note-pages',
  templateUrl: './show-note-pages.component.html',
  styleUrl: './show-note-pages.component.css'
})
export class ShowNotePagesComponent implements OnInit {

  route : ActivatedRoute;
  servizioNote : SaveNoteService;

  @Input() nota : {
    title : string,
    data : string
  }[] = []

  @Input() titleToShow : string = '';  
  @Input() title : string = '';
  @Input() description : string = '';

  constructor(noteService : SaveNoteService, route : ActivatedRoute){
    this.servizioNote = noteService;
    this.route = route;
  }


  ngOnInit(): void {
      let title = this.route.snapshot.paramMap.get('title')?.toString();

      if(title === undefined){
        this.title = '';

      } else {
        this.title = title;
        this.description = this.getDescriptionByTitle();
      }
  }

  getDescriptionByTitle() : string {
    let note = this.servizioNote.getData();
    console.log(note)
    let description = '';

    for(let x=0; x < note.length; x++){
      if(note[x].title === this.title){
        description = note[x].description;
      }
    }

    return description;

  }

  backToService(){

  }
  

}

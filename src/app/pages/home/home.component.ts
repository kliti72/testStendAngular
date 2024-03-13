import { Component, numberAttribute } from '@angular/core';
import { SaveNoteService } from '../../service/notes/note.service';
import { notesDTO } from '../../dto/notesDTO';
import { CookieService } from 'ngx-cookie-service';
import { userDTO } from '../../dto/userDTO';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../../component/notify/notify.component.css']
})

export class HomeComponent {

  value : string = '';
  conteggio : number = 0;
  button : string = '';
  title : string = '';
  notifica : boolean = false;
  userId = this.cookie.get("userId");

  constructor(private saveService : SaveNoteService, private cookie : CookieService) {
  }

  updateCounter(value : string){
    this.conteggio = conteggio(value);
  }

  updateTitle(event : any){
    this.title = event.target.value;
  }

  saveNote(){
    
    let note = new notesDTO();
    
    note.description = this.value;
    note.title = this.title;

    let userId = parseInt(this.userId);
    this.saveService.insertNotes(userId, note);

    console.log("Nota", note, "Salvata")


    this.saveService.insertNotes(userId, note).subscribe
    ({
      next: (response) => {
        console.log("risposta ", response)
      },
      error: (error) => {
        console.log(error);
      }
    });

    this.notifica = true;
    
    setTimeout(() => {
      this.notifica = false;
    }, 3000);

  }
  
  getInfo() {
    console.log("Info Info")
  }

}

function conteggio(vlaue: string){
  let count = 0;
  for(let i =0; i < vlaue.length; i++){
      if(vlaue[i] === " "){continue;}
      count++;
    }
  return count;
}

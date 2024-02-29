import { Component, numberAttribute } from '@angular/core';
import { SaveNoteService } from '../../service/notes/save-note.service';

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

  constructor(private saveService : SaveNoteService) {
  }

  updateCounter(value : string){
    this.conteggio = conteggio(value);
  }

  updateTitle(event : any){
    this.title = event.target.value;
  }

  saveNote(){
    let title = this.title;
    let data = this.value;

    this.saveService.saveData(title, data);
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

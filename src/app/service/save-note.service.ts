import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaveNoteService {

  notecontainer : {
    title : string,
    data : string,
  }[] = [];

  constructor() { }

  saveData(title = '', data = ''){
    this.notecontainer.push({
      title : title,
      data : data,
    });
  }


  getData(){
    return this.notecontainer;
  }


}

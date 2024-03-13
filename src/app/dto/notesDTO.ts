import { userDTO } from "./userDTO"

export class notesDTO {
    id? : number;
    title : string;
    description : string;
    user? : userDTO;

    constructor();
    constructor(title : string, description : string)
    constructor(title? : string, description? : string, user? : userDTO, id?: number){
        this.id=id || 0;
        this.title=title || '';
        this.description=description || '';
        this.user=user || new userDTO;
    }
    
}
import { userDTO } from "./userDTO"

export class notesDTO {
    id : bigint;
    title : string;
    description : string;
    user : userDTO;

    constructor(id: bigint, title : string, description : string, user : userDTO){
        this.id=id;
        this.title=title;
        this.description=description;
        this.user=user;
    }
    
}
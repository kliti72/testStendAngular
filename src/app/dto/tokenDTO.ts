import { userDTO } from "./userDTO";
import { roleDTO } from "./roleDTO";
export class tokenDTO {
    id? : number;
    token : string;
    user : userDTO

    constructor(id : number, token : string, user : userDTO, role : roleDTO){
        this.id = id;
        this.token = token;
        this.user = user;
    }
}
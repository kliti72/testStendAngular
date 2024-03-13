import { roleDTO } from "./roleDTO";

export class userDTO {
    id? : number;
    name? : string;
    email? : string;
    password? : string;
    role : roleDTO;

    constructor();
    constructor(email : string, password : string);
    constructor(email : string, password : string, name?: string, role? : roleDTO, id?: number);
    constructor(email? : string, password? : string, name?: string, role? : roleDTO, id?: number){
        this.id = id || 0;
        this.name = name || '';
        this.email = email || '';
        this.password = password || '';
        this.role = role || new roleDTO(2, "GUEST");
    }

}
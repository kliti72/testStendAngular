export class userDTO {
    id : bigint;
    name : string;
    email : string;
    password : string;
    role : string;

    constructor(id: bigint, name: string, email: string, password : string, role : string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
    
    }

}
import { Injectable } from '@angular/core';
import { Envoirment } from '../../../Envoirment';
import { HttpClient } from '@angular/common/http';
import { userDTO } from '../../dto/userDTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  env : Envoirment = new Envoirment();
  apiRegister = this.env.generateApiWithRoute("register")
  apiLogin = this.env.generateApiWithRoute("login")
  apiUserById = this.env.generateApiWithRoute("getUserById")

  constructor(private http : HttpClient) {}

  registerUser(user : userDTO) : Observable<userDTO> {
    console.log("Servizio chiamato. su url " + this.apiRegister)
    return this.http.put<userDTO>(this.apiRegister, user)
  }

  loginUser(user : userDTO) : Observable<userDTO> {
    return this.http.post<userDTO>(this.apiLogin, user)
  }
  
  getUserById(id : number) : Observable<userDTO>{
    return this.http.get<userDTO>(this.apiUserById + "/" + id)
  }

}

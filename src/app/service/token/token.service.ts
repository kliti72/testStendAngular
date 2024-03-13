import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tokenDTO } from '../../dto/tokenDTO';
import { HttpClient } from '@angular/common/http';
import { Envoirment } from '../../../Envoirment';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  env = new Envoirment();
  apiGetToken = this.env.generateApiWithRoute('getTokenByUser');

  constructor(private http : HttpClient) { }

  getTokenByUser(id : number) : Observable<tokenDTO>{
    return this.http.get<tokenDTO>(this.apiGetToken + "/" + id);
  }


}

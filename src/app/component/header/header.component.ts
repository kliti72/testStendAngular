import { Component } from '@angular/core';
import { TokenService } from '../../service/token/token.service';
import { CookieService } from 'ngx-cookie-service';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isCookiePresent : boolean = true;

  constructor(private tokenService : TokenService, private cookieService : CookieService){
    this.isCookiePresent = cookieService.check("userId");
  }

  


}

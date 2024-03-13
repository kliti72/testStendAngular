import { Component, Input, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { TokenService } from '../../service/token/token.service';
import { UsersService } from '../../service/users/users.service';
import { userDTO } from '../../dto/userDTO';
@Component({
  selector: 'app-header-profile',
  templateUrl: './header-profile.component.html',
  styleUrl: './header-profile.component.css'
})
export class HeaderProfileComponent implements OnInit{

  @Input() name : string = 'Loading..';
  @Input() numberNotes : number = 0;
  userId : string = this.cookieService.get("userId");

  
  
  constructor(
    private cookieService : CookieService, 
    private tokenService : TokenService,
    private userService : UsersService){}



  ngOnInit(): void {


    let id : number = parseInt(this.userId);
    this.userService.getUserById(id).subscribe
      ({
          next: (response) => {
            console.log("Risposta", response)
            if(response.name !== undefined)
              this.name = response.name;
          },
          error: (error) => {
            console.log("Error");
          }
      })
    }
}

import { Directive, ElementRef, HostListener, Renderer2, numberAttribute } from '@angular/core';
import { userDTO } from '../dto/userDTO';
import { UsersService } from '../service/users/users.service';
import { roleDTO } from '../dto/roleDTO';
import { Subscribable } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Directive({
  selector: '[appOnChange]'
})
export class OnChangeDirective {

  constructor(
    private el: ElementRef,
    private render: Renderer2,
    private userService: UsersService,
    private router: Router,
    private cookieService : CookieService
    
  ) { }
  verifiedEamil = false;

  @HostListener('input', ['$event'])
  onInputChange(event: any) {


    if (event.target.id === "email") {
      let email = event.target.value;
      
      const valoreSotto = this.el.nativeElement.ownerDocument.getElementById("repeatEmail") as HTMLInputElement;
      if (valoreSotto != null) {
        valoreSotto.value = '';
      }

      this.render.setStyle(event.target, "border", "2px solid rgba(255,42,15,0.59)");

      if (email.includes("@")) {
        this.render.setStyle(event.target, "border", "2px solid rgb(212, 212, 212)");
      }
    }

    if (event.target.id === "repeatEmail") {
      const email = this.el.nativeElement.ownerDocument.getElementById("email") as HTMLInputElement;
      if (event.target.value != email.value) {
        this.render.setStyle(event.target, "border", "2px solid rgba(255,42,15,0.59)");
      } else {
        this.render.setStyle(event.target, "border", "2px solid rgb(212, 212, 212)");
      }
    }

    if (event.target.id === "password") {
      if (event.target.value.length < 8) {
        this.render.setStyle(event.target, "border", "2px solid rgba(255,42,15,0.59)");
      } else {
        this.render.setStyle(event.target, "border", "2px solid rgb(212, 212, 212)");
      }
    }


  }

  // Controllo form di evento registrazione
  @HostListener('submit', ['$event'])
  onSubmit(event: any): void {

    const form = this.el.nativeElement as HTMLFormElement;

    // Se viene da register
    if (form.id === "registerForm") {
      let user = this.captureRegister(form);
      console.log(user);
      this.userService.registerUser(user);

      this.userService.registerUser(user).subscribe({
        next: (response) => {
          console.log("reg", response);
          this.router.navigate(['/home'])
        },
        error: (error) => {
          console.log("Errore")
          this.router.navigate(['/register'])
        }
      })
    }

    // Se viene da login
    if (form.id === "loginForm") {
      console.log("login form!");
      let user = this.captureLogin(form);
      console.log(user);
      this.userService.loginUser(user);

      this.userService.loginUser(user).subscribe({
        next: (response) => {
          
          if (response !== null && response !== undefined){

          if(response.email != undefined && response.password != undefined){
            if(response.email.length > 6 && response.password.length > 5){
              this.router.navigate(['/home'])
            } 
            
            if(response.id !== undefined){
              this.cookieService.set("userId", response.id.toString());
            } else {
              console.log("Sono un cretino")
            }

          }               
        } else {
            this.router.navigate(['/register'])
          }
          

          
        },
        error: (error) => {
          console.log("Errore")
          this.router.navigate(['/register'])
        }
      })
    }

  }

  captureRegister(form: HTMLFormElement): userDTO {

    let nome = form.elements[0] as HTMLInputElement;
    let email = form.elements[1] as HTMLInputElement;
    let repeatEmail = form.elements[2] as HTMLInputElement;
    let password = form.elements[3] as HTMLInputElement;
    let check = true;

    // Verifica coincidenza email
    if (email.value === repeatEmail.value) { } else {
      check = false;
    }

    // Verifica lunghezza password
    if (check && password.value.length > 8) { } else {
      check = false;
    }

    let role = new roleDTO(2, "GUEST");
    let user = new userDTO(email.value, password.value, nome.value, role);
    // Ritorna risultato
    return user;
  }

  captureLogin(form: HTMLFormElement): userDTO {

    let email = form.elements[0] as HTMLInputElement;
    let password = form.elements[1] as HTMLInputElement;

    if(email.value.length<6){
      
    }

    let user = new userDTO(email.value, password.value);

    // Ritorna risultato
    return user;
  }

}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserCardComponent } from './user-card/user-card.component';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { LoginComponent } from './login/login.component';
import { AppLoginButtonComponent } from './app-login-button/app-login-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserCardComponent,
    CustomButtonComponent,
    LoginComponent,
    AppLoginButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    FooterComponent,
    UserCardComponent,
    CustomButtonComponent,
    AppLoginButtonComponent,
    
  ]
})
export class AppModule { }

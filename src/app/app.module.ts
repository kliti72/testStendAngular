import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ServiceComponent } from './pages/service/service.component';
import { RegisterComponent } from './pages/register/register.component';
import { TitleComponent } from './component/title/title.component';
import { ButtonComponent } from './component/button/button.component';
import { UlListComponent } from './component/ul-list/ul-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormBuilderComponent } from './component/form-builder/form-builder.component';
import { FormsModule } from '@angular/forms';
import { CounterComponent } from './component/counter/counter.component';
import { NotifyComponent } from './component/notify/notify.component';
import { NoteCardComponent } from './component/note-card/note-card.component';
import { InputComponent } from './component/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    ServiceComponent,
    RegisterComponent,
    TitleComponent,
    ButtonComponent,
    UlListComponent,
    FormBuilderComponent,
    CounterComponent,
    NotifyComponent,
    NoteCardComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    FooterComponent,
    ButtonComponent,
  ]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
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
import { BreadcrumbComponent } from './component/breadcrumb/breadcrumb.component';
import { InputChangeListenerDirective } from './directive/input-change-listener.directive';
import { OnChangeDirective } from './directive/on-change.directive';
import { HeaderProfileComponent } from './component/header-profile/header-profile.component';
import { MatIconModule } from '@angular/material/icon';
import { MyNotesComponent } from './pages/my-notes/my-notes.component';
import { UserPublicNotesComponent } from './component/user-public-notes/user-public-notes.component';
import { SettingComponent } from './component/setting/setting.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    TitleComponent,
    ButtonComponent,
    UlListComponent,
    FormBuilderComponent,
    CounterComponent,
    NotifyComponent,
    NoteCardComponent,
    InputComponent,
    BreadcrumbComponent,
    InputChangeListenerDirective,
    OnChangeDirective,
    HeaderProfileComponent,
    MyNotesComponent,
    UserPublicNotesComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    FooterComponent,
    ButtonComponent
  ]
})
export class AppModule { }

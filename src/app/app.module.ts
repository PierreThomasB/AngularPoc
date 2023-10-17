import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ApodCardComponent } from './apod-card/apod-card.component';
import { LoginComponentComponent } from './login-component/login-component.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { EmailInputComponent } from './email-input/email-input.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MyApodComponent } from './my-apod/my-apod.component';
import { ApodInfoComponent } from './apod-info/apod-info.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    ApodCardComponent,
    LoginComponentComponent,
    RegisterComponent,
    EmailInputComponent,
    NavBarComponent,


    MyApodComponent,
      ApodInfoComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

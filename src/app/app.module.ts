import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonComponentComponent } from './mon-component/mon-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MonComponentComponent,
    SecondComponentComponent,
    HomeComponentComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

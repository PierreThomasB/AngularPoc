import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponentComponent } from './home-component/home-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegisterComponent } from './register/register.component';
import { MyApodComponent } from './my-apod/my-apod.component';
import { ApodInfoComponent } from './apod-info/apod-info.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
 
  {path:"login",component:LoginComponentComponent ,   canDeactivate: [(component: LoginComponentComponent) => component.desactivate],},
  {path:"register",component:RegisterComponent},
  {path:"home",component:HomeComponentComponent},

  {path:"apod/:apodId",component:ApodInfoComponent},
  
  {path:"myapod",component:MyApodComponent},
  
  {path:"" ,redirectTo:"home" , pathMatch:"full"},
  
  { path: '**', component:NotFoundComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

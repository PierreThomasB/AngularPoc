import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponentComponent } from './home-component/home-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegisterComponent } from './register/register.component';
import { MyApodComponent } from './my-apod/my-apod.component';

const routes: Routes = [
  //{path:"first" , component:MonComponentComponent},
  //{path:"second/:id" , component:SecondComponentComponent},
  {path:"home", component: HomeComponentComponent},

  {path:"login",component:LoginComponentComponent},
  {path:"register",component:RegisterComponent},
  
  {path:"myapod",component:MyApodComponent},
  
  {path:"" ,redirectTo:"home" , pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

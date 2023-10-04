import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponentComponent } from './home-component/home-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';

const routes: Routes = [
  //{path:"first" , component:MonComponentComponent},
  //{path:"second/:id" , component:SecondComponentComponent},
  {path:"home", component: HomeComponentComponent},
  {path:"" ,redirectTo:"home" , pathMatch:"full"},
  {path:"login",component:LoginComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

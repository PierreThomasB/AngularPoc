import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonComponentComponent } from './mon-component/mon-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';

const routes: Routes = [
  //{path:"first" , component:MonComponentComponent},
  //{path:"second/:id" , component:SecondComponentComponent},
  {path:"home", component: HomeComponentComponent},
  {path:"" ,redirectTo:"home" , pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

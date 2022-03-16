import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FruitsComponent } from './fruits/fruits.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { VegetablesComponent } from './vegetables/vegetables.component';


const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'logout', component:LoginComponent},
  {path:'home', children:[
    {path:'', component:HomeComponent},
    {path:'fruits', component:HomeComponent},
    {path:'vegetables', component:HomeComponent}
  ]},
  {path:'**', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

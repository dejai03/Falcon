import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FruitsComponent } from './fruits/fruits.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { LoginAPIService } from './login/service/login-api.service';
import { LoginService } from './login/service/login.service';
import { CommonService } from './shared/service/common.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FruitsComponent,
    VegetablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [LoginAPIService, LoginService, CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }

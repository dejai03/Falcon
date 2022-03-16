import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginAPIService } from './login-api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public isError:boolean = false;
  public errorMsg:string = '';

  constructor(private router:Router, private loginAPIService:LoginAPIService) { }

  login(data){
    console.log('login : ', data);
    this.loginAPIService.validateLogin(data).subscribe(responce => {
      if(responce['status'] == 1){
        this.router.navigate(['/home/fruits']);
        localStorage.setItem('login','1');
      }else{
        this.isError = true;
        this.errorMsg = 'Something went wrong.';
      }
    }, error =>{
      this.isError = true;
      this.errorMsg = error['msg'];
    })
  }
}

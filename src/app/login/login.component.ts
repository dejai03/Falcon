import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(5), Validators.maxLength(15), this.createLowerNumberValidator()]),
    password : new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15),this.createPasswordStrengthValidator()]),
    terms : new FormControl('', [Validators.required, this.createTermsValidator()])
  });

  constructor(private loginService:LoginService, private router:Router) {
    const isLoggedIn = localStorage.getItem('login');
    if(isLoggedIn && isLoggedIn == '1'){
      this.router.navigate(['/home/fruits']);
    }
   }

  ngOnInit() {
  }

  onLogin(){
    this.loginService.login(this.loginForm.value);
  }

  createTermsValidator(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {
        return !control.value ? {termsValid:true}: null;
    }
  }

  createLowerNumberValidator(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {
        const value = control.value;
        if (!value) {
            return null;
        }
        const hasUpperCase = /[A-Z]+/.test(value);
        const hasLowerCase = /[a-z]+/.test(value);
        const hasNumeric = /[0-9]+/.test(value);
        const emailValid =  hasLowerCase && hasNumeric && !hasUpperCase;
        return !emailValid ? {lowerNumber:true}: null;
    }
  }
  
  createPasswordStrengthValidator(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {
        const value = control.value;
        if (!value) {
            return null;
        }
        const hasUpperCase = /[A-Z]+/.test(value);
        const hasLowerCase = /[a-z]+/.test(value);
        const hasNumeric = /[0-9]+/.test(value);
        const hasSpecialChar = /[0-9]+/.test(value);
        const passwordValid = hasUpperCase && hasLowerCase && hasNumeric && hasSpecialChar;
        return !passwordValid ? {passwordStrength:true}: null;
    }
}

}

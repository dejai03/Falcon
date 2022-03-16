import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginAPIService {

  private email:string = 'a1@gmail.in';
  private password:string = 'A1a@gi';

  constructor() { }

  validateLogin(request):Observable<any>{
    return new Observable((observer) => {
      if (request['email'] == this.email && request['password'] == this.password) {
          observer.next({status:1, msg:'Successful.'});
      } else {
        observer.error({status:0, msg:'Email or password incorrect.'});
      }
      return {unsubscribe() {console.log('unsubscribe');}};
    });
  }
}

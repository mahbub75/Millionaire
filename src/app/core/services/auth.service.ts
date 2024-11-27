import { Injectable } from '@angular/core';
import {from, map, Observable} from "rxjs";
import {Auth} from "../../auth/auth";
import {User} from "../../share/models/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(loginData: Auth): Observable<User> {
    return from(new Promise((resolve, reject) => {
      const user = { email: loginData.userName}
      setInterval(()=>{
        resolve(user);
      })
    })).pipe(
      map(res=>res as User)
    );
  }

  register(registerData: Auth){
    return from(new Promise((resolve, reject) => {}));
  }

  logout(email: string){}
}

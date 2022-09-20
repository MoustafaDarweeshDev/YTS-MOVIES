import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Observable, observable , BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private client:HttpClient , private router:Router) {
    if(localStorage.getItem('userToken')){
      this.saveUserData()
    }
  }
  userData = new BehaviorSubject(null)
  saveUserData(){
    let encodedToken = JSON.stringify(localStorage.getItem('userToken'));
    let decodedToken:any = jwtDecode(encodedToken)
    this.userData.next(decodedToken)

  }


  signUp(registerForm:object):Observable<any>
  {
    return this.client.post("https://route-egypt-api.herokuapp.com/signup" , registerForm)
  }
  signIn(loginForm:object):Observable<any>
  {
    return this.client.post("https://route-egypt-api.herokuapp.com/signin" , loginForm)
  }
  logOut(){
    localStorage.removeItem('userToken');
    this.userData.next(null)
    this.router.navigate(['login'])
  }
}

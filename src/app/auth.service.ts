import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService 
{

  private _loginUrl = "http://localhost:3000/api/login";
  private _adminLoginUrl="http://localhost:3000/api/adminLogin";

  constructor(private http: HttpClient,
              private _router: Router) 
  { 
  }

  loginUser(user):Observable<any> 
  {
    return this.http.post<any>(this._loginUrl, user)
  }

  userLogout() 
  {
    localStorage.removeItem('token1')
    this._router.navigate(['/events'])
  }

  adminLogin(admin)
  {
  return this.http.post<any>(this._adminLoginUrl,admin)
  }

  adminLogout()
  {
    localStorage.removeItem('token2')
    this._router.navigate(['/admin'])
  }

  getToken1() 
  {
    return localStorage.getItem('token1')
  }

  getToken2() 
  {
    return localStorage.getItem('token2')
  }

  userLoggedIn()
  {
    return !!localStorage.getItem('token1')
  }

  adminLoggedIn()
  {
    return !!localStorage.getItem('token2')
  }


}

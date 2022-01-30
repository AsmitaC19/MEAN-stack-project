import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'user-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit 
{

  loginUserData = {
    email:'',
    password:''
    };

  constructor(private _auth: AuthService,
              private _router: Router) 
  { 
  }

  ngOnInit() 
  {
  }

  loginUser () 
  {
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        localStorage.setItem('token1', res.token)
        this._router.navigate(['/user/special-events'])
      },
      err => console.log(err)
    ) 
  }
}

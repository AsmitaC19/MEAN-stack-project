import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'admin-admin-login',
  templateUrl: './admin-login.component.html'
})
export class AdminLoginComponent implements OnInit 
{

  loginAdminData = 
    {
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

  adminLogin () 
  {
    this._auth.adminLogin(this.loginAdminData)
    .subscribe(
      res => {
        localStorage.setItem('token2', res.token)
        this._router.navigate(['/admin/admin-special'])
      },
      err => console.log(err)
    ) 
  }

}

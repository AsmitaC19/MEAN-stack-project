import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class Auth1Guard implements CanActivate 
{
  constructor(private _authService: AuthService,
    private _router: Router) 
  { 
  }

  canActivate(): boolean 
  {
    if (this._authService.adminLoggedIn()) 
    {
      console.log('true')
      return true
    } 
    else 
    {
      console.log('false')            
      this._router.navigate(['/adminLogin'])
      return false
    }
  }

}

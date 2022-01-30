import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate 
{
  constructor(private _authService: AuthService,
    private _router: Router) 
  { 
  }

  canActivate(route): boolean 
  {
    if (this._authService.userLoggedIn()) 
    {
      console.log('true')
      return true
    } 
    else 
    {
      console.log('false')            
      this._router.navigate(['/login'])
      return false
    }
   }
}



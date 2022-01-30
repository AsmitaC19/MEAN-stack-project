import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminSpecialComponent } from './admin-special/admin-special.component';
import { Auth1Guard } from '../auth1.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminLoginComponent
  },
  {
    path: 'admin-special',
    canActivate: [Auth1Guard],
    component: AdminSpecialComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule 
{ 
}

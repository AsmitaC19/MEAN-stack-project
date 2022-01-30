import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { EventsComponent } from './events/events.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/events',
    pathMatch: 'full'
  },
  {
    path : 'events', 
    component: EventsComponent
  },
  { path : 'user', loadChildren: () => import('./user/user.module').then(m=>m.UserModule)},
  { path : 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

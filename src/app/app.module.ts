import { AuthGuard } from './auth.guard';
import { Auth1Guard } from './auth1.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { AuthService } from './auth.service';
import { EventService } from './event.service';
import { TokenInterceptor1Service } from './token-interceptor1.service';
import { TokenInterceptor2Service } from './token-interceptor2.service';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule,BsModalService } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    AppComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CollapseModule.forRoot(),
    BrowserAnimationsModule,
    ModalModule
  ],
  providers: [AuthService, AuthGuard, Auth1Guard, EventService, BsModalService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor1Service,
    multi: true
  }
  /*{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor2Service,
    multi: true
  }*/
],
  bootstrap: [AppComponent]
})
export class AppModule { }

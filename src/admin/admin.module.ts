import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminSpecialComponent } from './admin-special/admin-special.component';
import { AdminEventsComponent } from './admin-events/admin-events.component';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule,BsModalService } from 'ngx-bootstrap/modal';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AlertModule,AlertConfig } from 'ngx-bootstrap/alert';

@NgModule({
  declarations: [
    AdminLoginComponent,
    AdminSpecialComponent,
    AdminEventsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    AccordionModule,
    ButtonsModule,
    CarouselModule,
    CollapseModule,
    AlertModule
  ],
  providers: [AlertConfig,BsModalService]
})
export class AdminModule { }

import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { EventService } from '../../event.service';
import { adminEvent } from '../../adminEvent.model';

@Component({
  selector: 'user-special-events',
  templateUrl: './special-events.component.html'
})
export class SpecialEventsComponent implements OnInit 
{  
  specialEvents = [];
  adminEvent:adminEvent[];

  constructor(private _eventService: EventService,
              private _router: Router) 
  { 
  }

  ngOnInit() 
  {
      this.getEvent();
  }

  getEvent()
  {
    this._eventService.getEventList().subscribe(
      (res) => 
      {
        console.log(res);
        this.adminEvent = res as adminEvent[];
      },
      (err) => 
      {
        console.log(err);
      }
    )
  }
}

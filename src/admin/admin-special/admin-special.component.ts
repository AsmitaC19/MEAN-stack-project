
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../../event.service';
import {FormGroup,FormControl, FormBuilder} from '@angular/forms';
import { BsModalService,BsModalRef } from 'ngx-bootstrap/modal';
import { adminEvent } from '../../adminEvent.model';

@Component({
  selector: 'admin-admin-special',
  templateUrl: './admin-special.component.html'
})
export class AdminSpecialComponent implements OnInit 
 {
 Marvellous:FormGroup;
 modalRef:BsModalRef;
 editMode:boolean=false;
 adminEvent:adminEvent[];
 selectedEvent: adminEvent;
 editUserId;

  

 constructor(private _router:Router,private fb:FormBuilder,private modalService:BsModalService,private _eventService: EventService ) 
{ 
}

  ngOnInit() :void
  {
    
    this.Marvellous = this.fb.group(
      {
        eventname: [''],
        description : ['']
  
      }
    );  
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

  onSubmit()
  {
    if(this.editMode)
    {
      this._eventService.putEvent(this.Marvellous.value,this.editUserId).subscribe(
        (res) => 
        {
          console.log('Updated successfully');
          this.getEvent();
          this.editMode = false;
        },
        (err) => 
        {
          console.log(err);
        },
      );
    }
    else
    {
      this._eventService.postEvent(this.Marvellous.value).subscribe(
        (res) => 
        {
          console.log('Saved successfully');
          this.getEvent();
        },
        (err) => 
        {
          console.log(err);
        },
      );
    }
     
    this.Marvellous.reset();
    this.modalRef.hide();

  }
  
  onEditEvent(eve:adminEvent,template:TemplateRef<any>,id:string){
    this.modalRef=this.modalService.show(template);
    console.log(eve);
    this.editUserId=eve._id;
    this.selectedEvent = eve;
    console.log(this.selectedEvent);
    this.Marvellous.patchValue(this.selectedEvent);
    this.editMode=true;
  }

  onDeleteEvent(id)
  {
    if(confirm('Do you want to delete this event?'))
    {
      // console.log(id);
      this._eventService.deleteEvent(id).subscribe(
        (res) => 
        {
          console.log('Delete successfully');
          this.getEvent();
        },
        (err) => 
        {
          console.log(err);
        },
      );
    }
  }
  

  openModal(template:TemplateRef<any>)
  {
    this.modalRef=this.modalService.show(template);
  }

}

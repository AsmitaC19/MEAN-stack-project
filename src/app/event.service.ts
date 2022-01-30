import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { adminEvent } from './adminEvent.model';
import { Observable } from 'rxjs';

@Injectable()
export class EventService 
{

  private _eventsUrl = "http://localhost:3000/api/events";
  private _specialEventsUrl = "http://localhost:3000/api/special";
  readonly baseURL = "http://localhost:3000/events";
  

  constructor(private http: HttpClient) 
  { 
  }

  getEvents():Observable<any> 
  {
    return this.http.get<any>(this._eventsUrl)
  }

  getAdminSpecialEvents():Observable<any>
  {
    return this.http.get<any>(this._specialEventsUrl)
  }

  postEvent(eve:adminEvent):Observable<any> 
  {
    return this.http.post<any>(this.baseURL, eve);
  }

  getEventList():Observable<any> 
  {
    return this.http.get<any>(this.baseURL);
  }

  putEvent(eve:adminEvent,_id:string):Observable<any> 
  {
    return this.http.put<any>(this.baseURL+`/${_id}`,eve);
  }

  deleteEvent(_id: string):Observable<any> 
  {
    return this.http.delete<any>(this.baseURL+`/${_id}`);
  }
}



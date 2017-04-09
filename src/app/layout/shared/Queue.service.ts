import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

@Injectable()
export class QueueService {

  get:{
    room:{
      list(): Observable<any>
    }
  }

  constructor(private _http: Http) {
    this.get = {
      room:{
        list:()=>{
         return this._http.get('https://anuglar2-101.firebaseio.com/rooms.json')
          // return this._http.post("http://sandeesoft.com/ique-service/main.php", JSON.stringify({method:"display",opdRoom:opd}));
        }
      }
    }
   }


}

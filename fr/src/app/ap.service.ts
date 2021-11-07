import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders,HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApService {

  constructor(private httpclient:HttpClient) { }
   url="https://jsonplaceholder.typicode.com/users";
   
  getapi(){
    return this.httpclient.get(this.url);
  }
}






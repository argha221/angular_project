import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders,HttpParams} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FrService {

  constructor(private http:HttpClient) { }
  url="http://localhost:3000/posts";
  

  getapi(){
    return this.http.get(this.url);
  }
}

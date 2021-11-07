import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutheService {

  constructor(private http:HttpClient) { }

  login(data){
    console.log(data);
    
  return this.http.post('http://localhost:4201/login',data);
  }

  get(){
    return this.http.get('http://localhost:4201/users');
  }

  createnew(addnew){
    const httpheader= new HttpHeaders();
    httpheader.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:4201/users',addnew,{headers:httpheader})
  }
}

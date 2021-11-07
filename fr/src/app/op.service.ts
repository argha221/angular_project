import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders,HttpParams} from '@angular/common/http';
import { Observable, ObservableInput, throwError } from 'rxjs';


import { catchError, filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OpService {
  
  

  constructor(private http:HttpClient) { }

  url="http://localhost:3000/posts";
   
  getapi(){
    return this.http.get(this.url).pipe(catchError(this.errorHandle));
  }
    errorHandle(error){
     return throwError(error.message ||"server error");
    }
    
  

  postapi(){
    const httpheader= new HttpHeaders();
    httpheader.append('Content-Type', 'application/json');

    return this.http.get('http://localhost:3000/posts');
  }

  createnew(addnew){
    const httpheader= new HttpHeaders();
    httpheader.append('Content-Type', 'application/json');
    return this.http.post(this.url,addnew,{headers:httpheader})
  }

  deletecontact(id){
  const deleteid='http://localhost:3000/posts/'+id;
  console.log('service working')
  return this.http.delete(deleteid);
  }

  updatecontact(contactid,updatedbody){
  const endpointurl="http://localhost:3000/posts/"+contactid;
  return this.http.put(endpointurl,updatedbody);
  }

 getcontactbyid(search){
 const httpparams=new HttpParams({
  fromObject:{
    "productname":search,
  }
 });
return this.http.get("http://localhost:3000/posts",{params:httpparams})
 }
  

 getspecificapi(){
   return this.http.get(this.url).pipe(map((res:any)=>
   res.map((data)=>{
     return{ 
       id:data.id
     };
   })
     
   )
   );
  }

 getfilter(){
   return this.http.get(this.url).pipe(filter((res:any)=>res.id=='1'));
 }
  
}




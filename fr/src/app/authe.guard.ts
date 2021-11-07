import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { OpService} from './op.service'

@Injectable({
  providedIn: 'root'
})
export class AutheGuard implements CanActivate {
 lis:any=[];
 data:any=[];
 public f:any=[];
  q=localStorage.getItem('dataSource');
 constructor(private service: OpService){
  this.service.getapi().subscribe(result => {
    this.lis=result;
    console.log('hello'+result);
    this.lis.map(item =>{
       
        item['id']=item.id;
        this.f.push(item.id);
        //console.log(this.f+'mapstatus')
        return item;
      
    })

    
   // sessionStorage.setItem('check',JSON.stringify(this.f));
    for(let i of this.f){
      console.log(i);
    }

    
    
  })
 
 }


 
   canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      
    // var l:any=JSON.parse(sessionStorage.getItem('check'));
   
      
   // console.log(l+'arghacheck');


    const h:any=JSON.parse(sessionStorage.getItem('check'));
    
     for(let i of this.f){
      if(this.q==i){
        return true;
      }
     }
    
    return true;
    // console.log(typeof(l));
    
    //     return true;
    //  }
    
   
    }
    }

    //   if(q==='argha')
    //   {
    //     return true;
    //  }
    // else{  return false; }
   


    // }
  // constructor(private service: OpService){
  //   this.service.getapi().subscribe(result => {
  //     this.lis=result;
  //     console.log(result)
  //     this.lis.map(item =>{
         
  //         item['id']=item.id;
  //         return item;
        
  //     })
  //     console.log(this.lis);
  //   })
  // }


    
  
  


  



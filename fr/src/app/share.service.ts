import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  pr:string="";
  constructor() { }

  putdata(data){
  this.pr=data;
  }

  getans(){
    return this.pr;
  }
}

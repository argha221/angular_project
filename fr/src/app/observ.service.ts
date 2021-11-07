import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservService {
;
  constructor() { }

  obs(val,pop){
  const observablei=new Observable(observer=>{
    observer.next(val);
    observer.next(pop);
  });

   return observablei;
}
}
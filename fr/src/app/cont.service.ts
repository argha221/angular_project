import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContService {

  constructor() { }
    
  getcontacs(){
    const contactlist=[
      {contactid:1,contactname:'argha'},
      {contactid:2,contactname:'rohan'},
      {contactid:3,contactname:'arko'},
      {contactid:4,contactname:'pop'}
    ];

    return contactlist;
  }

  people=[
    {name:'argha',age:'25'},
    {name:'popeye',age:'20'},
  ];
}

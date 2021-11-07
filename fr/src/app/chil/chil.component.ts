import { Component, Input, OnInit } from '@angular/core';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-chil',
  templateUrl: './chil.component.html',
  styleUrls: ['./chil.component.css']
})
export class ChilComponent implements OnInit {
message: any=[];
lis:any=[];
user:any=[];
@Input() parentData:string;

  constructor(private sharedService:ShareService) { }
 
  ngOnInit(): void {
    
this.message= this.sharedService.getans();
this.user=[{name:'argha',
age:35,
date:'03/07/2018',
city:"kolkata",citycode:'700091',gender:'male'},
{name:'XYZ',age:'22',date:'09/09/09',city:"siliguri",gender:'female'}];
for(let ful of this.user){
  this.lis.push(ful.gender);
  
}
console.log(this.lis);
  }
  
  check(data){
    if(data.gender=='male'){
      return true;
    }
  }


}



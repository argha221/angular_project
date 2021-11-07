import { Component, OnInit } from '@angular/core';
import { OpService } from '../op.service';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  message:string;
  constructor(private share:ShareService ,private ser:OpService) { }

  ngOnInit(): void {

   this.message=this.share.getans();
   console.log(this.message);
   this.get();
  }
 
get(){
  this.ser.getspecificapi().subscribe(data=>{
    console.log(data);
  });
}
}

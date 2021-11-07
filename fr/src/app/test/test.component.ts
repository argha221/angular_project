import { Component, OnInit } from '@angular/core';
import { DUMMYDATA } from '../app.data';
import{ContService} from '../cont.service'
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public data = DUMMYDATA;
  constructor(private contactservice:ContService) { }
  contactlist:any=[];
  newlist:any=[];
  ngOnInit(): void {
    this.contactlist=this.contactservice.getcontacs();
    this.newlist=this.contactservice.people;
    console.log(this.newlist);
  }
 
}
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ObservService } from '../observ.service';
import { OpService } from '../op.service';

@Component({
  selector: 'app-subjot',
  templateUrl: './subjot.component.html',
  styleUrls: ['./subjot.component.css']
})
export class SubjotComponent implements OnInit {

  constructor(private service:OpService,private servi:ObservService) { }
  datao:any=[];
  ngOnInit(): void {
   
  }

  getdata(){
    var lis:any=[];
    const subject=new Subject();
    this.service.getapi().subscribe(subject);
    
    subject.subscribe(data=>console.log(data));
    subject.subscribe(data=>console.log(data));


    // use subject to limit http calls
    
    // this.service.getapi().subscribe(data=>console.log(data));
    // this.service.getapi().subscribe(data=>console.log(data));
  }

  getobs(val,pop){
    
    this.servi.obs(val,pop).subscribe(data=>{
    console.log(data);
    this.datao.push(data);
    console.log(this.datao);
  });
    console.log('data stored in variable data'+typeof(this.datao));
  }
}

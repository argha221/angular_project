import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dumb',
  templateUrl: './dumb.component.html',
  styleUrls: ['./dumb.component.css']
})
export class DumbComponent implements OnInit {

  @Input() video;
  @Output() selecteddata=new EventEmitter();
  k:any=[];
  constructor() { }

  ngOnInit(): void {
  }
  print(id){
    console.log(id);
    this.selecteddata.emit(id);
  }

}

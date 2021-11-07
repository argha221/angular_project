import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.css']
})
export class SmartComponent implements OnInit {
 videos:any=[];
  constructor(private http:HttpClient) { }
  selectedvideo='';
  ngOnInit(): void {
    this.getdata();
    $(document).ready(function() {
      alert('I am Called From jQuery');
    });
   
  }


getdata(){
return this.http.get('https://jsonplaceholder.typicode.com/albums').subscribe(data=>{
  this.videos=data;
  console.log(this.videos);
  console.log(typeof(this.videos));
});

}
getchilddata(id){
  this.selectedvideo=id;
}

toggle(){
  console.log('working');
  $(document).ready(function() {
    $("#1").change(function() {
      $("body").toggleClass("bg-secondary");
      $("h1").toggleClass("bg-primary");
    });
 });
}
}

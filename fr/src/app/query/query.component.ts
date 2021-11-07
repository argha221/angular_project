import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   $(document).ready(function(){
     $("p.demo").hide(5000);
   });
   $(document).ready(function(){
    $(".hello").hide(5000);
  });
  $(document).ready(function(){
    $("ul.12").hide(8000);
  })

  }
hide(){
  $(document).ready(function(){
    $("#test").hide();
   })

   $(document).ready(function(){
     $(".main").css("background-color", "black");
   })
}
}

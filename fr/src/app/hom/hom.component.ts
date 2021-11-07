import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hom',
  templateUrl: './hom.component.html',
  styleUrls: ['./hom.component.css']
})
export class HomComponent implements OnInit {
   name:string='';
   password:string='';
  constructor(private routes:ActivatedRoute ,private router:Router) { 
 
    this.routes.queryParams.subscribe(params => {
      this.name=params.name;
      this.password=params.password;
    })
      
  }

  ngOnInit(): void {
  }

  on(){
    this.router.navigate(['child'] ,{relativeTo: this.routes});
  
  }
}

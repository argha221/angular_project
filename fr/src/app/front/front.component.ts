import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }
  ngOnInit(): void {
  }


  onedit(){
    this.router.navigate(['hom'] ,{relativeTo: this.route});
  }
}

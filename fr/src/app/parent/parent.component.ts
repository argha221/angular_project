import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
   Entername: string="argha";
  constructor(private sharedService:ShareService) { }
   cname:string;
  ngOnInit(): void {
    this.sharedService.putdata(this.Entername);
  }


transferdata(){
  this.cname=this.Entername;
 
}


}

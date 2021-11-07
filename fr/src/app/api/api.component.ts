import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import{ ApService } from '../ap.service'

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  [x: string]: any;
  userform: FormGroup;
  data: any=[];
  p:any;
  frdata=[];
  constructor(private api:ApService ,private fb:FormBuilder) { }
  listp:any=[];
  ngOnInit(): void {
  this.userform=this.fb.group({
    'name': ['123'],// [Validators.required,Validators.minLength(5)],
      'username': ['123'],
      'email': ['123'],
      'phoneno':['123'],
      'company':['xyz'],

  })

   
  }
 submit(){
   this.frdata.push(this.userform.value);
  console.log(this.userform.value.username);


  //  this.listp.push(this.frdata);
  //  console.log(this.listp);

  const mock={username:this.userform.value.username,email:this.userform.value.email,phone:this.userform.value.phoneno,name:this.userform.value.name,company:{name:this.userform.value.company}};
  this.listp.push(mock);
  console.log(this.listp);
   this.userform.reset();
   
}
resetform(){
  this.userform.reset();
}
onrequest(){
this.api.getapi().subscribe(data =>{
  console.log(data);
  this.listp=data;
});
}
}

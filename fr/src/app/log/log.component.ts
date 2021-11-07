import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutheService } from '../authe.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  constructor(private fb:FormBuilder,private ser:AutheService) { }
  usform: FormGroup;
  ngOnInit(): void {
    this.usform=this.fb.group({
      
       'email':['argha197.am@gmail.com',Validators.compose([Validators.email,Validators.required])],
       'password':['', Validators.compose([Validators.required,Validators.minLength(3)])],
     
     items:this.fb.array([
      this.fb.group({
       'skills':['XYZ', Validators.compose([Validators.required])],
        'certificate':['', Validators.compose([Validators.required])]
     })
    ])
    
    })

    this.ser.get().subscribe(data=>{
      console.log(data);
    })
    
}
submit(){
  console.log(this.usform.value);
  this.ser.login(this.usform.value).subscribe(data=>{
    console.log(data);
  },(error: string)=>{
    console.log(error);
  })


}

addnew(){
  this.ser.createnew(this.usform.value).subscribe(data=>{
    console.log(data);
  })
}


add(){
  let userArr=this.usform.get('items') as FormArray;
  let newuser=this.fb.group({
    'skills':['', Validators.compose([Validators.required])],
    'certificate':['', Validators.compose([Validators.required])]
  });
  userArr.push(newuser);
}
remove(i){
  let arr=this.usform.get('items') as FormArray;
  arr.removeAt(i);
}

}

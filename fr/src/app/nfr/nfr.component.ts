import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CusapiComponent } from '../cusapi/cusapi.component';
import { OpService } from '../op.service';

@Component({
  selector: 'app-nfr',
  templateUrl: './nfr.component.html',
  styleUrls: ['./nfr.component.css']
})
export class NfrComponent implements OnInit {
usform: FormGroup;
  constructor(private fb: FormBuilder, private service:OpService) { }

  ngOnInit(): void {

    
  this.usform=this.fb.group({
    'name': ['',Validators.compose([Validators.required])],// [Validators.required,Validators.minLength(5)],
     'email':['argha197.am@gmail.com',Validators.compose([Validators.email,Validators.required])],
     'password':['', Validators.compose([Validators.required,Validators.minLength(3),this.password])],
     'confirmpassword':['',Validators.compose([Validators.required,this.confirmpassword])]
  },{ validators: this.checkPasswords })
  localStorage.clear();
  }
  Sub(){
    localStorage.setItem('dataSource', this.usform.value.name);
    }

    password(control: AbstractControl): { [key: string]: any | null } {
      var password: string = control.value;
      if (password === '12345678') {
        return { incorrectpassword: true }
      }
    }
       confirmpassword(control: AbstractControl): { [key: string]: any | null } {
       const confirmpassword: string = control.value;
        if(confirmpassword === '12345678'){
         return {cannotbepassword:true}
        }
        
        
      
      }

      checkPasswords(group: FormGroup) { // here we have the 'passwords' group
        const password = group.get('password').value;
        const confirmPassword = group.get('confirmpassword').value;
      
        return password === confirmPassword ? null : { notSame: true }     
      }
   
    
      
}
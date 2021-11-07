import { Component, OnInit } from '@angular/core';
import { OpService} from '../op.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { error } from 'selenium-webdriver';
import { concatMap,  map, pluck, toArray } from 'rxjs/operators';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-cusapi',
  templateUrl: './cusapi.component.html',
  styleUrls: ['./cusapi.component.css']
})
export class CusapiComponent implements OnInit {
 data:any=[];
 lis:any=[];
 k:any=[];
 nlis:any=[];
 usform:FormGroup;
 contactid:any;
  constructor(private cus:OpService,private fb:FormBuilder ,private http:HttpClient) { }
 frdata:any=[];
 prdata:any=[];
  public mock:any=[];
  public sid:any=[];
  public l:any=[];
  newlis:any=[];
  displayname=false;
  public f;
  errormsg:string;
  maleList: any[] = [];
  lop:any=[];
  pop;
    pub:any=[];
  public usrs:any=[];
  pil=["1","2","3","4"];
  card=[{name:'argha'},
         {name:'peacock'},
        {name:'arko'},
      {name:'sapt'},
    {name:'xyz'},{name:'ppp'},{name:'ppp'},{name:'ppp'}];

  ngOnInit(): void {
 
    this.usform=this.fb.group({
      'productname': ['xyz'],// [Validators.required,Validators.minLength(5)],
        'category': ['xyz'],
        'subcategory': ['xyz'],
        'productquantity':['1'],
        'productprice':['0'],
        'id':[''],
         'search':['sampletext']
    })
   this.getAllData();
   //this.fil();
   this.plu();
   this.checkconcatMap();
}

public getAllData(){
  this.cus.getapi().subscribe(data =>{
    console.log(typeof(data));
    this.lis=data;
  

    this.lis.map(item =>{
       
      item['id']=item.id;
      this.f=item.id;
    //console.log(this.f+'hello')
    
  })
  //sessionStorage.setItem('check',JSON.stringify(this.f));
},(error)=>{
  this.errormsg=error;
  console.log(this.errormsg+'hello');
})
}



  submit(){
    this.frdata.push(this.usform.value);
   //console.log(this.lis);
   //console.log(this.frdata.id);
 
   //  this.listp.push(this.frdata);
   //  console.log(this.listp);
 
  const mock={productname:this.usform.value.productname,Category:this.usform.value.category,subcategory:this.usform.value.subcategory,productquantity:this.usform.value.productquantity,productprice:this.usform.value.productprice,id:this.usform.value.id};
  this.lis.push(mock);
  //  console.log(this.lis);
  //this.nlis.push(this.usform.value.id);
  
 
   this.cus.createnew(mock).subscribe(data =>{
     console.log(data);
     this.getAllData();
   })




  

  
  
  this.usform.reset();
 



 }

 resetform(){
   this.usform.reset();
 }


 mod(uid){
  this.l=uid.id;

 }


 delete(){
this.cus.deletecontact(this.l).subscribe(data =>{
 //this.lis.pop(data);
  //console.log(typeof(data));
  this.getAllData();
});





 }

 getid(){
   this.cus.getcontactbyid(this.usform.value.search).subscribe(data=>{
     console.log(data);
     console.log(this.usform.value.search)
     
     this.pub.push(data);
     console.log(typeof(this.pub) +'check');
   })
 }
 
 butt(pid){
  this.sid=pid.id;
  console.log(this.sid);
 }

 sub(){
   this.mock={productname:this.usform.value.productname,Category:this.usform.value.category,subcategory:this.usform.value.subcategory,productquantity:this.usform.value.productquantity,productprice:this.usform.value.productprice,id:this.usform.value.id};
    }



 update(){
   const cid=this.sid;
   const fmdata=this.mock;
   this.cus.updatecontact(cid,fmdata).subscribe(data =>{
     console.log(data);
     this.getAllData();
   })
 }

  q=localStorage.getItem('dataSource');

tggle(){
  if(this.displayname==true){
    this.displayname=false;
  }
else if(this.displayname==false){ 
  this.displayname=true;
}
 }

exit(){
  this.getAllData();
}


fil(){
  this.cus.getapi().pipe(concatMap((usrs:any)=>usrs),filter((us:any)=>us.id==12)
  ).subscribe(data=>{
  console.log(data);
   
 })
    console.log('datatrue');
  
    
  
}

plu(){
  this.cus.getapi().pipe(concatMap((usrs:any)=>usrs),pluck('productprice')).subscribe(data=>{
    console.log(data);
  })
  console.log('pluckdata');
}

checkconcatMap(){
  this.cus.getapi().pipe(map((usrs:any)=>usrs.map((po:any)=>po.id))).subscribe(data=>{
    console.log(data);
  })
}
}
// ,
// pipe(map(users=>users.filter(users=>users.id=='1')))
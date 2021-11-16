import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import  *  as  data  from  '../assets/data.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'projectDemo';
  form:FormGroup;
  val:any;
  makedis:boolean=false;
  makedis2:boolean=false;
  makedis3:boolean=false;
  makedis4:boolean=false;
  enable:boolean=false;
valuearr:any=[];
namesarr:any=[];
constructor(private fb: FormBuilder){
  this.form = this.fb.group({
    Qty1:[''],
    Qty2:[''],
    Qty3:[''],
    Qty4:[''],
  })
}
ngOnInit():void{

this.namesarr.push(data[0].p_name,data[1].p_name,data[1].p_name,data[2].p_name);
console.log(this.namesarr);
this.valuearr.push(data[0].p_cost,data[1].p_cost,data[2].p_cost,data[3].p_cost);
console.log(this.valuearr);console.log(this.makedis);


}
result(){
  if(this.form.value.Qty1!=''){
    this.makedis=true;
    console.log(this.makedis);
    
    }
    if(this.form.value.Qty2!=''){
      this.makedis2=true;
      }
      if(this.form.value.Qty3!=''){
        this.makedis3=true;
        }
        if(this.form.value.Qty4!=''){
          this.makedis4=true;
          }
          if(this.makedis==true||this.makedis2==true||this.makedis3==true||this.makedis4==true){
this.enable=true;
}}
change(){
  this.form.reset();

}
}

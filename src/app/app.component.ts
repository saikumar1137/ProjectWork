import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';

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

constructor(private fb: FormBuilder){
  this.form = this.fb.group({
    Qty1:[''],
    Qty2:[''],
    Qty3:[''],
    Qty4:[''],
  })
}
ngOnInit():void{
console.log(this.form.value.Qty1);


}
result(){
  if(this.form.value.Qty1!=''){
    this.makedis=true;
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
}
change(){
  this.form.reset();

}
}

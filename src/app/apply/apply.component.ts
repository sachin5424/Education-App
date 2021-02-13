import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormControlName, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {
  isLinear = false;


  constructor(private _formBuilder: FormBuilder) {}
  appyForm= new FormGroup({
    First_name:new FormControl('First name',
   ),
    Last_Name:new FormControl('Last Name',
   
    
    ),
    phone:new FormControl('Email',

    
    ),
    email:new FormControl('Phone',

    ),
  })
  ngOnInit() {
    
  
  }
  clickEventHandler(data:any){
   if (this.appyForm.invalid){
     this.isLinear=true
   }
  }
 
get fname() { return this.appyForm.get('First_name'); }

get lname() { return this.appyForm.get('Last_Name'); }
get mobile() { return this.appyForm.get('phone'); }

get Email() { return this.appyForm.get('email'); }

  onSubmit(){
    if(this.appyForm.invalid){
      return
    }
  console.log(this.appyForm);
  
  }

}
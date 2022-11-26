import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  angForm = this.fb.group({
    userid: ['', [Validators.required ]],
    username: ['', [Validators.required ]],
    email: ['', [Validators.required ]],
    pswd: ['', [Validators.required ]],
    accesscode: ['', [Validators.required ]]
    
});



  constructor(private fb: FormBuilder,private rout:Router,private go:ServiceService,private http:HttpClient) { }

  ngOnInit(): void {
  }

  register(){
  var userid = this.angForm.value.userid
  var username = this.angForm.value.username
  var email = this.angForm.value.email
  var pswd = this.angForm.value.pswd
  var accesscode = this.angForm.value.accesscode

  if(this.angForm.valid){
     this.go.register(userid,username,email,pswd,accesscode).subscribe((result:any)=>{
      if(result){
        alert(result.message)
        this.rout.navigateByUrl('login')
      }
     },(result)=>{
      alert(result.error.message)
     })

  }

  }

 
    
  
}

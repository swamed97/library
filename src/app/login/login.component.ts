import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 logForm = this.fb.group({
  userid:[''],
  pswd:['']
 })
  constructor(private rout:Router,private move: ServiceService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  login(){

    var userid = this.logForm.value.userid
    var pswd = this.logForm.value.pswd
    if(this.logForm.valid){
    this.move.login(userid,pswd).subscribe((result:any)=>{
      if(result){
        alert(result.message)
        this.rout.navigateByUrl('home')
        var accesscode= result.code
        console.log("m",accesscode)
        localStorage.setItem('code',JSON.stringify(accesscode))
      }
    },(result)=>{
      alert(result.error.message)
    })

  }


  }
}

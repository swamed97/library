import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-userlog',
  templateUrl: './userlog.component.html',
  styleUrls: ['./userlog.component.css']
})
export class UserlogComponent implements OnInit {
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
        this.rout.navigateByUrl('userhome')
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

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
register(userid:any,username:any,email:any,pswd:any,accesscode:any){

   const data = {
    userid,
    username,
    email,
    pswd,
    accesscode
   }

   return this.http.post('http://localhost:3002/register',data)
}

login(userid:any,pswd:any){

   const data = {
    userid,
    pswd
   }
   return this.http.post('http://localhost:3002/login',data)

}
}

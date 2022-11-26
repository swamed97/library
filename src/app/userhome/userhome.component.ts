import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  bookname:any
  authorname:any
  type:any
  accesscode:any
bookarray:any
  constructor(private http:HttpClient,private rout:Router) { 
    const AccessCode = JSON.parse(localStorage.getItem('code')||'');
     this.http.get('http://localhost:3002/show/'+AccessCode).subscribe((result:any)=>{
      if(result){
        this.bookarray=result.books
        console.log("re",this.bookarray)
        
      }
     })
     this.http.get('http://localhost:3002/returns/'+AccessCode).subscribe((result:any)=>{
      if(result){
        this.bookarray=result.item
        console.log("ccre",result.item)

      }
     })
  }

  ngOnInit(): void {
  }
  Purchase(bname:any,aname:any,type:any,access:any){
    this.bookname=bname
    this.authorname=aname
    this.type=type
    this.accesscode=access

    var Bookname=this.bookname
    var Authorname=this.authorname
    var bookname=this.bookname
    var authorname=this.authorname
    var type=this.type
    var accesscode=this.accesscode
   
    const data = {
         bookname,
         authorname,
         type,
         accesscode
        
    }
    return this.http.delete('http://localhost:3002/purchase/'+ Bookname +'/'+ Authorname).subscribe((result:any)=>{
      if(result){
        alert(result.messsage)

        this.http.post('http://localhost:3002/purchaseitem',data).subscribe((result:any)=>{
          if(result){
            alert(result.messsage)
            this.rout.navigateByUrl('history')
          }
        })
       
      }
    },(result)=>{
      alert(result.error.messsage)
    })
   

}
}

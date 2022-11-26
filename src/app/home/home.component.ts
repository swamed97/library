import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
bookname:any
authorname:any
type:any
accesscode:any

bname:any
aname:any


bookarray:any

code:boolean | undefined
del:boolean | undefined
  constructor(private http:HttpClient,private rout:Router) { 
    const AccessCode = JSON.parse(localStorage.getItem('code')||'');

    this.http.get('http://localhost:3002/show/'+AccessCode).subscribe((result:any)=>{
      if(result){
        this.bookarray=result.books
        console.log("qq",this.bookarray)
      }
    })
  }

  ngOnInit(): void {
  }
  add(){
     this.code = true;
  }
  addbook(){
     var bookname=this.bookname
     var authorname=this.authorname
     var type=this.type
     var accesscode=this.accesscode
     const datas = {
      bookname,
      authorname,
      type,
      accesscode
     }
     console.log("hgn",datas)
     return this.http.post('http://localhost:3002/addbook',datas).subscribe((result:any)=>{
      if(result){
        console.log("tt",result)
        alert(result.messsage)

        
      }
     },(result:any)=>{
      alert(result.error.message)
     })
    }
  cancel(){
    this.code = false
  }
  deletebook(bkname:any,atname:any){
        this.bname=bkname
       this.aname=atname
        

       this.del = true;

  
  }

  Bdelete(){
     var Bookname=this.bname
     var Authorname=this.aname
     console.log("qqp",this.bname)

     return this.http.delete('http://localhost:3002/deleted/'+Bookname+'/'+Authorname).subscribe((result:any)=>{
      if(result){
        console.log("klklkl",result)

        alert(result.messsage)
      }
     })
  }

  Bcancel(){
    this.del = false;
  }
}

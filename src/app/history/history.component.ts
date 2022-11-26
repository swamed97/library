import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
purchasedarray:any
bookname:any
authorname:any
type:any
accesscode:any
  constructor(private http:HttpClient,private rout:Router) { 
    const AccessCode = JSON.parse(localStorage.getItem('code')||'');
    this.http.get('http://localhost:3002/itemshow/'+ AccessCode).subscribe((result:any)=>{
      if(result){
       this.purchasedarray=result.item
       console.log("oo",result.item)
      
      }
    })
  }

  ngOnInit(): void {
  }
returns(bname:any,aname:any,type:any,accesscode:any){
   this.bookname=bname
   this.authorname=aname
   this.type=type
   this.accesscode=accesscode
    var bookname=this.bookname
    var authorname=this.authorname
    var type=this.type
    var accesscode=this.accesscode
    console.log("klj",accesscode)
    const data = {
      bookname,
      authorname,
      type,
      accesscode
    }

  return this.http.delete('http://localhost:3002/itemreturn/'+bookname + '/' + authorname ).subscribe((result:any)=>{
    if(result){
      
      this.http.post('http://localhost:3002/returnitem',data).subscribe((result:any)=>{
        if(result){
          alert(result.messsage)
          this.rout.navigateByUrl('userhome')
        }
      })
    }
  })

}
}

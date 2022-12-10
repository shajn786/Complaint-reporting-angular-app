import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-usercomplaint',
  templateUrl: './usercomplaint.component.html',
  styleUrls: ['./usercomplaint.component.css']
})
export class UsercomplaintComponent {

  complaint=""

  constructor(private api : ApiService)
  {

  }

  readValues=()=>
  {
    let userid :any=localStorage.getItem("id")
    console.log(userid)
    let data:any = {"complaint":this.complaint,"userid":userid}
    console.log(data)
    this.api.addComplaint(data).subscribe(
    
      (response:any)=>
      {
        console.log(response)
      }


    )
    
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  email=""
  password=""

  constructor(private api : ApiService, private route : Router)
  {

  }

  readValues=()=>
  {
    let data:any ={"email":this.email,"password":this.password}
    console.log(data)
    this.api.userLogin(data).subscribe(

    (response:any)=>
    {
      console.log(response)
      if(response.status == "success")
      {
        let id:any = response.id
        console.log(id)
        localStorage.setItem("id",id)
        this.route.navigate(["/viewprofile"])
      }
      else
      {
        alert(response.failed)
      }
    }

    )
  }

}

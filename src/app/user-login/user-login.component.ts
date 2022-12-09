import { Component } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  email=""
  password=""

  readValues=()=>
  {
    let data:any ={"email":this.email,"password":this.password}
    console.log(data)
  }

}

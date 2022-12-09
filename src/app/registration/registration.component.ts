import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  name=""
  address=""
  phno=""
  email=""
  password=""
  confirmpassword=""

  readValues=()=>
  {
    let data:any ={"name":this.name,"address":this.address,"phno":this.phno,"email":this.password,"confirmpassword":this.confirmpassword}
    console.log(data)
  }


}

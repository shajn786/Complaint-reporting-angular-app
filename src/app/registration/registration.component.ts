import { Component } from '@angular/core';
import { ApiService } from '../api.service';

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

  constructor(private api : ApiService)
  {

  }

  readValues=()=>
  {
    let data:any ={"name":this.name,"address":this.address,"phno":this.phno,"email":this.email,"password":this.password,"confirmpassword":this.confirmpassword}
    console.log(data)
    if(this.password==this.confirmpassword)
    {
      alert("registered")
      this.api.addUser(data).subscribe(
   
        (response:any)=>
        {
          console.log(response)
        }
  
      )
    }
    else{
      alert("password not matching")
      this.password=""
      this.confirmpassword=""
    

    }
    
  }


}

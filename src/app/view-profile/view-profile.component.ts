import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent {

  id:any=""
  userdata:any=[]
  constructor(private api : ApiService)
  {
    this.id  = localStorage.getItem("id")
    console.log(this.id)
    let data:any={"id":this.id}
    this.api.getProfileData(data).subscribe(

    (response:any)=>
    {
      console.log(response)
      this.userdata=response
    }

    )
  }

}

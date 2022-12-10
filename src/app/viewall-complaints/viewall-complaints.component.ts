import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewall-complaints',
  templateUrl: './viewall-complaints.component.html',
  styleUrls: ['./viewall-complaints.component.css']
})
export class ViewallComplaintsComponent {


  constructor(private api : ApiService){

    this.api.viewallComplaints().subscribe(

     (response:any)=>
     {

      this.data=response
     }

    )

  }
 data:any =[]
}

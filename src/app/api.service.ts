import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  addUser=(datatosend:any)=>
  {
   return this.http.post("http://localhost:8080/register",datatosend)
  }

  userLogin=(datatosend:any)=>
  {
    return this.http.post("http://localhost:8080/userlogin",datatosend)
  }

  getProfileData=(data:any)=>
  {
    return this.http.post("http://localhost:8080/userDetails",data)
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient:HttpClient) { }

  baseurl = "http://localhost:3000/"

  headers:HttpHeaders = new HttpHeaders({
    "content-type":"application/json"
  })

  // GET
  getDataFromServer(endpoint:string):Observable<any>{
    const url = this.baseurl + endpoint
    return this.httpClient.get(url, {headers:this.headers})
  }

  // POST
  postDataToServer(endpoint:any,requestBody:any):Observable<any>{
    const url = this.baseurl + endpoint
    return this.httpClient.post(url,requestBody,{headers:this.headers})
  }

  //PUT
  putDataToServer(endpoint:string,requestBody:any):Observable<any>{
const url = this.baseurl + endpoint
return this.httpClient.put(url,requestBody,{headers:this.headers})
  }

}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmailService {
   url = 'http://localhost:3000/api/send-email';
  constructor(private http: HttpClient) { }


  sendData(data : any){
    return this.http.post<any>(this.url, data)
  }

}

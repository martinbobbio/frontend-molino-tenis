import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams  } from '@angular/http'
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class EmailService {

  backUrl = environment.backUrl;

  constructor(private http:Http) {}

  sendBackend(data){
    
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('name', data.name);
    urlSearchParams.append('phone', data.phone);
    urlSearchParams.append('message', data.message);
    urlSearchParams.append('subject', data.subject);

    let body = urlSearchParams.toString();

    return this.http.post(`${this.backUrl}/api/email/create-email/`,body, {headers: headers}).pipe(
      map((response:Response)=>response.json())
    );
  }


}
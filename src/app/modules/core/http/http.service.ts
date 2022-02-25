import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Basic dXNlcjE6c2VjcmV0MQ=='

  })
  testUrl = `http://192.168.149.221:8085/`;
  dataAccessDTO = {
    userId: 100,
    userName: 'BK000001'
  }

  dataAccessDTOO = {
    userId: 5,
    userName: 'BK000005'
  }

  constructor(private http: HttpClient) { }

  postRequest(url, body): Observable<any> {
    return this.http.post(this.testUrl + url, body, { headers: this.headers })
  }
}

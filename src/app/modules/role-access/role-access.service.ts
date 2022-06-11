import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleAccessService {
  baseURL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  rolefunctionmapview(obj): any {
    return this.http.post(`${this.baseURL}rolemaster/rolefunctionmap/view`, obj);
  }

  rolesubfunctionmapsave(obj): any {
    return this.http.post(`${this.baseURL}rolesubfunctionmap/save`, obj);
  }

}

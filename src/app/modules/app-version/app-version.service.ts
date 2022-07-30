import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppVersionService {
  baseURL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  listToGetAllAppVersions(obj): any {
    return this.http.post(`${this.baseURL}appVersion/getAllAppVersions`, obj)
  }

  appVersionSave(obj): any {
    return this.http.post(`${this.baseURL}appVersion/saveOrUpdate`, obj)
  }

}

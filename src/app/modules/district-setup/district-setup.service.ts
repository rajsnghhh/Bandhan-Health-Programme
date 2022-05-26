import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DistrictSetupService {
  baseURL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getStateList(obj): any {
    return this.http.post(`${this.baseURL}state/getListOfAllStates`, obj)
  }

  getDistrictList(obj): any {
    return this.http.post(`${this.baseURL}district/view`, obj)
  }

  saveOrUpdateDistrict(obj): any {
    return this.http.post(`${this.baseURL}district/saveOrUpdate`, obj)
  }
}

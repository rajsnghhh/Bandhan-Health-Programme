import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VillageSetupService {
  baseURL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getStateList(obj): any {
    return this.http.post(`${this.baseURL}state/getListOfAllStates`, obj)
  }

  getDistrictAndBlockList(obj): any {
    return this.http.post(`${this.baseURL}district/getListOfDistrictAndBlock`, obj)
  }
}


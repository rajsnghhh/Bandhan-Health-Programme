import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CentralRegisterService {

  baseURL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getCasteView(obj): any {
    return this.http.post(`${this.baseURL}centralregister/castemaster/view`, obj)
  }

  getEducationDetails(obj): any {
    return this.http.post(`${this.baseURL}centralregister/educationalqualificationmaster/view`, obj)
  }

  monthlyIncomeDetails(obj): any {
    return this.http.post(`${this.baseURL}centralregister/monthlyincomemaster/view`, obj)
  }

  religionDetails(obj): any {
    return this.http.post(`${this.baseURL}centralregister/religionmaster/view`, obj)
  }

  getIdCardDetails(obj): any {
    return this.http.post(`${this.baseURL}centralregister/identitycardtypes/view`, obj)
  }

  saveCentralRegister(obj): any {
    return this.http.post(`${this.baseURL}centralregister/baselinesurvey/saveOrUpdate`, obj)
  }

  viewCentralRegister(obj): any {
    return this.http.post(`${this.baseURL}centralregister/baselinesurvey/view`, obj)
  }

  viewDetailsCentralRegister(obj): any {
    return this.http.post(`${this.baseURL}centralregister/familydetail/view`, obj)
  }

  deleteFamily(obj): any {
    return this.http.post(`${this.baseURL}centralregister/familydetail/saveOrUpdate`, obj)

  }
}


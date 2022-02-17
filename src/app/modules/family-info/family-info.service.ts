import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FamilyInfoService {

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

  occupationDetails(obj): any {
    return this.http.post(`${this.baseURL}centralregister/occupationmaster/view`, obj)
  }

  getIdCardDetails(obj): any {
    return this.http.post(`${this.baseURL}centralregister/identitycardtypes/view`, obj)
  }

  saveFamily(obj): any {
    return this.http.post(`${this.baseURL}centralregister/familydetail/saveOrUpdate`, obj)
  }

  viewFamilyDetails(obj): any {
    return this.http.post(`${this.baseURL}centralregister/familydetail/view`, obj)
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaselineSurveyService {
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

  saveBaselineSurvey(obj): any {
    return this.http.post(`${this.baseURL}centralregister/baselinesurvey/saveOrUpdate`, obj)
  }

  baselineView(obj): any {
    return this.http.post(`${this.baseURL}centralregister/baselinesurvey/view`, obj)
  }

  baselineViewDetail(obj): any {
    return this.http.post(`${this.baseURL}centralregister/baselinesurvey/view/detail`, obj)
  }

  deleteFamily(obj): any {
    return this.http.post(`${this.baseURL}centralregister/familydetail/saveOrUpdate`, obj)
  }

  viewMoreFamilyDetails(obj): any {
    return this.http.post(`${this.baseURL}centralregister/familydetail/view`, obj)
  }

  baselineSurveyStatus(obj): any {
    return this.http.post(`${this.baseURL}centralregister/baselinesurvey/status`, obj)
  }


}



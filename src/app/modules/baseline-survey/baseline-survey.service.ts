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
    return this.http.post(`${this.baseURL}castemaster/view`, obj)
  }

  getEducationDetails(obj): any {
    return this.http.post(`${this.baseURL}educationalqualificationmaster/view`, obj)
  }

  monthlyIncomeDetails(obj): any {
    return this.http.post(`${this.baseURL}monthlyincomemaster/view`, obj)
  }

  religionDetails(obj): any {
    return this.http.post(`${this.baseURL}religionmaster/view`, obj)
  }

  occupationDetails(obj): any {
    return this.http.post(`${this.baseURL}occupationmaster/view`, obj)
  }

  getIdCardDetails(obj): any {
    return this.http.post(`${this.baseURL}identitycardtypes/view`, obj)
  }

  saveBaselineSurvey(obj): any {
    return this.http.post(`${this.baseURL}baselinesurvey/saveOrUpdate`, obj)
  }

  baselineView(obj): any {
    return this.http.post(`${this.baseURL}baselinesurvey/view`, obj)
  }

  baselineViewDetail(obj): any {
    return this.http.post(`${this.baseURL}baselinesurvey/view/detail`, obj)
  }

  deleteFamily(obj): any {
    return this.http.post(`${this.baseURL}familydetail/saveOrUpdate`, obj)
  }

  viewMoreFamilyDetails(obj): any {
    return this.http.post(`${this.baseURL}familydetail/view`, obj)
  }

  baselineSurveyStatus(obj): any {
    return this.http.post(`${this.baseURL}baselinesurvey/status`, obj)
  }

  villagesOfBranch(obj): any {
    return this.http.post(`${this.baseURL}village/getVillagesOfABranch`, obj)
  }

  ssVillageWiseList(obj): any {
    return this.http.post(`${this.baseURL}swasthyasahayika/villageWiseList`, obj)
  }

  listOfBranchesOfARegion(obj): any {
    return this.http.post(`${this.baseURL}branch/getListOfBranchesOfARegion`, obj)
  }

}



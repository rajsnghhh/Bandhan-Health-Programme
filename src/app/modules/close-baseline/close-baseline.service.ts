import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CloseBaselineService {
  baseURL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  listOfRegionsOfUser(obj): any {
    return this.http.post(`${this.baseURL}branch/getListOfRegionsOfUser`, obj)
  }

  listOfBranchesOfARegion(obj): any {
    return this.http.post(`${this.baseURL}branch/getListOfBranchesOfARegion`, obj)
  }

  saveBaseLineSurveyTentativeEndDate(obj): any {
    return this.http.post(`${this.baseURL}closeBaseLineSurvey/saveBaseLineSurveyTentativeEndDate`, obj)
  }

  saveActualBaseLineSurveyCloseDate(obj): any {
    return this.http.post(`${this.baseURL}closeBaseLineSurvey/saveActualBaseLineSurveyCloseDate`, obj)
  }

  reopenBaselineSurvey(obj): any {
    return this.http.post(`${this.baseURL}closeBaseLineSurvey/reopenBaselineSurvey`, obj)
  }

}

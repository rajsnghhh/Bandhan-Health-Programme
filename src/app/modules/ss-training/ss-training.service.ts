import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SsTrainingService {
  baseURL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  listOfBranchesOfARegion(obj): any {
    return this.http.post(`${this.baseURL}branch/getListOfBranchesOfARegion`, obj)
  }

  branchWiseSSTrainingEventList(obj): any {
    return this.http.post(`${this.baseURL}sstraining/getSSTrainingEventList`, obj)
  }

  ssTrainingTypeAndTopic(obj): any {
    return this.http.post(`${this.baseURL}sstraining/getSSTrainingTypeAndTopic`, obj)
  }

  getSSList(obj): any {
    return this.http.post(`${this.baseURL}sstraining/getSSList`, obj)
  }

}

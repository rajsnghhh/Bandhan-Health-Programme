import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HealthForumService {
  baseURL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  listOfBranchesOfARegion(obj): any {
    return this.http.post(`${this.baseURL}branch/getListOfBranchesOfARegion`, obj)
  }

  viewHealthForumsOfABranch(obj): any {
    return this.http.post(`${this.baseURL}healthForum/viewHealthForumsOfABranch`, obj)
  }

  viewHealthForumsOfAEvent(obj): any {
    return this.http.post(`${this.baseURL}healthForum/viewHealthForumEventDetails`, obj)
  }
}


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class SsUnmapRemapService {
  baseURL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  listOfRegionsOfUser(obj): any {
    return this.http.post(`${this.baseURL}branch/getListOfRegionsOfUser`, obj)
  }

  listOfBranchesOfARegion(obj): any {
    return this.http.post(`${this.baseURL}branch/getListOfBranchesOfARegion`, obj)
  }

  hcoListOfBranch(obj): any {
    return this.http.post(`${this.baseURL}branch/getListOfActiveHcoITL`, obj)
  }

  viewUsersMappedHhAndSsDetails(obj): any {
    return this.http.post(`${this.baseURL}remap/viewUsersMappedHhAndSsDetails`, obj)
  }

  unmapAndOrRemapSsFromOneOrMoreHouseholdsOfUser(obj): any {
    return this.http.post(`${this.baseURL}remap/unmapAndOrRemapSsFromOneOrMoreHouseholdsOfUser`, obj)
  }

  getActiveSsListOfAnUser(obj): any {
    return this.http.post(`${this.baseURL}swasthyasahayika/getActiveSsListOfAnUser`, obj)
  }

}

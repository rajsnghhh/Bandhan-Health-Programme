import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SsUnmapService {

  baseURL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  listOfRegionsOfUser(obj): any {
    return this.http.post(`${this.baseURL}branch/getListOfRegionsOfUser`, obj)
  }

  listOfBranchesOfARegion(obj): any {
    return this.http.post(`${this.baseURL}branch/getListOfBranchesOfARegion`, obj)
  }

  listOfswasthyasahayika(obj): any {
    return this.http.post(`${this.baseURL}swasthyasahayika/getSSOfABranchSimpler`, obj)
  }

  unmapSsFromAllMappedHhAndUser(obj): any {
    return this.http.post(`${this.baseURL}remap/unmapSsFromAllMappedHhAndUser`, obj)
  }

}

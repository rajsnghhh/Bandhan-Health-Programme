import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BranchVillageMapService {

  baseURL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  listOfRegionsOfUser(obj): any {
    return this.http.post(`${this.baseURL}branch/getListOfRegionsOfUser`, obj)
  }

  listOfBranchesOfARegion(obj): any {
    return this.http.post(`${this.baseURL}branch/getListOfBranchesOfARegion`, obj)
  }

  flatListVillagesOfBranch(obj): any {
    return this.http.post(`${this.baseURL}village/getFlatListOfVillagesOfABranch`, obj)
  }

  getStateList(obj): any {
    return this.http.post(`${this.baseURL}state/getListOfAllStates`, obj)
  }

  getDistrictAndBlockList(obj): any {
    return this.http.post(`${this.baseURL}district/getListOfDistrictAndBlock`, obj)
  }

  getUnmappedVillagesOfGP(obj): any {
    return this.http.post(`${this.baseURL}branchVillageMap/getUnmappedVillagesOfAGp`, obj)
  }

  mapVillagesToABranch(obj): any {
    return this.http.post(`${this.baseURL}branchVillageMap/mapVillagesToABranch`, obj)
  }

  unmapVillagesFromABranch(obj): any {
    return this.http.post(`${this.baseURL}branchVillageMap/unmapVillages`, obj)
  }

}

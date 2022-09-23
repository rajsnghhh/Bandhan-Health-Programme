import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MaterialDistributionRegisterService {
  baseURL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getBranchesOfRegion(obj): any {
    return this.http.post(`${this.baseURL}branch/getListOfBranchesOfARegion`, obj)
  }

  getVillagesOfBranch(obj): any {
    return this.http.post(`${this.baseURL}village/getVillagesOfABranch`, obj)
  }

  getEligibleFamilyDetails(obj): any {
    return this.http.post(`${this.baseURL}mdregister/getEligibleMdRegisterFamily`, obj)
  }

  getFamilyChildDetails(obj): any {
    return this.http.post(`${this.baseURL}mdregister/getFamilyChildDetails`, obj)
  }

  getItemSubItemList(obj): any {
    return this.http.post(`${this.baseURL}mdregister/getItemSubItemList`, obj)
  }

  saveUpdateDeleteMaterialDistribution(obj): any {
    return this.http.post(`${this.baseURL}mdregister/saveUpdateDeleteMaterialDistribution`, obj)
  }
}

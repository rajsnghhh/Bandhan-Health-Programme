import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  loginId: string;
  userId: any;
  branchId: any;
  RoleDTOName: string;
  listOfRegion: any = [];
  regionBranchHide: boolean;
  baseURL = environment.apiUrl;

  constructor(private http: HttpClient) { }
  //HCO ** TL
  listOfBranchesOfUser(obj): any {
    return this.http.post(`${this.baseURL}branch/getListOfBranchesOfUser`, obj)
  }
  //Other Higher lavel
  listOfRegionsOfUser(obj): any {
    return this.http.post(`${this.baseURL}branch/getListOfRegionsOfUser`, obj)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PemRegisterService {
  baseURL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  villagesOfBranch(obj): any {
    return this.http.post(`${this.baseURL}village/getVillagesOfABranch`, obj)
  }

  listOfBranchesOfARegion(obj): any {
    return this.http.post(`${this.baseURL}branch/getListOfBranchesOfARegion`, obj)
  }

  viewPemList(obj): any {
    return this.http.post(`${this.baseURL}pem/view`, obj)
  }

  viewPemRegisterEntry(obj): any {
    return this.http.post(`${this.baseURL}pem/viewAllPemCounsellingDataOfAChild`, obj)
  }

  savePemRegister(obj): any {
    return this.http.post(`${this.baseURL}pem/saveCounsellingData`, obj)
  }


}

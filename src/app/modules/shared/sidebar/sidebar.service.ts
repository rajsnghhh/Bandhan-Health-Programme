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
  baseURL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  listOfBranchesOfUser(obj): any {
    return this.http.post(`${this.baseURL}branch/getListOfBranchesOfUser`, obj)
  }
}

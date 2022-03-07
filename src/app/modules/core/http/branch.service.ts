import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class BranchService {

  baseURL = environment.apiUrl;

  dataAccessDTO = {
    userId: '100',
    userName: 'bk103586',
  }

  Dto = {
    dataAccessDTO: this.dataAccessDTO,
    branchId: 1
  }

  constructor(private http: HttpClient) { }

  listOfBranchUser(): any {
    return this.http.post(`${this.baseURL}village/getVillagesOfABranch`, this.Dto)
  }
}

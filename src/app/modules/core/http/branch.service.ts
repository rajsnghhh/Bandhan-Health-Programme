import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  // dataAccessDTO = {
  //   userId: '1',
  //   userName: 'BK000001'
  // }
  dataAccessDTO = {
    userId: '100',
    userName: 'bk103586',
  }

  Dto = {
    dataAccessDTO: this.dataAccessDTO,
    branchId: 1
  }

  constructor(private http: HttpClient) { }

  // listOfBranchUser(): any {
  //   return this.http.post('http://192.168.153.56:6181/bhp/api/v1/branch/getListOfBranchesOfUser', this.Dto)
  // }

  listOfBranchUser(): any {
    return this.http.post('http://192.168.153.56:6181/bhp/api/v1/village/getVillagesOfABranch', this.Dto)
  }
}

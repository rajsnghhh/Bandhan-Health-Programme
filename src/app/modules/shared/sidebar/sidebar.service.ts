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
  branchVillageMapId: any;
  branchName: any;
  swasthyaSahayikaId: any
  swasthyaSahayikaName: any;
  subMenuList: Array<any> = [];
  donorName: any;
  donorMasterDto: any;
  villagesOfBranch: Array<any> = [];

  constructor(private http: HttpClient) { }

  checkRoledetailDTO() {
    let dataAccessDTO = JSON.parse(localStorage.getItem('dataAccessDTO'));
    let user = JSON.parse(localStorage.getItem('user'));
    let req = {
      dataAccessDTO: {
        userId: dataAccessDTO.userName,
        userName: dataAccessDTO.userId,
      }
    }
    if (user?.responseObject?.RoledetailDTO?.roleShortName?.indexOf('HCO') != -1 ||
      user?.responseObject?.RoledetailDTO?.roleShortName?.indexOf('TL') != -1) {
      return new Promise((resolve, reject) => {
        this.http.post(`${this.baseURL}branch/getListOfBranchesOfUser`, req).subscribe((res: any) => {
          this.branchId = res?.responseObject[0]?.branchId;
          this.branchName = res?.responseObject[0]?.branchName;
          this.donorName = res?.responseObject[0]?.donorMasterDto?.donorName;
          resolve({
            regionBranchHide: false,
            branchId: this.branchId
          })
        });
      })

    } else {
      return new Promise((resolve, reject) => {
        this.http.post(`${this.baseURL}branch/getListOfRegionsOfUser`, req).subscribe((res: any) => {
          this.listOfRegion = res.responseObject;
          this.regionBranchHide = true;
          resolve({
            region: this.listOfRegion,
            regionBranchHide: this.regionBranchHide
          });
        });

      })

    }
  }
}

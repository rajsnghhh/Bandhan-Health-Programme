import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HttpService } from 'src/app/modules/core/http/http.service';
import { DataAccessDTO } from '../core/models/dataAccessDTO.model';
import { MainFunctionDTO } from '../core/models/mainFunctionDTO.model';
import { RoleMasterDTO } from '../core/models/roleMasterDTO.model';
import { RoleFunctionMapDTO } from '../core/models/roleSubFunctionMapDTO.model';
import { SubFunctionMasterDTO } from '../core/models/subFunctionDTO.model';

@Component({
  selector: 'app-role-access',
  templateUrl: './role-access.component.html',
  styleUrls: ['./role-access.component.css']
})
export class RoleAccessComponent implements OnInit {
  // menuData: any = [];
  main_functions: MainFunctionDTO[];
  mainFunctionId: any = '';
  subFunctions: SubFunctionMasterDTO[];
  subFunctionsDropDown: any = [];
  selectedSubFunction: string = ''
  actionTypes: any = [];
  roleList: RoleMasterDTO[];
  roleAccessData: RoleFunctionMapDTO[];
  roleAccessSaveObj: {
    dataAccessDTO: DataAccessDTO,
    roleFunctionMapDTOList: RoleFunctionMapDTO[];
  }

  abcd: string;
  constructor(private httpService: HttpService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.data.subscribe(data => {
      // this.menuData = data;
      console.log(data);
      this.roleAccessData = data.roleAcess.responseObject;
      console.log(this.roleAccessData);
      this.roleList = this.roleAccessData.map(item => item.roleMasterDTO);
      this.main_functions = this.roleAccessData[0].mainFunctionDTOList
    });


  }

  getSubFunctions() {

    this.subFunctions = this.roleAccessData[0].mainFunctionDTOList.find(item => item.mainFunctionMasterId === this.mainFunctionId).subFunctionMasterDTOList;

    this.subFunctionsDropDown = new Set(this.subFunctions.map(item => item.subFunctionShortName));

  }

  createTableRows() {

    this.actionTypes = this.subFunctions.filter(item => item.subFunctionShortName === this.selectedSubFunction)
    console.log(this.actionTypes);
  }

  assignAccess(subFunctionId, roleIndex, event) {
    let checked = event.target.checked;
    let item = this.roleAccessData[roleIndex].mainFunctionDTOList.find(
      item => item.mainFunctionMasterId === this.mainFunctionId
    ).subFunctionMasterDTOList.find(item => item.subFunctionMasterId === subFunctionId)

    if (checked)
      item.roleActiveFlag = 'Y'
    else
      item.roleActiveFlag = 'N'

    // console.log(item);
    console.log(this.roleAccessData);

  }

  checkStatus(subFunctionId, roleIndex): any {
    let flag = this.roleAccessData[roleIndex].mainFunctionDTOList.find(
      item => item.mainFunctionMasterId === this.mainFunctionId
    ).subFunctionMasterDTOList.find(item => item.subFunctionMasterId === subFunctionId).roleActiveFlag

    // console.log(flag);
    if (flag === 'Y')
      return true

    else
      return false

  }

  save() {
    this.roleAccessSaveObj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      roleFunctionMapDTOList: this.roleAccessData
    };

    console.log(this.roleAccessSaveObj);
    this.httpService.postRequest(`rolesubfunctionmap/save`, this.roleAccessSaveObj).subscribe((data) => {
      console.log(data)
    },

      (error) => {
        console.log(error);
      })
  }

}

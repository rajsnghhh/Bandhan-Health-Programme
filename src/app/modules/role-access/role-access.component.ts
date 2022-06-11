import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/modules/core/http/http.service';
import { RoleAccessService } from './role-access.service';
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
  roleAccessForm: FormGroup;
  roleList: Array<any> = [];
  roleFunctionMapView: any;
  mainFunctionList: Array<any> = [];
  subFunctionList: Array<any> = [];
  // subFunctionFilterList: any = [];
  // accessType: any;
  // currentIndex: any = -1;
  // main_functions: MainFunctionDTO[];
  // mainFunctionId: any = '';
  // subFunctions: SubFunctionMasterDTO[];
  // subFunctionsDropDown: any = [];
  // selectedSubFunction: string = ''
  // actionTypes: any = [];
  // roleList: RoleMasterDTO[];
  // roleAccessData: RoleFunctionMapDTO[];
  // roleAccessSaveObj: {
  //   dataAccessDTO: DataAccessDTO,
  //   roleFunctionMapDTOList: RoleFunctionMapDTO[];
  // }
  // abcd: string;
  constructor(private httpService: HttpService, private route: ActivatedRoute, private roleService: RoleAccessService,
    private fb: FormBuilder, private toaster: ToastrService) { }

  ngOnInit(): void {

    // Api call for viewing rolefunctionmapview list
    let obj = { dataAccessDTO: this.httpService.dataAccessDTO }
    this.roleService.rolefunctionmapview(obj).subscribe((res) => {
      this.roleFunctionMapView = res.responseObject;
      console.log(this.roleFunctionMapView, 'roleFunctionMapView');
    });

    this.createForm();

    // this.route.data.subscribe(data => {
    // this.menuData = data;
    // console.log(data);
    // this.roleAccessData = data.roleAcess.responseObject;
    // console.log(this.roleAccessData);
    // this.roleList = this.roleAccessData.map(item => item.roleMasterDTO);
    // this.main_functions = this.roleAccessData[0].mainFunctionDTOList
    // });

  }

  createForm() {
    this.roleAccessForm = this.fb.group({
      device: ['', Validators.required],
      mainfunction: ['', Validators.required],
      accessTypeChecked: [true],
      accessTypeUnhecked: ['']
    });
  }

  get f() {
    return this.roleAccessForm.controls;
  }

  changeDevice(deviceId) {
    console.log(deviceId);
    if (deviceId == 1) {
      this.mainFunctionList = this.roleFunctionMapView?.webMenu;
      console.log(this.mainFunctionList, ' this.mainFunctionList-web');
    } else {
      this.mainFunctionList = this.roleFunctionMapView?.mobMenus;
      console.log(this.mainFunctionList, ' this.mainFunctionList-mobile');
    }


    // this.roleAccessForm.controls.deviceType.setValue('');

    //   var WData = this.subFunctionList.filter((item) => item.deviceType == 'W');
    //   // this.webList = new Set(WData.map(item => item.subFunctionShortName));
    //   this.webList = WData.filter((v, i, a) => a.findIndex(v2 => (v2.subFunctionShortName === v.subFunctionShortName)) === i);
    //   console.log(this.webList, 'weblist');

    //   var Mdata = this.subFunctionList.filter((item) => item.deviceType == 'M');
    //   this.mobileList = Mdata.filter((v, i, a) => a.findIndex(v2 => (v2.subFunctionShortName === v.subFunctionShortName)) === i);
    //   console.log(this.mobileList, 'this.mobileList');

    //   if (deviceId == 1) {
    //     this.subFunctionFilterList = this.webList;
    //   } else if (deviceId == 2) {
    //     this.subFunctionFilterList = this.mobileList;
    //   }


  }

  changeMainFunction(mainFunctionId) {


    console.log(mainFunctionId, 'mainFunctionId');
    this.subFunctionList = this.mainFunctionList.find(item => item.mainMenuId == mainFunctionId)?.subMenuDtoList;
    // this.subFunctionFilterList = new Set(this.subFunctionList.map(item => item.subFunctionShortName))
    console.log(this.subFunctionList, ' this.subFunctionList');
    // console.log(this.subFunctionFilterList, 'this.subFunctionFilterList');



    // this.subFunctionList = new Set(this.subFunctions.map(item => item.subFunctionShortName));
    // console.log(this.subFunctionList, 'subFunctionList');

  }

  changeSubFunction(subFunctionName) {
    console.log(subFunctionName, 'subFunctionName');
    // this.roleAccessForm.patchValue({
    //   subMenuAccessType: this.roleFunctionMapView.webMenu[1].subMenuDtoList[0].roleAccessDtoList[1].accessDtoList[0].roleActiveFlag == 'Y' ? true : false
    // })

    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        // before opening the accordion, you close everything
        // for (var j = 0; j < coll.length; j++) {
        //   coll[j].classList.remove("active");
        //   coll[j].nextElementSibling.style.maxHeight = null;
        // }

        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }

    this.roleList = this.subFunctionList.find((role) => role.subMenuName == subFunctionName)?.roleAccessDtoList;
    console.log(this.roleList, 'roleList');

    // this.accessList = this.roleList.filter((_, index) =>{this.roleList[index].accessDtoList})
    // console.log(this.accessList);

    // this.accessList = this.roleList.filter((item, index) =>{item})
    // console.log(this.accessList, ' this.accessList ');

    // this.roleList.forEach((item, i) => {
    //   this.accessList = item.accessDtoList;
    //   console.log(this.accessList, ' this.accessList ');

    // })



    // this.accessType = this.subFunctions.filter(item => item.subFunctionShortName == subFunctionName);
    // console.log(this.accessType);



    //   this.actionTypes = this.subFunctions.filter(item => item.subFunctionShortName === this.selectedSubFunction)
    //   console.log(this.actionTypes);
    // this.viewCheck(this.checkbox , this.accessList);


  }

  assignAccess(accessDtoList, i, e) {
    console.log(accessDtoList, accessDtoList.subMenuId, 'accessDtoList.subMenuId');


    let checked = e.target.checked;
    console.log(checked);
    if (checked == true) {
      accessDtoList.roleActiveFlag = 'Y';
      console.log(accessDtoList, this.roleFunctionMapView);
    } else {
      accessDtoList.roleActiveFlag = 'N';
      console.log(accessDtoList, this.roleFunctionMapView);
    }



    // let item = this.roleFunctionMapView[i].mainFunctionDTOList.find();
    //     item => item.mainFunctionMasterId === this.mainFunctionId
    //   ).subFunctionMasterDTOList.find(item => item.subFunctionMasterId === subFunctionId)

    //   if (checked)
    //     item.roleActiveFlag = 'Y'
    //   else
    //     item.roleActiveFlag = 'N'

    //   // console.log(item);
    //   console.log(this.roleAccessData);

    // } */
    // this.checkbox = e.target.checked;
    // console.log(this.checkbox);

    // this.accessList = accessDtoList;
    // console.log(this.accessList);
    // if (this.accessList.roleActiveFlag == 'Y') {
    //   this.checkbox = true;
    // }


  }

  saveRoleMap() {
    let roleAccessSaveObj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      roleFunctionMapDTOList: this.roleFunctionMapView
    }

    console.log(roleAccessSaveObj);

    // this.roleService.rolesubfunctionmapsave(roleAccessSaveObj).subscribe((res) => {
    //   console.log(res.responseObject, 'roleFunctionMapsave');
    //   if (res.status == true) {
    //     this.showSuccess(res.message);
    //   }
    //   else {
    //     this.showError(res.message);
    //   }

    // });

  }

  showSuccess(message) {
    this.toaster.success(message, 'Role Menu Map', {
      timeOut: 3000,
    });
  }

  showError(message) {
    this.toaster.error(message, 'Role Menu Map', {
      timeOut: 3000,
    });
  }
}

  // changeRole(roleId) {
  //   console.log(roleId);

  //   this.mainFunctionList = this.roleFunctionMapView.find(item => item.roleMasterDTO.roleMasterId == roleId)?.mainFunctionDTOList;
  //   console.log(this.mainFunctionList, 'mainFunctionList');
  // this.subFunctionList = new Set(this.subFunctions.map(item => item.subFunctionShortName));
  // console.log(this.subFunctionList, 'subFunctionList');
  // this.mainFunctionList.filter((item=> item.))

  // var submasterList = []

  // this.mainFunctionList.filter(it=>{it.})

  // this.mainFunctionList?.forEach((item, i) => {
  //   var ListM = item.subFunctionMasterDTOList.filter(item => item.deviceType === "M")
  //   // console.log(ListM,'ListM');

  //   var li = ListM.filter((v, i, a) => a.findIndex(v2 => (v2.subFunctionShortName === v.subFunctionShortName)) === i);


  //   var ListW = item.subFunctionMasterDTOList.filter(item => item.deviceType === "W")
  //   console.log(li, 'ListW');



  // });



  // submasterList[0].filter(ite =>{ite.deviceType == "M"})
  // console.log(submasterList[0],"tty1");
  // var tt = submasterList.forEach(ii => {



  // })
  // console.log(submasterList,"tty1");

  // }

  // setSubFunctionMenu(item) {
  //   console.log(item);
  //   this.subFunctions = item;
  //   this.subFunctionList = new Set(this.subFunctions.map(item => item.subFunctionShortName));
  //   console.log(this.subFunctionList, 'subFunctionList');


  // }



  // getSubFunctions() {

  //   this.subFunctions = this.roleAccessData[0].mainFunctionDTOList.find(item => item.mainFunctionMasterId === this.mainFunctionId).subFunctionMasterDTOList;

  //   this.subFunctionsDropDown = new Set(this.subFunctions.map(item => item.subFunctionShortName));

  // }

  // createTableRows() {

  //   this.actionTypes = this.subFunctions.filter(item => item.subFunctionShortName === this.selectedSubFunction)
  //   console.log(this.actionTypes);
  // }

  // assignAccess(subFunctionId, roleIndex, event) {
  //   let checked = event.target.checked;
  //   let item = this.roleAccessData[roleIndex].mainFunctionDTOList.find(
  //     item => item.mainFunctionMasterId === this.mainFunctionId
  //   ).subFunctionMasterDTOList.find(item => item.subFunctionMasterId === subFunctionId)

  //   if (checked)
  //     item.roleActiveFlag = 'Y'
  //   else
  //     item.roleActiveFlag = 'N'

  //   // console.log(item);
  //   console.log(this.roleAccessData);

  // }

  // checkStatus(subFunctionId, roleIndex): any {
  //   let flag = this.roleAccessData[roleIndex].mainFunctionDTOList.find(
  //     item => item.mainFunctionMasterId === this.mainFunctionId
  //   ).subFunctionMasterDTOList.find(item => item.subFunctionMasterId === subFunctionId).roleActiveFlag

  //   // console.log(flag);
  //   if (flag === 'Y')
  //     return true

  //   else
  //     return false

  // }

  // save() {
  //   this.roleAccessSaveObj = {
  //     dataAccessDTO: this.httpService.dataAccessDTO,
  //     roleFunctionMapDTOList: this.roleAccessData
  //   };

  //   console.log(this.roleAccessSaveObj);
  //   this.httpService.postRequest(`rolesubfunctionmap/save`, this.roleAccessSaveObj).subscribe((data) => {
  //     console.log(data)
  //   },

  //     (error) => {
  //       console.log(error);
  //     })
  // }


  // changeRoleFunction(roleId) {

  //   console.log(roleId);

  //   this.accessList = this.roleList.find((role) => role.roleMasterId == roleId)?.accessDtoList;
  //   console.log(this.accessList, 'accessDtoList');

  // }




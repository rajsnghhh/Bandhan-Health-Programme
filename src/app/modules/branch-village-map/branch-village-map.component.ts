import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../core/http/http.service';
import { ConfirmationDialogService } from '../shared/confirmation-dialog/confirmation-dialog.service';
import { ValidationService } from '../shared/services/validation.service';
import { SidebarService } from '../shared/sidebar/sidebar.service';
import { BranchVillageMapService } from './branch-village-map.service';

@Component({
  selector: 'app-branch-village-map',
  templateUrl: './branch-village-map.component.html',
  styleUrls: ['./branch-village-map.component.css']
})
export class BranchVillageMapComponent implements OnInit {
  branchVillageForm: UntypedFormGroup;
  mapVillForm: UntypedFormGroup;
  regionList: Array<any> = [];
  branchList: Array<any> = [];
  mappedVillageList: Array<any> = [];
  stateList: Array<any> = [];
  districtList: Array<any> = [];
  blockList: Array<any> = [];
  gpList: Array<any> = [];
  unmappedVillageList: Array<any> = [];
  branchId: any;
  branchName: any;
  districtId: any;
  districtName: any;
  page = 1;
  pageSize = 6;
  p: any;
  modalContent: any;
  modalReference: any;
  checkMapDataPushPop = {
    dataAccessDTO: {},
    branchId: '',
    villageIdList: [],
  };
  checkUnmapDataPushPop = {
    dataAccessDTO: {},
    branchId: '',
    villageIdList: [],
  };
  role: any;
  createMode: boolean;
  newArrayOfObj: Array<any> = [];
  checkedAllData = false;
  regionBranchHide: boolean;
  villagesOfBranch: Array<any> = [];
  branchID: any;
  branchNAme: any;
  districtNAme: any;
  searchFullscreen: boolean;

  constructor(private fb: UntypedFormBuilder, private branchVillMapService: BranchVillageMapService, private httpService: HttpService,
    private modalService: NgbModal, private toaster: ToastrService, private confirmationDialogService: ConfirmationDialogService,
    private sidebarService: SidebarService, private http: HttpClient, private validationService: ValidationService, private router: Router,
    config: NgbModalConfig) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngDoCheck(): void {
    this.searchFullscreen = this.validationService.val;
  }

  ngOnInit(): void {
    this.role = this.sidebarService.RoleDTOName;
    console.log(this.role);

    this.createForm();

    this.sidebarService.checkRoledetailDTO().then((res: any) => {
      this.branchID = res.branchId;
      this.branchNAme = res.branchName;
      this.districtNAme = res.districtName
      console.log(res, 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');


      if (res.regionBranchHide) {
        this.regionList = res.region;
        this.regionBranchHide = res.regionBranchHide;
      } else {
        let dataAccessDTO = JSON.parse(localStorage.getItem('dataAccessDTO'));
        let Dto = {
          dataAccessDTO: {
            userId: dataAccessDTO.userName,
            userName: dataAccessDTO.userId,
          },
          branchId: res.branchId
        }
        this.regionBranchHide = res.regionBranchHide;
        this.http.post(`${this.sidebarService.baseURL}village/getVillagesOfABranch`, Dto).subscribe((res: any) => {
          if (res.sessionDTO.status == true) {
            this.villagesOfBranch = res.responseObject;
          }
        });

        let Dtos = {
          dataAccessDTO: this.httpService.dataAccessDTO,
          branchId: res.branchId
        }
        this.branchVillMapService.flatListVillagesOfBranch(Dtos).subscribe((res) => {
          this.mappedVillageList = res.responseObject;
          console.log(this.mappedVillageList, 'mappedVillageList');
        });
      }
    });

    this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionShortName == 'Branch Setup')?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 57 || item.subFunctionMasterId == 58 || item.subFunctionMasterId == 59 || item.subFunctionMasterId == 60)?.accessDetailList
      .find(accessType => accessType.accessType == 'view')?.accessType ? this.router.navigate(['/branch-villageMap']) : this.router.navigate(['/error']);

    this.createMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionShortName == 'Branch Setup')?.subMenuDetailList
      .find(subFunctionMasterId => subFunctionMasterId.subFunctionMasterId == 57)?.accessDetailList
      .find(accessType => accessType.accessType == 'create')?.accessType ? true : false;

    this.regionBranchHide = this.sidebarService.regionBranchHide;
  }

  changeRegion(regionId) {
    console.log(regionId);

    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      regionId: regionId,
    };
    this.branchVillMapService.listOfBranchesOfARegion(req).subscribe((res) => {
      this.branchList = res.responseObject;
      console.log(this.branchList, 'this.branchList');

    }, (error) => {
      this.branchList = null;
    }
    );
    this.branchVillageForm.controls.branch.setValue('');
    this.mappedVillageList = [];
    this.checkUnmapDataPushPop.villageIdList = [];
    if (this.branchVillageForm.value.region == '') {
      this.branchVillageForm.controls.branch.setValue('');
      this.mappedVillageList = [];
      this.checkUnmapDataPushPop.villageIdList = [];
    }
  }

  changeBranch(branchId) {
    this.branchId = branchId;
    this.branchName = this.branchList.find(item => item.branchId == this.branchId)?.branchName;
    console.log(this.branchName);

    var district = this.branchList?.find(item => item.branchId == this.branchId)?.districtMasterDto;
    this.districtName = district?.districtName;
    this.districtId = district?.districtMasterId;
    console.log(this.districtName, this.districtId);

    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: this.branchId
    }
    this.branchVillMapService.flatListVillagesOfBranch(Dto).subscribe((res) => {
      this.mappedVillageList = res.responseObject;
      console.log(this.mappedVillageList, 'mappedVillageList');
    });

    this.mappedVillageList = [];
    this.checkUnmapDataPushPop.villageIdList = [];

    if (this.branchVillageForm.value.branch == '') {
      this.mappedVillageList = [];
      this.checkUnmapDataPushPop.villageIdList = [];
    }
  }

  createForm() {
    this.branchVillageForm = this.fb.group({
      region: ['', Validators.required],
      branch: ['', Validators.required]
    });
  }

  get f() {
    return this.branchVillageForm.controls;
  }

  mapVillForms(mapVill) {
    this.mapVillForm = this.fb.group({
      state: ['', Validators.required],
      district: ['', Validators.required],
      block: ['', Validators.required],
      gp: ['', Validators.required]
    });

  }

  mapVillage(mapVill) {
    this.modalContent = '';
    this.modalReference = this.modalService.open(mapVill, {
      windowClass: 'mapVill',
    });
    this.mapVillForms(mapVill);

    // Api call for viewing state list
    let obj = { dataAccessDTO: this.httpService.dataAccessDTO }
    this.branchVillMapService.getStateList(obj).subscribe((res) => {
      this.stateList = res.responseObject.stateList;
      console.log(this.stateList);
    });
  }

  changeState(stateId) {

    let obj = { dataAccessDTO: this.httpService.dataAccessDTO, stateId: stateId }
    this.branchVillMapService.getDistrictAndBlockList(obj).subscribe((res) => {
      this.districtList = res.responseObject.stateWiseDistrictList;
      console.log(this.districtList);
    })

    this.mapVillForm.controls.district.setValue('');
    this.mapVillForm.controls.block.setValue('');
    this.mapVillForm.controls.gp.setValue('');
    this.newArrayOfObj = [];
    this.checkMapDataPushPop.villageIdList = [];
    const input = document.getElementById('flexCheckDefaults') as HTMLInputElement | null;
    if (input != null) {
      input.checked = false;
    }
    if (this.mapVillForm.value.state == '') {
      this.mapVillForm.controls.district.setValue('');
      this.mapVillForm.controls.block.setValue('');
      this.mapVillForm.controls.gp.setValue('');
      this.newArrayOfObj = [];
      this.checkMapDataPushPop.villageIdList = [];
    }

  }

  changeDistrict(districtId) {
    console.log(districtId);

    this.blockList = this.districtList.find(block => block.districtMasterId == districtId)?.blockList;
    console.log(this.blockList);

    this.mapVillForm.controls.block.setValue('');
    this.mapVillForm.controls.gp.setValue('');
    this.newArrayOfObj = [];
    this.checkMapDataPushPop.villageIdList = [];
    const input = document.getElementById('flexCheckDefaults') as HTMLInputElement | null;
    if (input != null) { input.checked = false }
    if (this.mapVillForm.value.district == '') {
      this.mapVillForm.controls.block.setValue('');
      this.mapVillForm.controls.gp.setValue('');
      this.newArrayOfObj = [];
      this.checkMapDataPushPop.villageIdList = [];
    }
  }

  changeBlock(blockId) {
    console.log(blockId);

    this.gpList = this.blockList.find(gp => gp.blockMasterId == blockId)?.gpDtoList;
    console.log(this.gpList);
    this.mapVillForm.controls.gp.setValue('');
    this.newArrayOfObj = [];
    this.checkMapDataPushPop.villageIdList = [];
    const input = document.getElementById('flexCheckDefaults') as HTMLInputElement | null;
    if (input != null) { input.checked = false }
    if (this.mapVillForm.value.block == '') {
      this.mapVillForm.controls.gp.setValue('');
      this.newArrayOfObj = [];
      this.checkMapDataPushPop.villageIdList = [];
    }
  }

  changeGp(GPID) {
    console.log(GPID);

    let obj = { dataAccessDTO: this.httpService.dataAccessDTO, gpMunicipalId: GPID };
    this.branchVillMapService.getUnmappedVillagesOfGP(obj).subscribe((res) => {
      this.unmappedVillageList = res.responseObject;

      this.newArrayOfObj = this.unmappedVillageList?.map(({
        isChecked = false,
        ...rest
      }) => ({
        isChecked,
        ...rest
      }));

      console.log(this.unmappedVillageList);
      console.log(this.newArrayOfObj, 'newArrayOfObj');
    });

    this.newArrayOfObj = [];
    this.checkedAllData = false;
    this.checkMapDataPushPop.villageIdList = [];
    if (this.mapVillForm.value.gp == '') {
      this.newArrayOfObj = [];
      this.checkedAllData = false;
      this.checkMapDataPushPop.villageIdList = [];
    }

  }

  get v() {
    return this.mapVillForm.controls;
  }

  branchVillModalDismiss() {
    this.modalReference?.close();
    this.newArrayOfObj = [];
  }

  mapVillCheck(e, i) {
    this.checkedAllData = false;
    var checkboxData = e.target.checked;
    this.checkMapDataPushPop.villageIdList = []

    if (checkboxData) {

      this.newArrayOfObj[i].isChecked = true;
      var data = this.newArrayOfObj.filter(it => it.isChecked == true)
      if (data.length != this.newArrayOfObj.length) {
        this.checkedAllData = false
      } else {
        this.checkedAllData = true
      }
      console.log(this.newArrayOfObj, 'Checked');
    } else {
      this.newArrayOfObj[i].isChecked = false
      var data = this.newArrayOfObj.filter(it => it.isChecked == true)
      if (data.length != this.newArrayOfObj.length) {
        this.checkedAllData = false
      } else {
        this.checkedAllData = true
      }
      console.log(this.newArrayOfObj, 'unchecked');
    }

  }

  selectAll(e) {
    this.checkMapDataPushPop.villageIdList = []
    this.checkedAllData = false;
    if (e.target.checked == true) {
      this.checkedAllData = true
      this.newArrayOfObj?.forEach(it => {
        it.isChecked = true;
        console.log(this.newArrayOfObj, 'checked');
      });

    } else {
      this.checkedAllData = false
      this.newArrayOfObj?.forEach(it => {
        it.isChecked = false;
        console.log(this.newArrayOfObj, 'unchecked');
      })

    }

  }

  disabledMap() {
    let flag = true;
    var data = this.newArrayOfObj?.filter(it => it.isChecked == true);

    if (data?.length == 0) {
      flag = false;
    } else if (!this.newArrayOfObj) {
      flag = false;
    }
    return flag;
  }

  allDisabledCheck() {

    let flag = true;
    if (!this.mapVillForm.value.gp) {
      flag = false;
    } else if (!this.newArrayOfObj) {
      flag = false;
    }
    return flag;
  }

  saveMapVills() {
    console.log('savevillmap');
    
    if (this.mapVillForm.value.district != this.districtId) {
      this.confirmationDialogService.confirm('', 'You are mapping villages of a different district with the' + ' ' + this.branchName + ' ' + '.')
        .then(() => this.map()
        )
        .catch(() => '');

    }
    else {
      this.confirmationDialogService.confirm('', 'Are you sure you want to map selected villages to the' + ' ' + this.branchName + ' ' + '?')
        .then(() => this.map()
        )
        .catch(() => '');

    }

    console.log(this.mapVillForm.value.district, 'this.mapVillForm.value.district');
    console.log(this.districtId, 'this.districtId');

  }

  map() {

    var data = this.newArrayOfObj.filter(it => it.isChecked == true)

    data.forEach(it => {
      this.checkMapDataPushPop.dataAccessDTO = this.httpService.dataAccessDTO,
        this.checkMapDataPushPop.branchId = this.branchId ? this.branchId : this.branchID,
        this.checkMapDataPushPop.villageIdList.push({ villageId: it.villageMasterId });

      console.log(this.checkMapDataPushPop, 'finaldata for mapping');
    })

    this.branchVillMapService.mapVillagesToABranch(this.checkMapDataPushPop).subscribe((res) => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.branchVillModalDismiss();
        this.changeBranch(this.branchId ? this.branchId : this.branchID);
      }
      else {
        this.showError(res.message);
      }

    });

  }

  unMapVillCheck(e, villId) {
    var checkboxData = e.target.checked;
    if (checkboxData) {
      this.checkUnmapDataPushPop.dataAccessDTO = this.httpService.dataAccessDTO,
        this.checkUnmapDataPushPop.villageIdList.push({ villageId: villId });
    }
    else {
      var i = this.checkUnmapDataPushPop.villageIdList.findIndex(list => list.villageId == villId);
      this.checkUnmapDataPushPop.villageIdList.splice(i, 1);
    }

    console.log(this.checkUnmapDataPushPop, 'checkUnmapDataPushPop');

  }

  saveunmapVill() {

    this.confirmationDialogService.confirm('', 'Are you sure you want to unmap selected villages from the' + ' ' + this.branchName + ' ' + '?')
      .then(() => this.unmap()
      )
      .catch(() => '');

  }

  unmap() {
    this.branchVillMapService.unmapVillagesFromABranch(this.checkUnmapDataPushPop).subscribe((res) => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.changeBranch(this.branchId ? this.branchId : this.branchID);
      }
      else {
        this.showError(res.message);
      }

    })

  }

  showSuccess(message) {
    this.toaster.success(message, 'Branch-Village Map', {
      timeOut: 3000,
    });
  }

  showError(message) {
    this.toaster.error(message, 'Branch-Village Map', {
      timeOut: 3000,
    });
  }
}

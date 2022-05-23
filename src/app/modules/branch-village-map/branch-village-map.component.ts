import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../core/http/http.service';
import { ConfirmationDialogService } from '../shared/confirmation-dialog/confirmation-dialog.service';
import { SidebarService } from '../shared/sidebar/sidebar.service';
import { BranchVillageMapService } from './branch-village-map.service';

@Component({
  selector: 'app-branch-village-map',
  templateUrl: './branch-village-map.component.html',
  styleUrls: ['./branch-village-map.component.css']
})
export class BranchVillageMapComponent implements OnInit {
  branchVillageForm: FormGroup;
  mapVillForm: FormGroup;
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
  role:any;

  constructor(private fb: FormBuilder, private branchVillMapService: BranchVillageMapService, private httpService: HttpService,
    private modalService: NgbModal, private toaster: ToastrService, private confirmationDialogService: ConfirmationDialogService,
    private sidebarService: SidebarService) { }

  ngOnInit(): void {
    this.role = this.sidebarService.RoleDTOName;
    console.log(this.role);

    this.createForm();

    let obj = { dataAccessDTO: this.httpService.dataAccessDTO }
    this.branchVillMapService.listOfRegionsOfUser(obj).subscribe((res) => {
      this.regionList = res.responseObject;
      console.log(this.regionList);
    })

  }

  changeRegion(regionId) {
    console.log(regionId);

    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      regionId: regionId,
    };
    this.branchVillMapService.listOfBranchesOfARegion(req).subscribe((res) => {
      this.branchList = res.responseObject;
      console.log(res);

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

    var district = this.branchList.find(dis => dis.districtMasterDto.districtMasterId == this.branchId)?.districtMasterDto;
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
    let obj = {
      dataAccessDTO: this.httpService.dataAccessDTO
    }

    this.branchVillMapService.getStateList(obj).subscribe((res) => {
      this.stateList = res.responseObject.stateList;
      console.log(this.stateList);
    });
  }

  changeState(stateId) {

    let obj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      stateId: stateId
    }

    this.branchVillMapService.getDistrictAndBlockList(obj).subscribe((res) => {
      this.districtList = res.responseObject.stateWiseDistrictList;
      console.log(this.districtList);
    })

    this.mapVillForm.controls.district.setValue('');
    this.mapVillForm.controls.block.setValue('');
    this.mapVillForm.controls.gp.setValue('');
    this.unmappedVillageList = [];
    this.checkMapDataPushPop.villageIdList = [];
    if (this.mapVillForm.value.state == '') {
      this.mapVillForm.controls.district.setValue('');
      this.mapVillForm.controls.block.setValue('');
      this.mapVillForm.controls.gp.setValue('');
      this.unmappedVillageList = [];
      this.checkMapDataPushPop.villageIdList = [];
    }

  }

  changeDistrict(districtId) {
    console.log(districtId);

    this.blockList = this.districtList.find(block => block.districtMasterId == districtId)?.blockList;
    console.log(this.blockList);

    this.mapVillForm.controls.block.setValue('');
    this.mapVillForm.controls.gp.setValue('');
    this.unmappedVillageList = [];
    this.checkMapDataPushPop.villageIdList = [];

    if (this.mapVillForm.value.district == '') {
      this.mapVillForm.controls.block.setValue('');
      this.mapVillForm.controls.gp.setValue('');
      this.unmappedVillageList = [];
      this.checkMapDataPushPop.villageIdList = [];
    }
  }

  changeBlock(blockId) {
    console.log(blockId);

    this.gpList = this.blockList.find(gp => gp.blockMasterId == blockId)?.gpDtoList;
    console.log(this.gpList);
    this.mapVillForm.controls.gp.setValue('');
    this.unmappedVillageList = [];
    this.checkMapDataPushPop.villageIdList = [];
    if (this.mapVillForm.value.block == '') {
      this.mapVillForm.controls.gp.setValue('');
      this.unmappedVillageList = [];
      this.checkMapDataPushPop.villageIdList = [];
    }
  }

  changeGp(GPID) {
    console.log(GPID);

    let obj = { dataAccessDTO: this.httpService.dataAccessDTO, gpMunicipalId: GPID };
    this.branchVillMapService.getUnmappedVillagesOfGP(obj).subscribe((res) => {
      this.unmappedVillageList = res.responseObject;
      console.log(this.unmappedVillageList);
    });

    this.unmappedVillageList = [];
    this.checkMapDataPushPop.villageIdList = [];
    if (this.mapVillForm.value.gp == '') {
      this.unmappedVillageList = [];
      this.checkMapDataPushPop.villageIdList = [];
    }

  }

  get v() {
    return this.mapVillForm.controls;
  }

  branchVillModalDismiss() {
    this.modalReference?.close();
    this.unmappedVillageList = [];
  }

  mapVillCheck(e, villId) {
    var checkboxData = e.target.checked;
    if (checkboxData) {
      this.checkMapDataPushPop.dataAccessDTO = this.httpService.dataAccessDTO,
        this.checkMapDataPushPop.branchId = this.branchId,
        this.checkMapDataPushPop.villageIdList.push({ villageId: villId });
    } else {
      var i = this.checkMapDataPushPop.villageIdList.findIndex(list => list.villageId == villId);
      this.checkMapDataPushPop.villageIdList.splice(i, 1);
    }
    console.log(this.checkMapDataPushPop, 'checkMapDataPushPop');

  }

  saveMapVill() {
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
    this.branchVillMapService.mapVillagesToABranch(this.checkMapDataPushPop).subscribe((res) => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.branchVillModalDismiss();
        this.changeBranch(this.branchId);
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
        this.changeBranch(this.branchId);
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

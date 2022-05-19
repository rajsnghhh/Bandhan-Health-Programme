import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../core/http/http.service';
import { ConfirmationDialogService } from '../shared/confirmation-dialog/confirmation-dialog.service';
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
  flatVillageList: Array<any> = [];
  stateList: Array<any> = [];
  districtList: Array<any> = [];
  blockList: Array<any> = [];
  gpList: Array<any> = [];
  unmappedVillageList: Array<any> = [];
  branchId: any;
  branchName: any;
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


  constructor(private fb: FormBuilder, private branchVillMapService: BranchVillageMapService, private httpService: HttpService,
    private modalService: NgbModal, private toaster: ToastrService, private confirmationDialogService: ConfirmationDialogService) { }

  ngOnInit(): void {

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
    this.flatVillageList = [];
    if (this.branchVillageForm.value.region == '') {
      this.branchVillageForm.controls.branch.setValue('');
      this.flatVillageList = [];
    }
  }

  changeBranch(branchId) {
    this.branchId = branchId;
    this.branchName = this.branchList.find(item => item.branchId == this.branchId)?.branchName;
    console.log(this.branchName);

    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: this.branchId
    }
    this.branchVillMapService.flatListVillagesOfBranch(Dto).subscribe((res) => {
      this.flatVillageList = res.responseObject;
      console.log(this.flatVillageList, 'flatVillageList');
    });

    this.flatVillageList = [];

    if (this.branchVillageForm.value.branch == '') {
      this.flatVillageList = [];
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

  mapVillCheck(e, item) {

    var data = e.target.checked;
    if (data) {
      this.checkMapDataPushPop.dataAccessDTO = this.httpService.dataAccessDTO,
        this.checkMapDataPushPop.branchId = this.branchId,
        this.checkMapDataPushPop.villageIdList.push({ villageId: item.villageMasterId });
      console.log(this.checkMapDataPushPop);
    }
    else {
      this.checkMapDataPushPop.villageIdList.pop();
    }

  }

  saveMapVill() {
    let postBody = this.checkMapDataPushPop;
    console.log(postBody);

    this.confirmationDialogService.confirm('', 'Are you sure you want to map selected villages to' + ' ' + this.branchName)
      .then(() => this.checkMapDataPushPop
      )
      .catch(() => '');

    // this.branchVillMapService.mapVillagesToABranch(postBody).subscribe((res) => {
    //   console.log(res);
    //   if (res.status == true) {
    //     this.showSuccess(res.message);
    //     this.branchVillModalDismiss();
    //     this.changeBranch(this.branchId);
    //   }
    //   else {
    //     this.showError(res.message);
    //   }

    // })

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

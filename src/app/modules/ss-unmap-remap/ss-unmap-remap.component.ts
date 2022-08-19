import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../core/http/http.service';
import { ConfirmationDialogService } from '../shared/confirmation-dialog/confirmation-dialog.service';
import { SidebarService } from '../shared/sidebar/sidebar.service';
import { SsUnmapRemapService } from './ss-unmap-remap.service';

@Component({
  selector: 'app-ss-unmap-remap',
  templateUrl: './ss-unmap-remap.component.html',
  styleUrls: ['./ss-unmap-remap.component.css']
})
export class SsUnmapRemapComponent implements OnInit {
  ssUnmapRemapForm: FormGroup;
  modalForm: FormGroup;
  regionList: Array<any> = [];
  branchList: Array<any> = [];
  userList: Array<any> = [];
  userMappedHHList: Array<any> = [];
  ssLists: Array<any> = [];
  hcouserId: any;
  branchId: any;
  page = 1;
  pageSize = 5;
  p: any;
  checkboxData: any;
  modalContent: any;
  modalReference: any;
  mapUnmapDto = {
    dataAccessDTO: {},
    ssHhMapRemapDtoList: [],
  };
  ssId: any;
  loader: boolean = true;
  ssNameFilter: any;

  constructor(private fb: FormBuilder, private ssUnmapRemapService: SsUnmapRemapService,
    private httpService: HttpService, private toaster: ToastrService, private confirmationDialogService: ConfirmationDialogService,
    private modalService: NgbModal, private sidebarService: SidebarService, private router: Router) { }

  ngOnInit(): void {
    this.createForm();

    let obj = { dataAccessDTO: this.httpService.dataAccessDTO }
    this.ssUnmapRemapService.listOfRegionsOfUser(obj).subscribe((res) => {
      this.regionList = res.responseObject;
      console.log(this.regionList);
    });

    this.sidebarService.subMenuList
      .find(functionMasterId => functionMasterId.functionMasterId == 3)?.subMenuDetailList
      .find(subFunctionMasterId => subFunctionMasterId.subFunctionMasterId == 203)?.accessDetailList
      .find(accessType => accessType.accessType == 'create')?.accessType ? this.router.navigate(['/ss-unmap-remap']) : this.router.navigate(['/error']);

  }

  createForm() {
    this.ssUnmapRemapForm = this.fb.group({
      region: ['', Validators.required],
      branch: ['', Validators.required],
      hcouser: ['', Validators.required],
      ssByList: ['', Validators.required]
    });
  }

  get f() {
    return this.ssUnmapRemapForm.controls;
  }

  changeRegion(regionId) {
    console.log(regionId);

    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      regionId: regionId,
    };
    this.ssUnmapRemapService.listOfBranchesOfARegion(req).subscribe((res) => {
      this.branchList = res.responseObject;
      console.log(this.branchList, 'this.branchList');

    }, (error) => {
      this.branchList = null;
    }
    );

    this.ssUnmapRemapForm.controls.branch.setValue('');
    this.ssUnmapRemapForm.controls.hcouser.setValue('')
    this.userMappedHHList = [];
    if (this.ssUnmapRemapForm.value.region == '') {
      this.ssUnmapRemapForm.controls.branch.setValue('');
      this.ssUnmapRemapForm.controls.hcouser.setValue('')
      this.userMappedHHList = [];
    }
  }

  changeBranch(branchId) {

    console.log(branchId);
    this.branchId = branchId;

    let obj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: branchId
    }
    this.ssUnmapRemapService.hcoListOfBranch(obj).subscribe((res) => {
      this.userList = res.responseObject;
      console.log(this.userList, 'this.userList');

    });

    this.ssUnmapRemapForm.controls.hcouser.setValue('')
    this.userMappedHHList = [];
    if (this.ssUnmapRemapForm.value.branch == '') {
      this.ssUnmapRemapForm.controls.hcouser.setValue('');
      this.userMappedHHList = [];
    }

  }

  changeHco(hcouserId) {

    this.getActiveSS(hcouserId);
    this.hcouserId = hcouserId;

    let obj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      userId: this.hcouserId
    }
    this.loader = false;
    this.ssUnmapRemapService.viewUsersMappedHhAndSsDetails(obj).subscribe((res) => {
      this.userMappedHHList = res.responseObject;
      console.log(this.userMappedHHList, 'this.userMappedHHList');
      this.loader = true;
    });

    this.userMappedHHList = [];
    this.mapUnmapDto.ssHhMapRemapDtoList = [];
    this.ssUnmapRemapForm.controls.ssByList.setValue('');
    if (this.ssUnmapRemapForm.value.branch == '') {
      this.userMappedHHList = [];
      this.mapUnmapDto.ssHhMapRemapDtoList = [];
    }

  }

  unmapRemapSS(e, hhId) {
    this.checkboxData = e.target.checked;

    if (this.checkboxData) {
      this.mapUnmapDto.dataAccessDTO = this.httpService.dataAccessDTO,

        this.mapUnmapDto.ssHhMapRemapDtoList.push({ houseHoldDetailId: hhId, remapSwasthyaSahayikaId: null });
      console.log(this.checkboxData);

    }
    else {
      var i = this.mapUnmapDto.ssHhMapRemapDtoList.findIndex(list => list.houseHoldDetailId == hhId);
      this.mapUnmapDto.ssHhMapRemapDtoList.splice(i, 1);
    }

    console.log(this.mapUnmapDto, 'mapUnmapDto.ssHhMapRemapDtoList');

  }

  saveunmapSS() {
    this.confirmationDialogService.confirm('', 'Are you sure you want to Unmap selected Household from SS')
      .then(() => this.unmapSS()
      )
      .catch(() => '');
  }

  unmapSS() {
    console.log(this.mapUnmapDto);

    this.ssUnmapRemapService.unmapAndOrRemapSsFromOneOrMoreHouseholdsOfUser(this.mapUnmapDto).subscribe((res) => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.changeHco(this.hcouserId);
      }

    })
  }

  saveRemapSS(ssList) {

    this.createModalForm();
    this.modalContent = '';
    this.modalReference = this.modalService.open(ssList, {
      windowClass: 'ssList',
    });

  }

  changess(ssId) {
    this.ssId = ssId;
    console.log(this.ssId);

  }

  saveRemapSSFromModal() {

    var ssId = this.mapUnmapDto.ssHhMapRemapDtoList;

    ssId.filter(xyz => { xyz.remapSwasthyaSahayikaId = this.ssId })

    console.log(ssId);

    this.mapUnmapDto.dataAccessDTO = this.httpService.dataAccessDTO,
      this.mapUnmapDto.ssHhMapRemapDtoList = ssId;

    console.log(this.mapUnmapDto);

    this.ssUnmapRemapService.unmapAndOrRemapSsFromOneOrMoreHouseholdsOfUser(this.mapUnmapDto).subscribe((res) => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.modalDismiss();
        this.changeHco(this.hcouserId);
      }

    })

  }

  createModalForm() {
    this.modalForm = this.fb.group({
      ss: ['', Validators.required]
    });
  }

  get s() {
    return this.modalForm.controls;
  }

  modalDismiss() {
    this.modalReference.close();
  }

  getActiveSS(hcouserId) {

    let obj = { dataAccessDTO: this.httpService.dataAccessDTO, userId: hcouserId };

    this.ssUnmapRemapService.getActiveSsListOfAnUser(obj).subscribe((res) => {
      this.ssLists = res.responseObject;
      console.log(this.ssLists, 'ssLists');

    })

  }

  ssWiseViewList(swasthyaSahayikaName) {
    console.log(swasthyaSahayikaName);

    let obj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      userId: this.hcouserId
    }
    this.loader = false;
    this.ssUnmapRemapService.viewUsersMappedHhAndSsDetails(obj).subscribe((res) => {
      this.userMappedHHList = res.responseObject;
      console.log(this.userMappedHHList, 'this.userMappedHHList');
      this.callSSfilter(swasthyaSahayikaName);
      this.loader = true;
    });

  }


  callSSfilter(swasthyaSahayikaName) {
    if (swasthyaSahayikaName == 'SS') {
      this.ssNameFilter = this.userMappedHHList?.filter((item) => item.swasthyaSahayikaName === null);
      console.log(this.ssNameFilter, 'this.nossNameFilter');
    } else {
      this.ssNameFilter = this.userMappedHHList?.filter((item) => item.swasthyaSahayikaName == swasthyaSahayikaName);
      console.log(this.ssNameFilter, 'this.ssNameFilter');
    }

    if (swasthyaSahayikaName) {
      if (this.ssNameFilter?.length == 0) {
        this.showErrorss('No matched data with' + ' ' + swasthyaSahayikaName);
        this.userMappedHHList = this.ssNameFilter;
      }
      else {
        this.userMappedHHList = this.ssNameFilter;
      }
    }

  }

  showErrorss(message) {
    this.toaster.error(message, '', {
      timeOut: 3000,
    });
  }

  showSuccess(message) {
    this.toaster.success(message, 'Unmap/ Remap SS - Household', {
      timeOut: 5000,
    });
  }

  showError(message) {
    this.toaster.error(message, 'Unmap/ Remap SS - Household', {
      timeOut: 5000,
    });
  }

}
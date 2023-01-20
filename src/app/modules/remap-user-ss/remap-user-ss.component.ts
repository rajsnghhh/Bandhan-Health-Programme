import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../core/http/http.service';
import { SidebarService } from '../shared/sidebar/sidebar.service';
import { RemapUserSsService } from './remap-user-ss.service';

@Component({
  selector: 'app-remap-user-ss',
  templateUrl: './remap-user-ss.component.html',
  styleUrls: ['./remap-user-ss.component.css']
})
export class RemapUserSsComponent implements OnInit {
  remapUserSSForm: UntypedFormGroup;
  modalForm: UntypedFormGroup;
  regionList: Array<any> = [];
  branchList: Array<any> = [];
  hcoList: Array<any> = [];
  hcoUserId: any;
  branchId: any;
  loader: boolean = true;
  modalContent: any;
  modalReference: any;
  hcoSSList: Array<any> = [];
  checkboxData: any;
  hcoModalList: Array<any> = [];
  remapSSDto = {
    dataAccessDTO: {},
    ssId: '',
    remapUserId: null,
  };
  ssNameFilter: any;
  ssLists: Array<any> = [];

  constructor(private fb: UntypedFormBuilder, private httpService: HttpService, private remapUserSSService: RemapUserSsService,
    private toaster: ToastrService, private modalService: NgbModal, private router: Router, private sidebarService: SidebarService,
    config: NgbModalConfig) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.createForm();
    let obj = { dataAccessDTO: this.httpService.dataAccessDTO }
    this.remapUserSSService.listOfRegionsOfUser(obj).subscribe((res) => {
      this.regionList = res.responseObject;
      console.log(this.regionList);
    });

    this.sidebarService.subMenuList
      .find(functionMasterId => functionMasterId.functionMasterId == 3)?.subMenuDetailList
      .find(subFunctionMasterId => subFunctionMasterId.subFunctionMasterId == 206)?.accessDetailList
      .find(accessType => accessType.accessType == 'create')?.accessType ? this.router.navigate(['/remap-user-ss']) : this.router.navigate(['/error']);
  }

  createForm() {
    this.remapUserSSForm = this.fb.group({
      region: ['', Validators.required],
      branch: ['', Validators.required],
      hco: ['', Validators.required]
    })
  }

  get f() {
    return this.remapUserSSForm.controls;
  }

  changeRegion(regionId) {
    console.log(regionId);

    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      regionId: regionId,
    };
    this.remapUserSSService.listOfBranchesOfARegion(req).subscribe((res) => {
      this.branchList = res.responseObject;
      console.log(this.branchList, 'this.branchList');

    }, (error) => {
      this.branchList = null;
    }
    );
    this.remapUserSSForm.controls.branch.setValue('');
    this.remapUserSSForm.controls.hco.setValue('');
    this.hcoSSList = [];
    this.hcoList = [];
    if (this.remapUserSSForm.value.region == '') {
      this.remapUserSSForm.controls.branch.setValue('');
      this.remapUserSSForm.controls.hco.setValue('');
      this.hcoSSList = [];
      this.hcoList = [];
    }
  }

  changeBranch(branchId) {
    this.branchId = branchId;
    console.log(this.branchId, 'branchId');

    let Dto = { dataAccessDTO: this.httpService.dataAccessDTO, branchId: this.branchId }

    this.remapUserSSService.hcoListOfBranch(Dto).subscribe((res: any) => {
      this.hcoList = res.responseObject;
      console.log(this.hcoList, 'hcoList');
    });

    this.remapUserSSForm.controls.hco.setValue('');
    this.hcoSSList = [];
    this.hcoList = [];
    if (this.remapUserSSForm.value.branch == '') {
      this.remapUserSSForm.controls.hco.setValue('');
      this.hcoList = [];
      this.hcoSSList = [];
    }
  }

  changeHco(hcoUserId) {
    this.hcoUserId = hcoUserId;
    console.log(this.hcoUserId);

    if (hcoUserId == 'NA') {
      let obj = { dataAccessDTO: this.httpService.dataAccessDTO, branchId: this.branchId }
      this.loader = false;
      console.log(obj);

      this.remapUserSSService.getListOfUnmappedSSOfABranch(obj).subscribe((res: any) => {
        this.hcoSSList = res.responseObject;
        console.log(this.hcoSSList);
        this.loader = true;
      });
    } else {
      let Dto = { dataAccessDTO: this.httpService.dataAccessDTO, userId: this.hcoUserId }
      this.loader = false;

      this.remapUserSSService.getActiveSsListOfAnUser(Dto).subscribe((res: any) => {
        this.hcoSSList = res.responseObject;
        console.log(this.hcoSSList);
        if (this.hcoSSList == null) {
          this.showError('No Data Found');
        }
        this.loader = true;
      }, error => {
        this.showError('Error');
        this.loader = true;
      });

    }

    this.hcoSSList = [];
    if (this.remapUserSSForm.value.hco == '') {
      this.hcoSSList = [];
    }
  }

  remapUserSS(e, ssID, remapSS) {
    this.checkboxData = e.target.checked;
    this.remapModalForm();

    console.log(this.checkboxData, 'this.checkboxData ', ssID);

    if (this.checkboxData) {

      this.modalContent = '';
      this.modalReference = this.modalService.open(remapSS, {
        windowClass: 'remapSS',
      });

      let Dto = { dataAccessDTO: this.httpService.dataAccessDTO, branchId: this.branchId }

      this.remapUserSSService.hcoListOfBranch(Dto).subscribe((res: any) => {
        this.hcoModalList = res.responseObject;
        console.log(this.hcoModalList, 'hcoModalList');
      });

      this.remapSSDto.dataAccessDTO = this.httpService.dataAccessDTO,
        this.remapSSDto.ssId = ssID
      console.log(this.checkboxData);

    }
    else {
      this.remapSSDto.ssId = null;
    }

    console.log(this.remapSSDto, 'remapSSDto');

  }

  remapModalForm() {
    this.modalForm = this.fb.group({
      hcouser: ['', Validators.required]
    })
  }

  get s() {
    return this.modalForm.controls;
  }

  saveRemapUserSSFromModal() {
    this.remapSSDto.remapUserId = parseInt(this.modalForm.value.hcouser);
    console.log(this.remapSSDto, 'final  this.remapSSDto');

    console.log(this.hcoUserId, ' this.hcoUserId ');
    if (this.hcoUserId == this.modalForm.value.hcouser) {
      this.showError('SS Cannot be remapped with same user');
      return;
    }
    this.remapUserSSService.remapSsWithUser(this.remapSSDto).subscribe((res) => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.modalDismiss();
        this.changeHco(this.hcoUserId);
      };
    });

  }

  modalDismiss() {
    this.modalReference.close();
    this.remapSSDto.remapUserId = null;
    var uncheck = document.getElementsByClassName("form-check-input");
    for (var i = 0; i < uncheck.length; i++) {

      if ((uncheck[i] as HTMLInputElement).checked == true) {
        (uncheck[i] as HTMLInputElement).checked = false;
        console.log((uncheck[i] as HTMLInputElement).checked);
      }

    }

  }

  getActiveSS(hcoUserId) {

    let obj = { dataAccessDTO: this.httpService.dataAccessDTO, userId: hcoUserId };

    this.remapUserSSService.getActiveSsListOfAnUser(obj).subscribe((res) => {
      this.ssLists = res.responseObject;
      console.log(this.ssLists, 'ssLists');

    })

  }

  showSuccess(message) {
    this.toaster.success(message, 'Remap-User-SS', {
      timeOut: 3000,
    });
  }

  showError(message) {
    this.toaster.error(message, 'Remap-User-SS', {
      timeOut: 3000,
    });
  }

}

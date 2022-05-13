import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../core/http/http.service';
import { ValidationService } from '../shared/services/validation.service';
import { SidebarService } from '../shared/sidebar/sidebar.service';
import { SsService } from './ss.service';

@Component({
  selector: 'app-ss-setup',
  templateUrl: './ss-setup.component.html',
  styleUrls: ['./ss-setup.component.css']
})
export class SsSetupComponent implements OnInit {
  ssForm: FormGroup;
  ssCreateForm: FormGroup;
  regionList: Array<any> = [];
  branchList: Array<any> = [];
  page = 1;
  pageSize = 6;
  p: any;
  registerSearch: any;
  ssList: Array<any> = [];
  modalContent: any;
  modalReference: any;
  branchId: any;
  // villagesOfBranch: Array<any> = [];
  blockList: Array<any> = [];
  gpList: Array<any> = [];
  villList: Array<any> = [];
  staffList: Array<any> = [];

  constructor(private fb: FormBuilder, private httpService: HttpService, private http: HttpClient,
    private sidebarService: SidebarService, private ssService: SsService, private toaster: ToastrService,
    private modalService: NgbModal, private validationService: ValidationService) { }

  ngOnInit(): void {
    this.createForm();
    this.regionList = this.sidebarService.listOfRegion;
    console.log(this.regionList);
  }

  ssModalDismiss() {
    this.modalReference?.close();
  }

  createForm() {
    this.ssForm = this.fb.group({
      region: ['', Validators.required],
      branch: ['', Validators.required]
    });
  }

  get f() {
    return this.ssForm.controls;
  }

  createSSForm() {
    this.ssCreateForm = this.fb.group({
      ssName: ['', Validators.required],
      husbandName: ['', Validators.required],
      mobile: ['', Validators.compose([Validators.minLength(10), Validators.pattern("[6789][0-9]{9}")])],
      address: ['', Validators.required],
      block: ['', Validators.required],
      gp: ['', Validators.required],
      gram: ['', Validators.required],
      staff: ['', Validators.required]
    });
  }

  get c() {
    return this.ssCreateForm.controls;
  }


  changeRegion(regionId) {
    let obj = { dataAccessDTO: { userId: this.sidebarService?.userId, userName: this.sidebarService?.loginId }, regionId: regionId };
    this.ssService.listOfBranchesOfARegion(obj).subscribe((res) => {
      this.branchList = res.responseObject;
      console.log(this.branchList);
    });
    // this.ssForm.controls.branch.setValue('');
    // this.ssForm.controls.block.setValue('');
    // this.ssForm.controls.gp.setValue('');
    // this.ssForm.controls.gram.setValue('');

    if (this.ssForm.value.region == '') {
      // this.showError('No Data Found');
      this.branchList = [];
      this.ssList = [];
      this.ssForm.controls.branch.setValue('');
    }
  }

  changeBranch(branchId) {
    this.branchId = branchId;
    let obj = { dataAccessDTO: { userId: this.sidebarService?.userId, userName: this.sidebarService?.loginId }, branchId: branchId };
    this.ssService.listOfswasthyasahayika(obj).subscribe((res) => {
      this.ssList = res.responseObject?.ssDtoList;
      console.log(this.ssList);
    });

    if (this.ssForm.value.branch == '') {
      // this.showError('No Data Found');
      this.ssList = [];
    }

  }

  createSwasthyaSahayika(createSS) {
    console.log('branchId', this.branchId);

    this.modalContent = '';
    this.modalReference = this.modalService.open(createSS, {
      windowClass: 'createMuac',
    });

    this.createSSForm();
    let obj = { dataAccessDTO: { userId: this.sidebarService.userId, userName: this.sidebarService.loginId }, branchId: this.branchId }

    this.ssService.blockGPVillOfBranch(obj).subscribe((res) => {
      this.blockList = res.responseObject;
      console.log(this.blockList, 'blockList');
    })

    let obj2 = { dataAccessDTO: { userId: this.sidebarService.userId, userName: this.sidebarService.loginId }, branchId: this.branchId }

    this.ssService.staffListOfBranch(obj2).subscribe((res) => {
      this.staffList = res.responseObject;
      console.log(this.staffList, 'staffList');
    })

  }

  changeBlock(blockId) {
    console.log(blockId);
    this.gpList = this.blockList.find(block => block.blockMasterId == blockId)?.gpDtoList;
    console.log(this.gpList);
  }

  changeGP(gpId) {
    console.log(gpId);
    this.villList = this.gpList.find(gp => gp.gpMunicipalId == gpId)?.villageDtoList;
    console.log(this.villList);
  }

  saveSSForm() {
    let postBody = {
      dataAccessDTO: {
        userId: this.sidebarService.userId,
        userName: this.sidebarService.loginId
      },
      hcoOrHcoIOrTLId: this.ssCreateForm.value.staff,
      swasthyaSahayikaDTO: {
        swasthyaSahayikaMasterId: 0,
        name: this.ssCreateForm.value.ssName,
        husbandOrGuardianName: this.ssCreateForm.value.husbandName,
        contactNumber: this.ssCreateForm.value.mobile,
        address: this.ssCreateForm.value.address,
        blockMasterId: this.ssCreateForm.value.block,
        gpMunicipalMasterId: this.ssCreateForm.value.gp,
        villageMasterId: this.ssCreateForm.value.gram,
        status: "A"
      }

    }
    console.log(postBody);

    this.ssService.ssSaveUpdate(postBody).subscribe((res) => {

      if (res.status == true) {
        this.showSuccess(res.message);
        this.ssModalDismiss();
      }
      else {
        this.showError(res.message);
      }
    })
  }

  showSuccess(message) {
    this.toaster.success(message, 'SS-Setup Register', {
      timeOut: 3000,
    });
  }

  showError(message) {
    this.toaster.error(message, 'SS-Setup Register', {
      timeOut: 3000,
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../core/http/http.service';
import { ConfirmationDialogService } from '../shared/confirmation-dialog/confirmation-dialog.service';
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
  staffWiseSSLists: Array<any> = [];
  staffIdWiseList: Array<any> = [];
  page = 1;
  pageSize = 6;
  p: any;
  ssList: Array<any> = [];
  modalContent: any;
  modalReference: any;
  branchId: any;
  blockList: Array<any> = [];
  gpList: Array<any> = [];
  villList: Array<any> = [];
  staffList: Array<any> = [];
  editssData: any;
  isDisabled: boolean = false;
  searchText: any;
  searchFullscreen: boolean;
  createMode: boolean;
  updateMode: boolean;
  deleteMode: boolean;
  role: any;

  constructor(private fb: FormBuilder, private httpService: HttpService, private sidebarService: SidebarService,
    private ssService: SsService, private toaster: ToastrService, private modalService: NgbModal,
    private validationService: ValidationService, private confirmationDialogService: ConfirmationDialogService) { }

  ngDoCheck(): void {
    this.searchFullscreen = this.validationService.val;
  }

  ngOnInit(): void {
    this.role = this.sidebarService.RoleDTOName;
    console.log(this.role);
    this.createForm();

    let obj = { dataAccessDTO: this.httpService.dataAccessDTO }
    this.ssService.listOfRegionsOfUser(obj).subscribe((res) => {
      this.regionList = res.responseObject;
      console.log(this.regionList);
    });

    this.createMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionShortName == 'Branch Setup')?.subMenuDetailList
      .find(subFunctionMasterId => subFunctionMasterId.subFunctionMasterId == 177)?.accessDetailList
      .find(accessType => accessType.accessType == 'create')?.accessType ? true : false;

    this.updateMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionShortName == 'Branch Setup')?.subMenuDetailList
      .find(subFunctionMasterId => subFunctionMasterId.subFunctionMasterId == 177)?.accessDetailList
      .find(accessType => accessType.accessType == 'update')?.accessType ? true : false;

    this.deleteMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionShortName == 'Branch Setup')?.subMenuDetailList
      .find(subFunctionMasterId => subFunctionMasterId.subFunctionMasterId == 177)?.accessDetailList
      .find(accessType => accessType.accessType == 'delete')?.accessType ? true : false;

  }

  ssModalDismiss() {
    if (this.editssData?.ssId) {
      this.editssData = []
      this.modalReference?.close();
    }
    else {
      this.modalReference?.close();
    }

  }

  createForm() {
    this.ssForm = this.fb.group({
      region: ['', Validators.required],
      branch: ['', Validators.required],
      staffWiseList: ['1', Validators.required]
    });
  }

  get f() {
    return this.ssForm.controls;
  }

  createSSForm() {
    this.ssCreateForm = this.fb.group({
      ssName: [this.editssData?.ssName ? this.editssData?.ssName : '', Validators.compose([Validators.required, Validators.minLength(3)])],
      husbandName: [this.editssData?.ssHusbandOrGuardianName ? this.editssData?.ssHusbandOrGuardianName : '', Validators.compose([Validators.required, Validators.minLength(3)])],
      contactNo: [this.editssData?.ssContactNo ? this.editssData?.ssContactNo : '', Validators.compose([Validators.minLength(10), Validators.pattern("[6789][0-9]{9}")])],
      address: [this.editssData?.ssAddress ? this.editssData?.ssAddress : '', Validators.required],
      block: [this.editssData?.blockDto?.blockId ? this.editssData?.blockDto?.blockId : '', Validators.required],
      gp: [this.editssData?.gpDto?.gpId ? this.editssData?.gpDto?.gpId : '', Validators.required],
      gram: [this.editssData?.villageDto?.villageId ? this.editssData?.villageDto?.villageId : '', Validators.required],
      staff: [this.editssData?.userDto?.userId ? this.editssData?.userDto?.userId : '', Validators.required]
    });

    if (this.editssData?.ssId) {
      this.ssCreateForm.markAllAsTouched();
    }
  }

  get c() {
    return this.ssCreateForm?.controls;
  }

  changeRegion(regionId) {
    let obj = { dataAccessDTO: this.httpService.dataAccessDTO, regionId: regionId };
    this.ssService.listOfBranchesOfARegion(obj).subscribe((res) => {
      this.branchList = res.responseObject;
      console.log(this.branchList);
    });

    this.ssForm.controls.branch.setValue('');
    this.staffWiseSSLists = [];

    if (this.ssForm.value.region == '') {
      this.branchList = [];
      this.staffWiseSSLists = [];
      this.ssForm.controls.branch.setValue('');
    }
  }

  ssLists() {
    let obj = {dataAccessDTO: this.httpService.dataAccessDTO, branchId: this.branchId };
    this.ssService.listOfswasthyasahayika(obj).subscribe((res) => {
      this.ssList = res.responseObject?.ssDtoList;
      console.log(this.ssList);

      if (this.ssForm.value.staffWiseList == 1) {
        this.staffWiseSSLists = this.ssList;
        this.ssForm.markAllAsTouched();
      }
    });

  }

  staffLists() {
    let obj = { dataAccessDTO: this.httpService.dataAccessDTO, branchId: this.branchId }

    this.ssService.staffListOfBranch(obj).subscribe((res) => {
      this.staffList = res.responseObject;
      console.log(this.staffList, 'staffList');
    })
  }

  changeBranch(branchId, a) {

    this.branchId = branchId;
    this.staffLists();
    this.ssLists();
    this.ssForm?.controls.staffWiseList.setValue('1');
    this.staffWiseSSLists = [];
    if (this.ssForm.value.branch == '') {
      this.staffWiseSSLists = [];
    }

  }

  createSwasthyaSahayika(createSS) {
    console.log(this.editssData?.ssId, 'this.editssData?.ssIdcreate');
    console.log('branchId', this.branchId);

    let obj = {dataAccessDTO: this.httpService.dataAccessDTO, branchId: this.branchId }

    this.ssService.blockGPVillOfBranch(obj).subscribe((res) => {
      this.blockList = res.responseObject;
      console.log(this.blockList, 'blockList');
      this.changeBlock(this.editssData?.blockDto?.blockId);
      this.changeGP(this.editssData?.gpDto?.gpId);
    })

    setTimeout(() => {
      this.modalContent = '';
      this.modalReference = this.modalService.open(createSS, {
        windowClass: 'createMuac',
      });
      this.createSSForm();
    }, 1000);

    let obj2 = { dataAccessDTO: this.httpService.dataAccessDTO, branchId: this.branchId }

    this.staffLists();

  }

  changeBlock(blockId) {
    console.log(blockId);
    this.gpList = this.blockList.find(block => block.blockMasterId == blockId)?.gpDtoList;
    console.log(this.gpList, 'gplist');
    this.ssCreateForm?.controls.gp.setValue('');
    this.ssCreateForm?.controls.gram.setValue('');

    if (this.ssCreateForm?.value.block == '') {
      this.ssCreateForm?.controls.gp.setValue('');
      this.ssCreateForm?.controls.gram.setValue('');
    }
  }

  changeGP(gpId) {
    console.log(gpId);
    this.villList = this.gpList?.find(gp => gp.gpMunicipalId == gpId)?.villageDtoList;
    console.log(this.villList, 'vill list');
    this.ssCreateForm?.controls.gram.setValue('');
    if (this.ssCreateForm?.value.block == '') { this.ssCreateForm?.controls.gram.setValue(''); }
  }

  saveSSForm() {

    this.ssCreateForm.value.ssName = this.validationService.firstCaps(
      this.ssCreateForm.value.ssName.trim()
    );

    this.ssCreateForm.value.husbandName = this.validationService.firstCaps(
      this.ssCreateForm.value.husbandName.trim()
    );

    if (!this.ssCreateForm.value.ssName) {
      this.showError('Please Enter Swasthya Sahayika Name');
      return;
    } else if (this.ssCreateForm.value.ssName < 3) {
      this.showError('Swasthya Sahayika Name should be at least 3 char long');
      return;
    }

    if (!this.ssCreateForm.value.husbandName) {
      this.showError('Please Enter Husband Name');
      return;
    } else if (this.ssCreateForm.value.husbandName < 3) {
      this.showError('Husband Name should be at least 3 char long');
      return;
    }

    if (this.ssCreateForm.value.contactNo?.length) {
      if (this.ssCreateForm.value.contactNo?.length != 10) {
        this.showError('Contact Number should exactly contain 10 char');
        return;
      } else {
        let startChar = parseInt(
          this.ssCreateForm.value.contactNo.substr(0, 1)
        );
        if (startChar < 6) {
          this.showError('Contact Number must start from 6-9');
          return;
        }
      }

    }

    if (!this.ssCreateForm.value.address) {
      this.showError('Please Enter Address');
      return;
    }

    if (!this.ssCreateForm.value.block) {
      this.showError('Please Select Block');
      return;
    }

    if (!this.ssCreateForm.value.gp) {
      this.showError('Please Select GP');
      return;
    }

    if (!this.ssCreateForm.value.gram) {
      this.showError('Please Select Village');
      return;
    }

    if (!this.ssCreateForm.value.staff) {
      this.showError('Please Select Staff In Charge');
      return;
    }
    console.log(this.editssData);

    let postBody = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      hcoOrHcoIOrTLId: this.ssCreateForm.value.staff,
      swasthyaSahayikaDTO: {
        swasthyaSahayikaMasterId: this.editssData?.ssId ? this.editssData?.ssId : 0,
        name: this.validationService.camelize(this.ssCreateForm.value.ssName.trim()),
        husbandOrGuardianName: this.ssCreateForm.value.husbandName,
        contactNumber: this.ssCreateForm.value.contactNo ? this.ssCreateForm.value.contactNo : null,
        address: this.ssCreateForm.value.address,
        blockMasterId: this.ssCreateForm.value.block,
        gpMunicipalMasterId: this.ssCreateForm.value.gp,
        villageMasterId: this.ssCreateForm.value.gram,
        status: "A"
      }

    }
    console.log(postBody);
    this.ssService.ssSaveUpdate(postBody).subscribe((res: any) => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.ssModalDismiss();

        this.ssLists();
        this.ssForm?.controls.staffWiseList.setValue('1');
      }
      else {
        this.showError(res.message);
      }
    })

  }

  editSSForm(item, createSS) {

    console.log(this.editssData?.ssId, 'this.editssData?.ssIdedit');

    this.editssData = item;
    console.log(this.editssData);
    this.createSwasthyaSahayika(createSS);

  }
  deleteSSForm(item, i) {
    console.log(item);

    this.confirmationDialogService.confirm('', 'Are you sure you want to delete ?')
      .then(() => this.delete(item, i)
      )

      .catch(() => '');

  }

  delete(item, i) {
    let postBody = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      hcoOrHcoIOrTLId: item.userDto.userId,
      swasthyaSahayikaDTO: {
        swasthyaSahayikaMasterId: item.ssId,
        name: item.ssName,
        husbandOrGuardianName: item.ssHusbandOrGuardianName,
        contactNumber: item.ssContactNo,
        address: item.ssAddress,
        blockMasterId: item.blockDto.blockId,
        gpMunicipalMasterId: item.gpDto.gpId,
        villageMasterId: item.villageDto.villageId,
        status: "D"
      }

    }
    console.log(postBody);
    this.ssService.ssSaveUpdate(postBody).subscribe((res: any) => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.ssList.splice(i, 1);
        this.ssLists();
      }
      else {
        this.showError(res.message);
      }
    })
  }


  showSuccess(message) {
    this.toaster.success(message, 'Create Swasthya Sahayika', {
      timeOut: 3000,
    });
  }

  showError(message) {
    this.toaster.error(message, 'Create Swasthya Sahayika', {
      timeOut: 3000,
    });
  }

  staffWiseSSList(e) {
    console.log(e.target.value);

    if (e.target.value == '') {
      this.staffWiseSSLists = [];
    }

    if (e.target.value == 1) {
      this.staffWiseSSLists = this.ssList;
    } else {
      this.staffIdWiseList = this.ssList.filter(item => item.userDto.userId == e.target.value);
      this.staffWiseSSLists = this.staffIdWiseList;
      console.log(this.staffIdWiseList);

    }

  }

}

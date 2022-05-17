import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../core/http/http.service';
import { ConfirmationDialogService } from '../shared/confirmation-dialog/confirmation-dialog.service';
import { ValidationService } from '../shared/services/validation.service';
import { SidebarService } from '../shared/sidebar/sidebar.service';
import { VillageSetupService } from './village-setup.service';

@Component({
  selector: 'app-village-setup',
  templateUrl: './village-setup.component.html',
  styleUrls: ['./village-setup.component.css']
})
export class VillageSetupComponent implements OnInit {
  villageForm: FormGroup;
  villCreateForm: FormGroup;
  stateList: Array<any> = [];
  districtList: Array<any> = [];
  blockList: Array<any> = [];
  gpList: Array<any> = [];
  villList: Array<any> = [];
  page = 1;
  pageSize = 6;
  p: any;
  GPType: any;
  blockType: any;
  districtType: any;
  stateType: any;
  villageId: any;
  editVillData: any;
  modalContent: any;
  modalReference: any;
  gpId: any;

  constructor(private fb: FormBuilder, private httpService: HttpService, private http: HttpClient,
    private villageService: VillageSetupService, private sidebarService: SidebarService, private modalService: NgbModal,
    private validationService: ValidationService, private toaster: ToastrService, private confirmationDialogService: ConfirmationDialogService) { }

  ngOnInit(): void {
    this.createForm();

    // Api call for viewing state list
    let obj = {
      dataAccessDTO: this.httpService.dataAccessDTO
    }

    this.villageService.getStateList(obj).subscribe((res) => {
      this.stateList = res.responseObject.stateList;
      console.log(this.stateList);
    })

  }

  createForm() {
    this.villageForm = this.fb.group({
      state: ['', Validators.required],
      district: ['', Validators.required],
      block: ['', Validators.required],
      gp: ['', Validators.required]
    });
  }

  get f() {
    return this.villageForm.controls;
  }

  changeState(stateId) {

    let obj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      stateId: stateId
    }

    this.villageService.getDistrictAndBlockList(obj).subscribe((res) => {
      this.districtList = res.responseObject.stateWiseDistrictList;
      console.log(this.districtList);
    })

    this.stateType = this.stateList.find(state => state.stateMasterId == stateId);
    console.log(this.stateType, 'stateType');

  }

  changeDistrict(districtId) {
    console.log(districtId);
    this.districtType = this.districtList.find(district => district.districtMasterId == districtId);
    console.log(this.districtType);

    this.blockList = this.districtList.find(block => block.districtMasterId == districtId)?.blockList;
    console.log(this.blockList);
  }

  changeBlock(blockId) {
    console.log(blockId);
    this.blockType = this.blockList.find(block => block.blockMasterId == blockId);
    console.log(this.blockType, 'blockType');

    this.gpList = this.blockList.find(gp => gp.blockMasterId == blockId)?.gpDtoList;
    console.log(this.gpList);
  }

  changeGp(GPID) {
    console.log(GPID);
    this.gpId = GPID;
    this.GPType = this.gpList.find(gp => gp.gpMunicipalId == this.gpId);
    console.log(this.GPType, 'GPType');

    let obj = { dataAccessDTO: { userId: this.sidebarService?.userId, userName: this.sidebarService?.loginId }, gpId: this.gpId };
    this.villageService.getVillageListByGpId(obj).subscribe((res) => {
      this.villList = res.responseObject;
      console.log(this.villList);
    });

  }

  createVillage(createVill) {
    console.log(this.villageId, 'this.editVillData');

    this.modalContent = '';
    this.modalReference = this.modalService.open(createVill, {
      windowClass: 'createVill',
    });
    this.createVillForm();

  }

  editVillForm(vill, createVill) {
    this.villageId = vill.villageMasterId;
    this.editVillData = vill;
    console.log(this.villageId, this.editVillData, 'villageId');
    this.createVillage(createVill);
  }

  createVillForm() {
    this.villCreateForm = this.fb.group({
      village: [this.editVillData?.villageName ? this.editVillData?.villageName : '', Validators.compose([Validators.required, Validators.minLength(3)])]
    });

    if (this.villageId) {
      this.villCreateForm.markAllAsTouched();
    }
  }

  get c() {
    return this.villCreateForm.controls;
  }

  villModalDismiss() {
    console.log(this.villageId);

    if (this.villageId) {
      this.editVillData = [];
      this.villageId = 0;
      this.modalReference?.close();
    }
    else {
      this.modalReference?.close();
    }

  }

  saveVillForm() {

    this.villCreateForm.value.village = this.validationService.firstCaps(
      this.villCreateForm.value.village.trim()
    );


    if (!this.villCreateForm.value.village) {
      this.showError('Please Enter Village Name');
      return;
    }

    let obj = {
      dataAccessDTO: {
        userId: this.sidebarService.userId,
        userName: this.sidebarService.loginId
      },
      villageCreationDto: {
        villageMasterId: this.villageId ? this.villageId : 0,
        villageName: this.villCreateForm.value.village,
        gpMunicipalId: this.gpId,
        active_flag: 'Y'
      }
    }

    console.log(obj);
    this.villageService.saveVillage(obj).subscribe((res: any) => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.villModalDismiss();
        this.changeGp(this.gpId);
      }
      else {
        this.showError(res.message);
      }
    })

  }

  deleteVillForm(vill, i) {
    console.log(vill);

    this.confirmationDialogService.confirm('', 'Are you sure you want to delete ?')
      .then(() => this.delete(vill, i)
      )

      .catch(() => '');

  }

  delete(vill, i) {
    console.log(i);


    let obj = {
      dataAccessDTO: {
        userId: this.sidebarService.userId,
        userName: this.sidebarService.loginId
      },
      villageCreationDto: {
        villageMasterId: vill.villageMasterId,
        villageName: vill.villageName,
        gpMunicipalId: this.gpId,
        active_flag: 'N'
      }
    }

    console.log(obj);
    // this.villageService.saveVillage(obj).subscribe((res: any) => {
    //   console.log(res);
    //   if (res.status == true) {
    //     this.showSuccess(res.message);
    //     this.villList.splice(i, 1);
    //     this.changeGp(this.gpId);
    //   }
    //   else {
    //     this.showError(res.message);
    //   }
    // })

  }

  showSuccess(message) {
    this.toaster.success(message, 'Create Village', {
      timeOut: 3000,
    });
  }

  showError(message) {
    this.toaster.error(message, 'Create Village', {
      timeOut: 3000,
    });
  }
}

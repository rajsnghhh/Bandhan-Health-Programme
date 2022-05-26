import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../core/http/http.service';
import { ConfirmationDialogService } from '../shared/confirmation-dialog/confirmation-dialog.service';
import { ValidationService } from '../shared/services/validation.service';
import { SidebarService } from '../shared/sidebar/sidebar.service';
import { DistrictSetupService } from './district-setup.service';

@Component({
  selector: 'app-district-setup',
  templateUrl: './district-setup.component.html',
  styleUrls: ['./district-setup.component.css']
})
export class DistrictSetupComponent implements OnInit {
  districtForm: FormGroup;
  districtCreateForm: FormGroup;
  stateList: Array<any> = [];
  districtList: Array<any> = [];
  page = 1;
  pageSize = 6;
  p: any;
  modalContent: any;
  modalReference: any;
  stateId: any;
  districtId: any;
  editDistData: any;
  stateName: any;
  createMode: boolean;
  updateMode: boolean;
  deleteMode: boolean;

  constructor(private fb: FormBuilder, private httpService: HttpService, private districtService: DistrictSetupService,
    private modalService: NgbModal, private toaster: ToastrService, private confirmationDialogService: ConfirmationDialogService,
    private validationService: ValidationService, private sidebarService: SidebarService) { }

  ngOnInit(): void {
    this.createForm();

    // Api call for viewing state list
    let obj = {
      dataAccessDTO: this.httpService.dataAccessDTO
    }

    this.districtService.getStateList(obj).subscribe((res) => {
      this.stateList = res.responseObject.stateList;
      console.log(this.stateList);
    });

    this.createMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionShortName == 'Branch Setup')?.subMenuDetailList
      .find(subFunctionMasterId => subFunctionMasterId.subFunctionMasterId == 185 || subFunctionMasterId.subFunctionMasterId == 186)?.accessDetailList
      .find(accessType => accessType.accessType == 'create')?.accessType ? true : false;

    this.updateMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionShortName == 'Branch Setup')?.subMenuDetailList
      .find(subFunctionMasterId => subFunctionMasterId.subFunctionMasterId == 185 || subFunctionMasterId.subFunctionMasterId == 186)?.accessDetailList
      .find(accessType => accessType.accessType == 'update')?.accessType ? true : false;

    this.deleteMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionShortName == 'Branch Setup')?.subMenuDetailList
      .find(subFunctionMasterId => subFunctionMasterId.subFunctionMasterId == 185 || subFunctionMasterId.subFunctionMasterId == 186)?.accessDetailList
      .find(accessType => accessType.accessType == 'delete')?.accessType ? true : false;

  }

  createForm() {
    this.districtForm = this.fb.group({
      state: ['', Validators.required]
    });
  }

  get f() {
    return this.districtForm?.controls;
  }

  createModalForm(editDistData) {

    this.districtCreateForm = this.fb.group({
      district: [editDistData?.districtName ? editDistData?.districtName : '', Validators.compose([Validators.required, Validators.minLength(3)])]
    });

    if (editDistData?.districtName) {
      this.districtCreateForm.markAllAsTouched();
    }
  }

  get c() {
    return this.districtCreateForm?.controls;
  }

  districtModalDismiss() {
    console.log(this.districtId);

    if (this.districtId) {
      this.districtId = 0;
      this.editDistData = [];
      this.modalReference?.close();
    }
    else {
      this.modalReference?.close();
    }

  }

  changeState(stateId) {
    this.stateId = stateId;
    console.log(this.stateId);
    this.stateName = this.stateList.find(state => state.stateMasterId == this.stateId)?.stateName;
    let postBody = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      stateId: this.stateId
    }
    this.districtService.getDistrictList(postBody).subscribe((res) => {
      this.districtList = res.responseObject;
      console.log(this.districtList);
    });

    if (this.districtForm.value.state == '') {
      this.districtList = [];
    }

  }

  districtModal(createDistrict, district) {
    this.districtId = district?.districtMasterId;
    this.editDistData = district;
    console.log(this.districtId, this.editDistData, 'districtMasterId', 'editDistData');


    console.log(this.stateId, 'stateId create');
    this.modalContent = '';
    this.modalReference = this.modalService.open(createDistrict, {
      windowClass: 'createDistrict',
    });
    this.createModalForm(this.editDistData);
  }

  saveDistrictForm() {

    this.districtCreateForm.value.district = this.validationService.firstCaps(
      this.districtCreateForm.value.district.trim()
    );


    this.checkDuplicateDistrict();

  }

  checkDuplicateDistrict() {
    var userInputDistrict = this.districtCreateForm.value.district;
    let existingDistrictName;

    existingDistrictName = this.districtList?.find(dist => dist.districtName == userInputDistrict)?.districtName

    console.log(existingDistrictName);


    if (userInputDistrict == existingDistrictName) {
      this.showError(userInputDistrict + ' ' + 'already exists in the State. Please retry with a different name');
      return;
    }

    if (this.districtCreateForm.valid) {
      let saveObj = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        districtDto: {
          districtMasterId: this.districtId ? this.districtId : 0,
          stateId: this.stateId,
          districtCode: this.editDistData?.districtCode ? this.editDistData?.districtCode : null,
          districtName: this.districtCreateForm.value.district,
          active_flag: "Y"
        }
      }
      console.log(saveObj);


      this.districtService.saveOrUpdateDistrict(saveObj).subscribe((res) => {
        if (res.status == true) {
          this.showSuccess(res.message);
          this.districtModalDismiss();
          this.changeState(this.stateId);
        }
        else {
          this.showError(res.message);
        }

      })

    }


  }

  deleteDistrictForm(district, i) {
    console.log(district);

    this.confirmationDialogService.confirm('', 'Are you sure you want to delete ?')
      .then(() => this.delete(district, i)
      )
      .catch(() => '');
  }

  delete(district, i) {
    let obj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      districtDto: {
        districtMasterId: district.districtMasterId,
        stateId: district.stateId,
        districtCode: district.districtCode ? district.districtCode : null,
        districtName: district.districtName,
        active_flag: 'N'
      }
    }

    console.log(obj);
    this.districtService.saveOrUpdateDistrict(obj).subscribe((res: any) => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.districtList.splice(i, 1);
        this.changeState(this.stateId);
      }
      else {
        this.showError(res.message);
      }
    })

  }

  showSuccess(message) {
    this.toaster.success(message, 'Create District', {
      timeOut: 3000,
    });
  }

  showError(message) {
    this.toaster.error(message, 'Create District', {
      timeOut: 3000,
    });
  }

}

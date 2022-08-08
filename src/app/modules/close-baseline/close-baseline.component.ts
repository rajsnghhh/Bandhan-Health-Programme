import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../core/http/http.service';
import { ConfirmationDialogService } from '../shared/confirmation-dialog/confirmation-dialog.service';
import { SidebarService } from '../shared/sidebar/sidebar.service';
import { CloseBaselineService } from './close-baseline.service';

@Component({
  selector: 'app-close-baseline',
  templateUrl: './close-baseline.component.html',
  styleUrls: ['./close-baseline.component.css']
})
export class CloseBaselineComponent implements OnInit {
  closeBaselineForm: FormGroup;
  restartModalForm: FormGroup;
  modalForm: FormGroup;
  regionList: Array<any> = [];
  branchList: Array<any> = [];
  modalContent: any;
  modalReference: any;
  tentativeDetails: any;
  modalTentiative: any;
  restartModalData: any;
  regionId: any;
  loader: boolean = true;
  page = 1;
  pageSize = 6;

  constructor(private fb: FormBuilder, private httpService: HttpService, private closeBaselineService: CloseBaselineService,
    private modalService: NgbModal, config: NgbModalConfig, private toaster: ToastrService, private router: Router,
    private confirmationDialogService: ConfirmationDialogService, private sidebarService: SidebarService) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.createForm();
    let obj = { dataAccessDTO: this.httpService.dataAccessDTO }
    this.closeBaselineService.listOfRegionsOfUser(obj).subscribe((res) => {
      this.regionList = res.responseObject;
      console.log(this.regionList);
    });

    this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionShortName == 'Household Info')?.subMenuDetailList
      .find(subFunctionShortName => subFunctionShortName.subFunctionShortName == 'Close Baseline Survey Activity for a branch')?.accessDetailList
      .find(accessType => accessType.accessType == 'create')?.accessType ? this.router.navigate(['/close-baseline']) : this.router.navigate(['/error']);
  }

  createForm() {
    this.closeBaselineForm = this.fb.group({
      region: ['', Validators.required]
    })
  }

  get f() {
    return this.closeBaselineForm.controls;
  }

  changeRegion(regionID) {
    this.regionId = regionID;
    console.log(this.regionId);

    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      regionId: regionID,
    };
    this.closeBaselineService.listOfBranchesOfARegion(req).subscribe((res) => {
      this.branchList = res.responseObject;
      console.log(this.branchList, 'this.branchList');

    }, (error) => {
      this.branchList = null;
    });

    this.branchList = [];
    if (this.closeBaselineForm.value.region == '') { this.branchList = []; }
  }

  saveTentativeEndDate(item, tentativeEndDates) {

    if (!item.branchBaseLineSurveyActualEndDate) {
      this.tentativeDetails = item;
      console.log(this.tentativeDetails);
      this.modalForms();

      this.modalContent = '';
      this.modalReference = this.modalService.open(tentativeEndDates, {
        windowClass: 'tentativeEndDates',
      });
    }

  }


  saveButtonTentativeEndDate() {

    console.log(this.tentativeDetails?.branchOpenDate, 'branchOpenDate');
    console.log(this.tentativeDetails?.branchCloseDate, 'branchCloseDate');
    console.log(this.tentativeDetails?.projectMasterDto?.projectStartDate, 'projectStartDate');
    console.log(this.tentativeDetails?.projectMasterDto?.projectEndDate, 'projectEndDate');
    console.log(this.modalForm.value.tentativeEndDate, 'tentativeEndDate');

    if ((this.tentativeDetails?.branchOpenDate) > (this.modalForm.value.tentativeEndDate)) {
      this.showError('Tentative end date can be after branch Open date');
      return;
    }

    if ((this.tentativeDetails?.branchCloseDate) < (this.modalForm.value.tentativeEndDate)) {
      this.showError('Tentative end date can not be after branch close date');
      return;
    }

    if ((this.tentativeDetails?.projectMasterDto?.projectStartDate) > (this.modalForm.value.tentativeEndDate)) {
      this.showError('Tentative end date can be after project Open date');
      return;
    }

    if ((this.tentativeDetails?.projectMasterDto?.projectEndDate) < (this.modalForm.value.tentativeEndDate)) {
      this.showError('Tentative end date can not be after project end date');
      return;
    }

    let postObj = {
      dataAccessDTO: this.httpService.dataAccessDTO, branchId: this.tentativeDetails.branchId,
      branchBaseLineSurveyEndDateMasterId: this.tentativeDetails.branchBaseLineSurveyEndDateMasterId ?
        this.tentativeDetails.branchBaseLineSurveyEndDateMasterId : 0,
      endDate: this.modalForm.value.tentativeEndDate
    }
    console.log(postObj);


    this.closeBaselineService.saveBaseLineSurveyTentativeEndDate(postObj).subscribe((res) => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.modalDismiss();
        this.changeRegion(this.regionId)
      } else {
        this.showError(res.message);
      }

    })

  }

  restartSurvey() {
    console.log(this.restartModalData, 'restartModalData');
    var data = this.restartModalData;

    console.log(data.branchOpenDate, 'branchOpenDate');
    console.log(data.branchCloseDate, 'branchCloseDate');
    console.log(data.projectMasterDto?.projectStartDate, 'projectStartDate');
    console.log(data.projectMasterDto?.projectEndDate, 'projectEndDate');
    console.log(this.restartModalForm.value.tentativeDate, 'tentativeDate');

    if ((data.branchOpenDate) > (this.restartModalForm.value.tentativeDate)) {
      this.showError('Tentative end date can be after branch Open date');
      return;
    }

    if ((data.branchCloseDate) < (this.restartModalForm.value.tentativeDate)) {
      this.showError('Tentative end date can not be after branch close date');
      return;
    }

    if ((data.projectMasterDto?.projectStartDate) > (this.restartModalForm.value.tentativeDate)) {
      this.showError('Tentative end date can be after project Open date');
      return;
    }

    if ((data.projectMasterDto?.projectEndDate) < (this.restartModalForm.value.tentativeDate)) {
      this.showError('Tentative end date can not be after project end date');
      return;
    }

    let postObj2 = {
      dataAccessDTO: this.httpService.dataAccessDTO, branchId: data.branchId,
      branchBaseLineSurveyEndDateMasterId: data.branchBaseLineSurveyEndDateMasterId,
      endDate: this.restartModalForm.value.tentativeDate
    }
    console.log(postObj2);

    this.closeBaselineService.reopenBaselineSurvey(postObj2).subscribe((res) => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.modalDismiss();
        this.changeRegion(this.regionId)
      }

    })

  }

  saveActualCloseDate(item, restartModalUI) {

    if (item.branchBaseLineSurveyTentativeEndDate) {
      console.log(item);
      if (!item.branchBaseLineSurveyActualEndDate) {
        this.confirmationDialogService.confirm('', 'Are you sure you want to end Survey')
          .then(() => this.end(item)
          )
          .catch(() => '');
      } else {
        this.confirmationDialogService.confirm('', 'Are you sure you want to restart Survey')
          .then(() => this.restart(item, restartModalUI)
          )
          .catch(() => '');
      }

    }


  }

  end(item) {
    let postObj = {
      dataAccessDTO: this.httpService.dataAccessDTO, branchId: item.branchId,
      branchBaseLineSurveyEndDateMasterId: item.branchBaseLineSurveyEndDateMasterId
    }
    console.log(postObj, 'end');
    this.loader = false;

    this.closeBaselineService.saveActualBaseLineSurveyCloseDate(postObj).subscribe((res) => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.loader = true;
        this.changeRegion(this.regionId)
      } else {
        this.showError(res.message);
        this.loader = true;
      }

    })

  }

  restart(item, restartModalUI) {
    console.log(item, 'restart');
    this.restartModalData = item;

    this.restartModal();

    this.modalContent = '';
    this.modalReference = this.modalService.open(restartModalUI, {
      windowClass: 'restartModalUI',
    });

  }

  restartModal() {
    this.restartModalForm = this.fb.group({
      tentativeDate: [this.restartModalData?.branchBaseLineSurveyTentativeEndDate ?
        this.restartModalData?.branchBaseLineSurveyTentativeEndDate : '', Validators.required]
    });

    this.restartModalForm.markAllAsTouched();

  }

  get m() {
    return this.restartModalForm.controls;
  }

  modalForms() {
    this.modalForm = this.fb.group({
      tentativeEndDate: [this.tentativeDetails?.branchBaseLineSurveyTentativeEndDate ?
        this.tentativeDetails?.branchBaseLineSurveyTentativeEndDate : '', Validators.required]
    });

    this.modalForm.markAllAsTouched();
  }

  get l() {
    return this.modalForm.controls;
  }

  restrictTypeOfDate() {
    return false;
  }

  modalDismiss() {
    this.tentativeDetails = [];
    this.modalReference.close();

  }

  showSuccess(message) {
    this.toaster.success(message, 'Close Baseline Survey', {
      timeOut: 3000,
    });
  }

  showError(message) {
    this.toaster.error(message, 'Close Baseline Survey', {
      timeOut: 3000,
    });
  }

  p(event) { }

}

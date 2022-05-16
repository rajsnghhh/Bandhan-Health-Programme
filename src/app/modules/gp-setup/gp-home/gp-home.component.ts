import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { BaselineSurveyService } from '../../baseline-survey/baseline-survey.service';
import { HttpService } from '../../core/http/http.service';
import { ConfirmationDialogService } from '../../shared/confirmation-dialog/confirmation-dialog.service';
import { GpSetupFormComponent } from '../gp-setup-form/gp-setup-form.component';

@Component({
  selector: 'app-gp-home',
  templateUrl: './gp-home.component.html',
  styleUrls: ['./gp-home.component.css']
})
export class GpHomeComponent implements OnInit {
  stateSelectForm: FormGroup;
  stateList: Array<any> = [];
  stateWiseDistrictList: Array<any> = [];
  blockList: Array<any> = [];
  blockId: any;
  gpMunicipality: Array<any> = [];

  constructor(private fb: FormBuilder, private httpService: HttpService,
    private http: HttpClient, private baselineService: BaselineSurveyService, private toaster: ToastrService,
    private confirmationDialogService: ConfirmationDialogService, public dialog: MatDialog,) { }

  ngOnInit(): void {
    this.createForm();

    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
    }
    this.http.post(`${this.httpService.baseURL}state/getListOfAllStates`, Dto).subscribe((res: any) => {
      this.stateList = res.responseObject.stateList;
    });
  }

  openCreateBlock() {
    const dialogRef = this.dialog.open(GpSetupFormComponent, {
      width: '45vw',
      maxWidth: '100vw',
      height: '345px',
      data: { editMode: false }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getListOfAllGpMunicipality(this.blockId);
    });
  }

  openEditBlock(item) {
    const dialogRef = this.dialog.open(GpSetupFormComponent, {
      width: '45vw',
      maxWidth: '100vw',
      height: '345px',
      data: { editMode: true, gpMunicipalityDetails: item }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getListOfAllGpMunicipality(this.blockId);
    });
  }

  createForm() {
    this.stateSelectForm = this.fb.group({
      state: ['', Validators.required],
      district: ['', Validators.required],
      block: ['', Validators.required],
    });
  }
  get f() {
    return this.stateSelectForm.controls;
  }

  changeState(value) {
    let stateId = value;
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      stateId: stateId
    }
    this.http.post(`${this.httpService.baseURL}district/getListOfDistrictAndBlock`, Dto).subscribe((res: any) => {
      this.stateWiseDistrictList = res.responseObject?.stateWiseDistrictList;
    });
  }

  changeDistrict(value) {
    this.blockList = this.stateWiseDistrictList.find(item => item.districtMasterId == value)?.blockList;
  }
  changeBlock(value) {
    this.blockId = value;
    this.getListOfAllGpMunicipality(this.blockId);
  }

  getListOfAllGpMunicipality(blockMasterId) {
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      blockMasterId: blockMasterId
    }
    this.http.post(`${this.httpService.baseURL}gpmunicipality/getListOfAllGpMunicipality`, Dto).subscribe((res: any) => {
      this.gpMunicipality = res.responseObject?.gpMunicipality;
    }, error => {
      console.log(error)
    });
  }

  onDelete(item) {
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      gpMunicipalityId: item.gpMunicipalityId
    }
    this.confirmationDialogService.confirm('', 'Do you want to delete ?').then(() => {
      this.http.post(`${this.httpService.baseURL}gpmunicipality/deleteGpMunicipality`, Dto).subscribe((res: any) => {
        if (res.status) {
          this.showSuccess(res.message);
          this.getListOfAllGpMunicipality(this.blockId);
        } else {
          this.showError(res.message)
        }
      })
    }).catch(() => '');
  }

  /* Show success message toaster */
  showSuccess(message) {
    this.toaster.success(message, 'Success', {
      timeOut: 3000,
    });
  }

  /* Show Error message toaster */
  showError(message) {
    this.toaster.error(message, 'Error', {
      timeOut: 3000,
    });
  }

}

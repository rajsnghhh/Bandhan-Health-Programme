import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../../core/http/http.service';
import { ValidationService } from '../../shared/services/validation.service';
import { BaselineSurveyService } from '../baseline-survey.service';

@Component({
  selector: 'app-baseline-edit',
  templateUrl: './baseline-edit.component.html',
  styleUrls: ['./baseline-edit.component.css']
})
export class BaselineEditComponent implements OnInit {
  baselineSurvey: FormGroup;
  houseHoldId: any;
  familyField: string;
  famType: any;
  totalMembers: any;
  totalFamili: any;
  householdNumber: any;
  familyStatus: any;
  tFamily: any;

  constructor(private routes: ActivatedRoute, private fb: FormBuilder, private toaster: ToastrService,
    public validationService: ValidationService, private httpService: HttpService, private baselineService: BaselineSurveyService) { }

  ngOnInit(): void {
    this.routes.queryParams.subscribe(params => {
      this.houseHoldId = params['id'];
      this.famType = params['type'];
      this.totalMembers = params['tMem'];
      this.totalFamili = params['tFam'];
      this.householdNumber = params['hhNo'];
      this.familyType(this.famType);
    });
    this.createForm();

    let postBody = {
      activeStatus: "A",
      dataAccessDTO: this.httpService.dataAccessDTO,
      id: this.houseHoldId
    }

    this.baselineService.baselineSurveyStatus(postBody).subscribe((response) => {
      this.familyStatus = response.responseObject.familyDetailRemaingStatusDTO;
      console.log(this.familyStatus);
    })

  }

  createForm() {
    this.baselineSurvey = this.fb.group({
      block: ['', Validators.required],
      gp: ['', Validators.required],
      gram: ['', Validators.required],
      swasthyaSahayika: ['', Validators.required],
      family: ['', Validators.required],
      totalFamily: ['', Validators.required],
      households: ['', Validators.required]
    });
  }

  get f() {
    return this.baselineSurvey.controls;
  }

  familyType(id) {
    this.familyField = id;
    // this.baselineSurvey.controls.households.setValue('');
  }


  restrictZero(event: any) {
    if (event.target.value.length === 0 && event.key === '0') {
      event.preventDefault();
    }
  }

  familyNo(e) {

    if (e.target.value < 2) {
      this.showError('Joint Family will be minimum two');
    }

  }

  checkFamily() {
    let totalHousehold: number = 0;
    let totalFamily: number = 0;
    let item = this.baselineSurvey.value;

    if (item.totalFamily != '' && item.totalFamily != undefined) {
      totalFamily = parseInt(item.totalFamily);
    }
    if (item.households != '' && item.households != undefined) {
      totalHousehold = parseInt(item.households)
    }

    if (totalHousehold < totalFamily && totalHousehold != totalFamily) {
      this.showError('Total Member of Household (All family) must be greater than or equal to Total Family');
    }

  }


  showSuccess(message) {
    this.toaster.success(message, 'Household Info Save', {
      timeOut: 3000,
    });
  }

  showError(message) {
    this.toaster.error(message, 'Household Info Save', {
      timeOut: 3000,
    });
  }

  backEditHousehold() {
    window.history.go(-1);
  }

  saveEditHousehold() {

    if (this.familyField == 'J') {
      this.tFamily = this.totalFamili;
    } else if (this.familyField == 'S') {
      this.tFamily = 1;
    }

    const postBody = {

      dataAccessDTO: this.httpService.dataAccessDTO,
      houseHoldDetailDTO: {
        branchDTO: {
          branchId: 15,
          branchName: "Kestopur",
        },
        branchVillageMapId: 888,
        familyDetailDTOList: [],
        familyType: this.famType,
        houseHoldNumber: this.householdNumber,
        householdDetailId: this.houseHoldId,
        numberOfFamily: this.tFamily,
        status: "A",
        swasthyaSahayikaDTO: {
          name: "ABC",
          swasthyaSahayikaId: 1
        },
        totalMembers: this.totalMembers
      }
    }

    console.log(postBody);

    if (!this.baselineSurvey.value.family) {
      this.showError('Please Select Family Type');
      return;
    }

    if (this.familyField === 'J') {
      if (!this.baselineSurvey.value.totalFamily) {
        this.showError('Please Enter Total Number of Family');
        return;
      } else if (this.baselineSurvey.value.totalFamily < 2) {
        this.showError('Joint Family will be minimum two');
        return;
      }
    }

    if (!this.baselineSurvey.value.households) {
      this.showError('Please Enter Total Member of Household (All Family)');
      return;
    }

    if (this.familyField === 'J') {
      if (this.baselineSurvey.value.households) {
        let totalHousehold: number = 0;
        let totalFamily: number = 0;
        let item = this.baselineSurvey.value;

        if (item.totalFamily != '' && item.totalFamily != undefined) {
          totalFamily = parseInt(item.totalFamily);
        }
        if (item.households != '' && item.households != undefined) {
          totalHousehold = parseInt(item.households)
        }

        if (totalHousehold < totalFamily && totalHousehold != totalFamily) {
          this.showError('Total Member of Household (All family) must be greater than or equal to Total Family');
          return;
        }
      }

    }

    if (this.totalMembers < this.familyStatus.createdFamilyMambersCount) {
      this.showError('Total Members should not be less than the created Members');
      return;
    }

    if (this.totalFamili < this.familyStatus.createdFamilyCount) {
      this.showError('Total Family should not be less than the created Family');
      return;
    }

    if (this.familyStatus.createdFamilyCount > 1 && this.famType == 'S') {
      this.showError('Family type should not be single');
      return;
    }

    this.baselineService.saveBaselineSurvey(postBody).subscribe((response: any) => {
      console.log(response);
      if (response.status == true) {
        this.showSuccess(response.message);
        this.backEditHousehold();
      }
      else {
        this.showError(response.responseObject);
      }

    })
  }



}

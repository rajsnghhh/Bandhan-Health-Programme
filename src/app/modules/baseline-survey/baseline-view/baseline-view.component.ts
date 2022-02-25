import { Component, DoCheck, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { BranchService } from '../../core/http/branch.service';
import { HttpService } from '../../core/http/http.service';
import { ConfirmationDialogService } from '../../shared/confirmation-dialog/confirmation-dialog.service';
import { ValidationService } from '../../shared/services/validation.service';
import { BaselineSurveyService } from '../baseline-survey.service';

@Component({
  selector: 'app-baseline-view',
  templateUrl: './baseline-view.component.html',
  styleUrls: ['./baseline-view.component.css']
})
export class BaselineViewComponent implements OnInit, DoCheck {
  baselineSurvey: FormGroup;
  baselineDetails: any;
  modalContent: any;
  modalReference: any;
  modalIndex: any;
  familyDetails: any;
  page = 1;
  pageSize = 6;
  familyStatus: any;
  registerSearch: String;
  villageNames: any[] = [];
  searchFullscreen: boolean;

  constructor(private fb: FormBuilder, private baselineService: BaselineSurveyService,
    private modalService: NgbModal, private toaster: ToastrService, private httpService: HttpService,
    private confirmationDialogService: ConfirmationDialogService, private route: Router, private httpBranch: BranchService,
    public validationService: ValidationService) { }

  ngDoCheck(): void {
    this.searchFullscreen = this.validationService.val;
  }

  ngOnInit(): void {
    let obj = {
      activeStatus: "A",
      dataAccessDTO: this.httpService.dataAccessDTO,
      id: 888
    }

    //API call for viewing HouseholdWithFamilyDetails
    this.baselineService.baselineViewDetail(obj).subscribe((response: any) => {
      this.baselineDetails = response.responseObject;
      console.log(this.baselineDetails);
    });

    this.createForm();

    this.httpBranch.listOfBranchUser().subscribe((res) => {
      res.responseObject.map((arr) => {
        this.villageNames.push(arr.villageName);
      })
    });

  }

  createForm() {
    this.baselineSurvey = this.fb.group({
      region: ['', Validators.required],
      branch: ['', Validators.required],
      gram: ['', Validators.required],
    });
  }

  get f() {
    return this.baselineSurvey.controls;
  }

  openModal(viewFamily, familyDetailDTOList) {
    console.log(familyDetailDTOList);
    this.familyDetails = familyDetailDTOList
    this.modalContent = '';
    this.modalReference = this.modalService.open(viewFamily, {
      windowClass: 'viewFamily',
    });
  }

  editHousehold(item) {
    console.log('edit', item);
    this.route.navigate(['/Baseline-Survey/edit'], {
      queryParams: {
        id: item.householdDetailId,
        type: item.familyType,
        tMem: item.totalMembers,
        tFam: item.numberOfFamily,
        hhNo: item.houseHoldNumber
      }
    });
  }


  deleteHousehold(item, i) {
    if (confirm('Do you want to delete household :' + item.houseHoldNumber)) {
      const post = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        houseHoldDetailDTO: {
          branchDTO: {
            branchId: 15,
            branchName: "Kestopur",
          },
          branchVillageMapId: 888,
          familyDetailDTOList: [
            {
              age: item.age,
              bbMicroGroupMembership: item.familyDetailDTOList[0].bbMicroGroupMembership,
              casteTypeMasterDTO: item.familyDetailDTOList[0].casteTypeMasterDTO,
              childDetailDTOList: item.familyDetailDTOList[0].childDetailDTOList,
              childrenBelow18: item.familyDetailDTOList[0].childrenBelow18 ? item.familyDetailDTOList[0].childrenBelow18 : 'NA',
              childrenBelow5: item.familyDetailDTOList[0].childrenBelow5 ? item.familyDetailDTOList[0].childrenBelow5 : 'NA',
              createdOn: item.familyDetailDTOList[0].createdOn,
              educationalQualificationMasterDTO: item.familyDetailDTOList[0].educationalQualificationMasterDTO,
              familyDetailId: item.familyDetailDTOList[0].familyDetailId,
              familyDetailRemaingStatusDTO: item.familyDetailDTOList[0].familyDetailRemaingStatusDTO,
              familyNumber: item.familyDetailDTOList[0].familyNumber,
              familyType: item.familyDetailDTOList[0].familyType,
              firstName: item.familyDetailDTOList[0].firstName,
              haveChild: item.familyDetailDTOList[0].haveChild,
              haveSanitaryLatrine: item.familyDetailDTOList[0].haveSanitaryLatrine,
              householdDetailsId: item.familyDetailDTOList[0].householdDetailsId,
              husbandOrGuardianName: item.familyDetailDTOList[0].husbandOrGuardianName,
              identityCardDTOList: item.familyDetailDTOList[0].identityCardDTOList,
              institutionalDelivery: item.familyDetailDTOList[0].institutionalDelivery ? 'NA' : 'NA',
              lactetingMother: item.familyDetailDTOList[0].lactetingMother,
              lastName: item.familyDetailDTOList[0].lastName,
              middleName: item.familyDetailDTOList[0].middleName,
              mobileNumber: item.familyDetailDTOList[0].mobileNumber ? item.familyDetailDTOList[0].mobileNumber : '',
              monthlyIncomeMasterDTO: item.familyDetailDTOList[0].monthlyIncomeMasterDTO,
              occupationMasterDTO: item.familyDetailDTOList[0].occupationMasterDTO,
              pregnantWoman: item.familyDetailDTOList[0].pregnantWoman,
              religionMasterDTO: item.familyDetailDTOList[0].religionMasterDTO,
              status: item.familyDetailDTOList[0].status,
              totaFamilyMemberFemales: item.familyDetailDTOList[0].totaFamilyMemberFemales,
              totaFamilyMemberMales: item.familyDetailDTOList[0].totaFamilyMemberMales,
              totaFamilyMemberSrcitizen: item.familyDetailDTOList[0].totaFamilyMemberSrcitizen,
              totalNumberOfChildren: item.familyDetailDTOList[0].totalNumberOfChildren
            }
          ],
          familyType: item.familyType,
          houseHoldNumber: item.houseHoldNumber,
          householdDetailId: item.householdDetailId,
          numberOfFamily: item.numberOfFamily,
          status: "D",
          swasthyaSahayikaDTO: {
            name: "ABC",
            swasthyaSahayikaId: 1
          },
          totalMembers: item.totalMembers
        }
      }
      this.baselineService.saveBaselineSurvey(post).subscribe((response: any) => {
        console.log(response);
        if (response.status == true) {
          this.baselineDetails.splice(i, 1);
          this.showSuccess(response.message);
        }
        else {
          this.showError(response.responseObject);
        }
      })
    }
  }

  deleteFamily(item, i) {

    let postBody = {
      activeStatus: "A",
      dataAccessDTO: this.httpService.dataAccessDTO,
      id: item.familyDetailId
    }

    this.baselineService.viewMoreFamilyDetails(postBody).subscribe((response: any) => {
      let delDetails = response.responseObject
      console.log(delDetails);
      this.delFam(delDetails, i);
    })

  }

  editFamily(item) {
    console.log(item, 'item');
    this.modalReference.close();
    this.route.navigate(['/family-info/create'], { queryParams: item, skipLocationChange: true });

  }

  delFam(delDetails, i) {


    if (this.familyDetails.length == 1) {
      this.showError('Please Delete Household');
      return;
    }

    if (confirm('Do you want to delete family: ' + delDetails.firstName + ' ' + delDetails.lastName)) {

      let post = {

        dataAccessDTO: this.httpService.dataAccessDTO,
        familyDetailDTO: {
          age: delDetails.age,
          bbMicroGroupMembership: delDetails.bbMicroGroupMembership,
          casteTypeMasterDTO: {
            casteTypeDescription: delDetails.casteTypeMasterDTO.casteTypeDescription,
            casteTypeMasterId: delDetails.casteTypeMasterDTO.casteTypeMasterId
          },
          childDetailDTOList: delDetails.childDetailDTOList,
          childrenBelow18: delDetails.childrenBelow18,
          childrenBelow5: delDetails.childrenBelow5,
          createdOn: delDetails.createdOn,
          educationalQualificationMasterDTO: {
            educationalQualificationMasterId: delDetails.educationalQualificationMasterDTO.educationalQualificationMasterId,
            qualification: delDetails.educationalQualificationMasterDTO.qualification
          },
          familyDetailId: delDetails.familyDetailId,
          familyDetailRemaingStatusDTO: {
            createdFamilyCount: delDetails.familyDetailRemaingStatusDTO.createdFamilyCount,
            createdFamilyMambersCount: delDetails.familyDetailRemaingStatusDTO.createdFamilyMambersCount,
            totalFamilyCount: delDetails.familyDetailRemaingStatusDTO.totalFamilyCount,
            totalFamilyMambersCount: delDetails.familyDetailRemaingStatusDTO.totalFamilyMambersCount
          },
          familyNumber: delDetails.familyNumber,
          familyType: delDetails.familyType,
          firstName: delDetails.firstName,
          haveChild: delDetails.haveChild,
          haveSanitaryLatrine: delDetails.haveSanitaryLatrine,
          householdDetailsId: delDetails.householdDetailsId,
          husbandOrGuardianName: delDetails.husbandOrGuardianName,
          identityCardDTOList: delDetails.identityCardDTOList,
          institutionalDelivery: delDetails.institutionalDelivery,
          lactetingMother: delDetails.lactetingMother,
          lastName: delDetails.lastName,
          middleName: delDetails.middleName,
          mobileNumber: delDetails.mobileNumber,
          monthlyIncomeMasterDTO: {
            incomeRange: delDetails.monthlyIncomeMasterDTO.incomeRange,
            monthlyIncomeMasterId: delDetails.monthlyIncomeMasterDTO.monthlyIncomeMasterId
          },
          occupationMasterDTO: {
            occupationDescription: delDetails.occupationMasterDTO.occupationDescription,
            occupationMasterId: delDetails.occupationMasterDTO.occupationMasterId
          },
          pregnantWoman: delDetails.pregnantWoman,
          religionMasterDTO: {
            religionMasterDescription: delDetails.religionMasterDTO.religionMasterDescription,
            religionMasterId: delDetails.religionMasterDTO.religionMasterId
          },
          status: "D",
          totaFamilyMemberFemales: delDetails.totaFamilyMemberFemales,
          totaFamilyMemberMales: delDetails.totaFamilyMemberMales,
          totaFamilyMemberSrcitizen: delDetails.totaFamilyMemberSrcitizen,
          totalNumberOfChildren: delDetails.totalNumberOfChildren
        }

      }

      this.baselineService.deleteFamily(post).subscribe((response: any) => {
        console.log(response);
        if (response.message == "Success") {
          this.showSucces(response.message);
          this.familyDetails.splice(i, 1);
        }
        else {
          this.showErrorr(response.responseObject);
        }

      })
    }

  }

  showSuccess(message) {
    this.toaster.success(message, 'Household Delete', {
      timeOut: 3000,
    });
  }

  showError(message) {
    this.toaster.error(message, 'Household Delete', {
      timeOut: 3000,
    });
  }

  showSucces(message) {
    this.toaster.success(message, 'Family Delete', {
      timeOut: 3000,
    });
  }

  showErrorr(message) {
    this.toaster.error(message, 'Family Delete', {
      timeOut: 3000,
    });
  }

  p(event) { }


  gotoFamily(item) {

    let postBody = {
      activeStatus: "A",
      dataAccessDTO: this.httpService.dataAccessDTO,
      id: item.householdDetailId
    }

    this.baselineService.baselineSurveyStatus(postBody).subscribe((response) => {
      this.familyStatus = response.responseObject.familyDetailRemaingStatusDTO;
      console.log(this.familyStatus);

      if (item.familyType == 'J' && this.familyStatus?.totalFamilyMambersCount - this.familyStatus?.createdFamilyMambersCount > 0 &&
        this.familyStatus?.totalFamilyCount - this.familyStatus?.createdFamilyCount > 0) {
        this.confirmationDialogService.confirm('', 'Do you want to add more family against Household No : ' + item.houseHoldNumber + ' ?')
          .then(() => this.route.navigate(['/family-info/create'], {
            queryParams: {
              id: item.householdDetailId,
              type: item.familyType,
              cFamilyCount: this.familyStatus.createdFamilyCount,
              cFamilyMembersCount: this.familyStatus.createdFamilyMambersCount,
              tFamilyCount: this.familyStatus.totalFamilyCount,
              tFamilyMembersCount: this.familyStatus.totalFamilyMambersCount
            }
          }))
          .catch(() => '');
      }

      else {
        this.showError('All Family Member or Family Count Is Already Added');
        return;
      }


    })

  }


}

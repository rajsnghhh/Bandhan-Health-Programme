import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { BranchService } from '../../core/http/branch.service';
import { HttpService } from '../../core/http/http.service';
import { ConfirmationDialogService } from '../../shared/confirmation-dialog/confirmation-dialog.service';
import { ValidationService } from '../../shared/services/validation.service';
import { CentralRegisterService } from '../central-register.service';

@Component({
  selector: 'app-central-register-view',
  templateUrl: './central-register-view.component.html',
  styleUrls: ['./central-register-view.component.css'],
})

export class CentralRegisterViewComponent implements OnInit, DoCheck {
  centralDetails: any;
  modalContent: any;
  modalReference: any;
  modalIndex: any;
  moreDetails: any;
  registerSearch: String;
  branchNames: string[];
  loader: boolean = false;
  villageNames: any[] = [];
  searchFullscreen: boolean;

  constructor(private centralService: CentralRegisterService, private http: HttpService,
    private modalService: NgbModal, private route: Router, private toaster: ToastrService,
    private confirmationDialogService: ConfirmationDialogService, private httpBranch: BranchService,
    public validationService: ValidationService
  ) { }

  ngDoCheck(): void {
    this.searchFullscreen = this.validationService.val;
  }

  ngOnInit(): void {
    let obj = {
      activeStatus: "A",
      dataAccessDTO: this.http.dataAccessDTO,
      id: 888
    }

    //API call for viewing centralRegister
    setTimeout(() => {
      this.centralService.viewCentralRegister(obj).subscribe((response: any) => {
        this.loader = true;
        this.centralDetails = response.responseObject;
        console.log(this.centralDetails);
      })
    }, 1000);


    this.httpBranch.listOfBranchUser().subscribe((res) => {
      res.responseObject.map((arr) => {
        this.villageNames.push(arr.villageName);
      })
    });
  }

  // gotoFamily(item) {

  //   this.confirmationDialogService.confirm('', 'Do you really want to add more family ?')
  //     .then(() => this.route.navigate(['/family-info/create'], {
  //       queryParams: {
  //         id: item.householdDetailsId,
  //         type: item.familyType, cFamilyCount: item.familyDetailRemaingStatusDTO.createdFamilyCount,
  //         cFamilyMembersCount: item.familyDetailRemaingStatusDTO.createdFamilyMambersCount,
  //         tFamilyCount: item.familyDetailRemaingStatusDTO.totalFamilyCount,
  //         tFamilyMembersCount: item.familyDetailRemaingStatusDTO.totalFamilyMambersCount
  //       }
  //     }))
  //     .catch(() => '');
  // }

  // if (confirm('Do you want to add more family')) {
  //   this.route.navigate(['/family-info/create', { id }]);
  // }
  // }

  getMoreDetails(id) {

    let postBody = {
      activeStatus: "A",
      dataAccessDTO: this.http.dataAccessDTO,
      id: id
    }

    //API call for viewing Details of centralRegister
    this.centralService.viewDetailsCentralRegister(postBody).subscribe((response: any) => {
      this.moreDetails = response.responseObject;
      console.log(this.moreDetails)
    })

  }

  openModal(viewDetails, id) {
    this.getMoreDetails(id);
    this.modalContent = '';
    this.modalReference = this.modalService.open(viewDetails, {
      windowClass: 'viewDetails',
    });
  }

  deleteFamily(id, i) {
    let postBody = {
      activeStatus: "A",
      dataAccessDTO: this.http.dataAccessDTO,
      id: id
    }

    this.centralService.viewDetailsCentralRegister(postBody).subscribe((response: any) => {
      let delDetails = response.responseObject;
      console.log(delDetails);
      this.delFam(delDetails, i);

    })

  }

  delFam(delDetails, i) {

    if (confirm('Do you want to delete family: ' + delDetails.firstName + ' ' + delDetails.lastName)) {

      let post = {

        dataAccessDTO: this.http.dataAccessDTO,
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


      this.centralService.deleteFamily(post).subscribe((response: any) => {
        console.log(response);
        if (response.status == true) {
          this.showSuccess(response.message);
          this.centralDetails.splice(i, 1);
        }
        else {
          this.showError(response.responseObject);
        }

      })
    }

  }

  showSuccess(message) {
    this.toaster.success(message, 'Family Delete', {
      timeOut: 3000,
    });
  }

  showError(message) {
    this.toaster.error(message, 'Family Delete', {
      timeOut: 3000,
    });
  }

}

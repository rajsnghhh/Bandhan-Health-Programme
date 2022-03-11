import { AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { BranchService } from '../../core/http/branch.service';
import { HttpService } from '../../core/http/http.service';
import { ConfirmationDialogService } from '../../shared/confirmation-dialog/confirmation-dialog.service';
import { ValidationService } from '../../shared/services/validation.service';
import { SidebarService } from '../../shared/sidebar/sidebar.service';
import { BaselineSurveyService } from '../baseline-survey.service';

@Component({
  selector: 'app-baseline-view',
  templateUrl: './baseline-view.component.html',
  styleUrls: ['./baseline-view.component.css']
})
export class BaselineViewComponent implements OnInit {
  locationForm: FormGroup;
  baselineDetails: any;
  modalContent: any;
  modalReference: any;
  modalIndex: any;
  familyDetails: any;
  page = 1;
  pageSize = 6;
  familyStatus: any;
  registerSearch: String;
  householdId: any;
  aaa: boolean;
  searchFullscreen: boolean;
  loader: boolean = false;
  regionList: Array<any> = [];
  branchList: Array<any> = [];
  villagesOfBranch: Array<any> = [];
  gpDtoList: Array<any> = [];
  villageDtoList: Array<any> = [];
  ssList: Array<any> = [];
  swasthyaSahayika: Array<any> = [];
  selectedBlock: String;
  selectedGp: String;
  branchId: any;
  regionBranchHide: boolean;
  branchVillageMapId: any;
  modalTitle: string = 'V';
  toggleBool: boolean = true;
  finalDelHH: any;
  moreDetails: any;

  constructor(private fb: FormBuilder, private baselineService: BaselineSurveyService,
    private modalService: NgbModal, private toaster: ToastrService, private httpService: HttpService,
    private confirmationDialogService: ConfirmationDialogService, private route: Router, private httpBranch: BranchService,
    public validationService: ValidationService, private sidebarService: SidebarService) { }

  ngDoCheck(): void {
    this.searchFullscreen = this.validationService.val;
  }

  ngOnInit(): void {

    this.createForm();
    this.householdFamDetails();

    let dataAccessDTO = {
      userId: this.sidebarService.userId,
      userName: this.sidebarService.loginId,
    }

    let Dto = {
      dataAccessDTO: dataAccessDTO,
      branchId: this.sidebarService.branchId
    }


    setTimeout(() => {
      if (this.sidebarService.RoleDTOName.indexOf('HCO') != -1 || this.sidebarService.RoleDTOName.indexOf('TL') != -1) {
        this.baselineService.villagesOfBranch(Dto).subscribe((res) => {
          if (res.sessionDTO.status == true) {
            this.villagesOfBranch = res.responseObject;
            console.log(this.villagesOfBranch, 'villagesOfBranch1');
          }
        })
      }
    }, 1000);


    this.regionList = this.sidebarService.listOfRegion;
    this.regionBranchHide = this.sidebarService.regionBranchHide;
  }

  changeRegion(region) {
    let regionId = this.regionList.find(
      (reg) => reg.regionName == region
    )?.regionMasterId;
    let req = {
      dataAccessDTO: {
        userId: this.sidebarService?.userId,
        userName: this.sidebarService?.loginId,
      },
      regionId: regionId,
    };
    this.loader = false;
    setTimeout(() => {
      this.baselineService.listOfBranchesOfARegion(req).subscribe(
        (res) => {
          this.loader = true;
          this.branchList = res?.responseObject;
        },
        (error) => {
          this.loader = true;
          this.branchList = null;
        }
      );
    }, 500);
    this.locationForm.controls.branch.setValue('');
    this.locationForm.controls.block.setValue('');
    this.locationForm.controls.gp.setValue('');
    this.locationForm.controls.gram.setValue('');

    if (this.locationForm.value.region == '') {
      this.showError('No Data Found');
      this.baselineDetails = [];
      this.villageDtoList = [];
      this.villagesOfBranch = [];
      this.gpDtoList=[];
    }
  }

  changeBranch(branch) {
    this.sidebarService.branchId = this.branchList?.find(bran => bran.branchName == branch)?.branchId;
    this.sidebarService.branchName = this.locationForm.get('branch').value
    let Dto = {
      dataAccessDTO: {
        userId: this.sidebarService.userId,
        userName: this.sidebarService.loginId,
      },
      branchId: this.sidebarService.branchId
    }
    this.loader = false;
    setTimeout(() => {
      this.baselineService.villagesOfBranch(Dto).subscribe((res) => {
        this.loader = true;
        this.villagesOfBranch = res.responseObject;
        console.log(this.villagesOfBranch, 'villagesOfBranch2');
      })
    }, 500);
    this.locationForm.controls.block.setValue('');
    this.locationForm.controls.gp.setValue('');
    this.locationForm.controls.gram.setValue('');

    if (this.locationForm.value.branch == '') {
      this.showError('No Data Found');
      this.baselineDetails = [];
      this.villageDtoList = [];
      this.villagesOfBranch = [];
      this.gpDtoList=[];
    }
  }

  changeBlock(blockname) {
    this.gpDtoList = this.villagesOfBranch.find(block => block.blockName == blockname)?.gpDtoList;
    this.selectedBlock = this.locationForm.get('block').value;
    this.locationForm.controls.gp.setValue('');
    this.locationForm.controls.gram.setValue('');
    if (this.locationForm.value.block == '') {
      this.showError('No Data Found');
      this.baselineDetails = [];
      this.villageDtoList = [];
      this.gpDtoList=[];
    }
  }
  changeGp(gpName) {
    this.villageDtoList = this.villagesOfBranch.find(block => block.blockName == this.selectedBlock)?.gpDtoList.find(gp => gp.name == gpName)?.villageDtoList;
    this.selectedGp = this.locationForm.get('gp').value;
    this.locationForm.controls.gram.setValue('');
    if (this.locationForm.value.gp == '') {
      this.showError('No Data Found');
      this.baselineDetails = [];
      this.villageDtoList = [];
    }
  }

  changeVillage(villagename) {
    this.branchVillageMapId = this.villagesOfBranch.find(block => block.blockName == this.selectedBlock)?.gpDtoList.find(gp => gp.name == this.selectedGp)?.villageDtoList.find(vill => vill.villageName == villagename)?.branchVillageMapId;
    this.householdFamDetails(this.branchVillageMapId);
    if (this.locationForm.value.gram == '') {
      this.showError('No Data Found');
      this.baselineDetails = [];
    }
  }

  householdFamDetails(branchVillageMapId = null) {
    let obj = {
      activeStatus: "A",
      dataAccessDTO: this.httpService.dataAccessDTO,
      id: branchVillageMapId
    }

    //API call for viewing HouseholdWithFamilyDetails
    this.loader = false;
    setTimeout(() => {
      this.baselineService.baselineViewDetail(obj).subscribe((response: any) => {
        this.loader = true;
        this.baselineDetails = response.responseObject;
        // console.log(this.baselineDetails);
      },
        (err) => {
          this.loader = true;
        });
    }, 1000);

  }

  createForm() {
    this.locationForm = this.fb.group({
      region: ['', Validators.required],
      branch: ['', Validators.required],
      block: ['', Validators.required],
      gp: ['', Validators.required],
      gram: ['', Validators.required],
    });
  }

  get f() {
    return this.locationForm.controls;
  }

  openModal(viewFamily, familyDetailDTOList, item, title, i) {

    title = this.modalTitle;
    console.log(title);

    console.log(item.householdDetailId, 'ccdd');
    this.householdId = item.householdDetailId;
    this.familyDetails = familyDetailDTOList
    this.modalContent = '';
    this.modalReference = this.modalService.open(viewFamily, {
      windowClass: 'viewFamily',
    });
  }

  familyModal(viewDetails, id) {
    this.modalDismiss();
    this.getMoreDetails(id);
    this.modalContent = '';
    this.modalReference = this.modalService.open(viewDetails, {
      windowClass: 'viewDetails',
    });
  }

  getMoreDetails(id) {

    let postBody = {
      activeStatus: "A",
      dataAccessDTO: this.httpService.dataAccessDTO,
      id: id
    }

    //API call for viewing Details of centralRegister
    this.baselineService.viewMoreFamilyDetails(postBody).subscribe((response: any) => {
      this.moreDetails = response.responseObject;
      console.log(this.moreDetails)
    })

  }

  modalDismiss() {
    console.log('true');

    if (this.modalTitle == 'D') {
      this.modalReference.close();
      let currentUrl = this.route.url;
      this.route
        .navigateByUrl('/', { skipLocationChange: true })
        .then(() => {
          this.route.navigate([currentUrl]);
        });
    }

    else {
      this.modalReference.close();
    }

  }

  editHousehold(item) {
    console.log('edit', item);
    this.route.navigate(['/Baseline-Survey/edit'], {
      queryParams: {
        id: item.householdDetailId,
        type: item.familyType,
        tMem: item.totalMembers,
        tFam: item.numberOfFamily,
        hhNo: item.houseHoldNumber,
        bName: item.branchDTO.branchName,
        bId: item.branchDTO.branchId,
        vName: this.villageDtoList.find(i => i.branchVillageMapId == item.branchVillageMapId).villageName,
        vId: item.branchVillageMapId,
        ssName: item.swasthyaSahayikaDTO.name,
        ssId: item.swasthyaSahayikaDTO.swasthyaSahayikaId
      }
    });
  }


  deleteHousehold(item, i, familyDetailDTOList, viewFamily, title) {
    this.finalDelHH = item;
    title = 'D';
    this.modalTitle = title;

    this.openModal(familyDetailDTOList, viewFamily, item, title, i);
    console.log(this.modalTitle);

  }

  deleteHH() {
    var item = this.finalDelHH;

    const post = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      houseHoldDetailDTO: {
        branchDTO: {
          branchId: this.sidebarService.branchId,
          branchName: this.sidebarService.branchName,
        },
        branchVillageMapId: this.branchVillageMapId,
        familyDetailDTOList: [
          {
            age: item.age,
            bbMicroGroupMembership: item.familyDetailDTOList[0].bbMicroGroupMembership,
            casteTypeMasterDTO: item.familyDetailDTOList[0].casteTypeMasterDTO,
            childDetailDTOList: item.familyDetailDTOList[0].childDetailDTOList ? item.familyDetailDTOList[0].childDetailDTOList : [],
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
            identityCardDTOList: item.familyDetailDTOList[0].identityCardDTOList ? item.familyDetailDTOList[0].identityCardDTOList : [],
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
          name: "",
          swasthyaSahayikaId: 0
        },
        totalMembers: item.totalMembers
      }
    }

    this.baselineService.saveBaselineSurvey(post).subscribe((response: any) => {
      console.log(response);
      if (response.status == true) {
        this.modalDismiss();
        this.showSuccess(response.message);
        this.householdFamDetails();
      }
      else {
        this.showError(response.responseObject);
      }
    })


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
    let postBody = {
      activeStatus: "A",
      dataAccessDTO: this.httpService.dataAccessDTO,
      id: this?.householdId
    }

    this.baselineService.baselineSurveyStatus(postBody).subscribe((response) => {
      this.familyStatus = response.responseObject.familyDetailRemaingStatusDTO;
      console.log(this.familyStatus);
      this.modalReference.close();
      this.route.navigate(['/family-info/create'], {
        skipLocationChange: true, queryParams: {
          id: item.householdDetailId,
          famid: item.familyDetailId,
          type: item.familyType,
          cFamilyCount: this.familyStatus?.createdFamilyCount,
          cFamilyMembersCount: this.familyStatus?.createdFamilyMambersCount,
          tFamilyCount: this.familyStatus?.totalFamilyCount,
          tFamilyMembersCount: this.familyStatus?.totalFamilyMambersCount
        }
      });
    });
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
        if (response.status == true) {
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

  changeEvent(event) {
    if (event.target.checked) {
      this.toggleBool = false;
      console.log(this.toggleBool);

    }
    else {
      this.toggleBool = true;
      console.log(this.toggleBool);
    }

  }

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

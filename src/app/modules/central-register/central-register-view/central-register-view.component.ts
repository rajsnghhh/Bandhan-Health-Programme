import { Component, DoCheck, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../../core/http/http.service';
import { ConfirmationDialogService } from '../../shared/confirmation-dialog/confirmation-dialog.service';
import { ValidationService } from '../../shared/services/validation.service';
import { SidebarService } from '../../shared/sidebar/sidebar.service';
import { CentralRegisterService } from '../central-register.service';

@Component({
  selector: 'app-central-register-view',
  templateUrl: './central-register-view.component.html',
  styleUrls: ['./central-register-view.component.css'],
})

export class CentralRegisterViewComponent implements OnInit, DoCheck {
  centralViewForm: FormGroup;
  regionList: Array<any> = [];
  branchList: Array<any> = [];
  centralDetails: Array<any> = [];
  gpList: Array<any> = [];
  villageList: Array<any> = [];
  regionBranchHide: boolean;
  villagesOfBranch: Array<any> = [];
  searchFullscreen: boolean;
  p: any;
  page = 1;
  pageSize = 6;
  villageId: any;
  regionId: any;
  branchId: any;
  blockId: any;
  gpId: any;
  localStorageData: any;
  loader: boolean = true;
  // centralDetails: any;
  // modalContent: any;
  // modalReference: any;
  // modalIndex: any;
  // moreDetails: any;
  // registerSearch: String;
  // branchNames: string[];
  // loader: boolean = false;
  // villageNames: any[] = [];
  // stateNames: any[] = [];

  constructor(private centralService: CentralRegisterService, private http: HttpService,
    private modalService: NgbModal, private route: Router, private toaster: ToastrService,
    private confirmationDialogService: ConfirmationDialogService,
    public validationService: ValidationService, private fb: FormBuilder, public sidebarService: SidebarService
  ) { }

  ngDoCheck(): void {
    this.searchFullscreen = this.validationService.val;
  }


  ngOnInit(): void {

    this.localStorageData = JSON.parse(localStorage.getItem("datas"));

    console.log(this.localStorageData, 'localstorage');

    if (this.localStorageData) {
      this.createForm();
      this.changeRegion(this.localStorageData.regionID);
      this.changeBranch(this.localStorageData.branchID);
      setTimeout(() => {
        this.changeBlock(this.localStorageData.blockID);
        this.changeGp(this.localStorageData.gpID);
        this.changeVillage(this.localStorageData.villageID);
      }, 500);
    }




    this.createForm();

    let obj = { dataAccessDTO: this.http.dataAccessDTO }
    this.centralService.listOfRegionsOfUser(obj).subscribe((res) => {
      this.regionList = res.responseObject;
      console.log(this.regionList);
    });

    let dataAccessDTO = {
      userId: this.sidebarService.userId,
      userName: this.sidebarService.loginId,
    }

    let Dto = {
      dataAccessDTO: dataAccessDTO,
      branchId: this.sidebarService.branchId
    }

    if (this.sidebarService.RoleDTOName.indexOf('HCO') != -1 || this.sidebarService.RoleDTOName.indexOf('TL') != -1) {
      this.centralService.villagesOfBranch(Dto).subscribe((res) => {
        if (res.sessionDTO.status == true) {
          this.villagesOfBranch = res.responseObject;
          console.log(this.villagesOfBranch, 'villagesOfBranch1');
        }
      })
    }

    this.regionList = this.sidebarService.listOfRegion;
    this.regionBranchHide = this.sidebarService.regionBranchHide;


    // let obj = {
    //   activeStatus: "A",
    //   dataAccessDTO: this.http.dataAccessDTO,
    //   id: 888
    // }

    // //API call for viewing centralRegister
    // this.centralService.viewCentralRegister(obj).subscribe((response: any) => {
    //   this.loader = true;
    //   this.centralDetails = response.responseObject;
    //   console.log(this.centralDetails);
    // },
    //   (err) => {
    //     this.loader = true;
    //   })


    // this.httpBranch.listOfBranchUser().subscribe((res) => {
    //   res.responseObject.map((arr) => {
    //     // this.stateNames.push(arr.stateDTO.stateName)
    //   })
    //   console.log(res.responseObject);

    // });
  }

  createForm() {
    this.centralViewForm = this.fb.group({
      region: [this.localStorageData?.regionID ? this.localStorageData?.regionID : '', Validators.required],
      branch: [this.localStorageData?.branchID ? this.localStorageData?.branchID : '', Validators.required],
      block: [this.localStorageData?.blockID ? this.localStorageData?.blockID : '', Validators.required],
      gp: [this.localStorageData?.gpID ? this.localStorageData?.gpID : '', Validators.required],
      gram: [this.localStorageData?.villageID ? this.localStorageData?.villageID : '', Validators.required],
    });

    // if (this.localStorageData){
    //   return this.centralViewForm.controls;
    // }
  }

  get f() {
    return this.centralViewForm.controls;
  }

  changeRegion(regionId) {
    this.regionId = regionId;
    console.log(this.regionId);

    let req = {
      dataAccessDTO: this.http.dataAccessDTO,
      regionId: regionId,
    };
    this.centralService.listOfBranchesOfARegion(req).subscribe((res) => {
      this.branchList = res.responseObject;
      console.log(this.branchList, 'this.branchList');

    }, (error) => {
      this.branchList = null;
    }
    );

    // setTimeout(() => {
    this.centralViewForm.controls.branch.setValue('');
    this.centralViewForm.controls.block.setValue('');
    this.centralViewForm.controls.gp.setValue('');
    this.centralViewForm.controls.gram.setValue('');
    if (!this.centralViewForm.value.region) {
      this.villageList = [];
      this.villagesOfBranch = [];
      this.gpList = [];
    }
    // }, 1000);


  }

  changeBranch(branchId) {
    this.branchId = branchId;
    console.log(this.branchId);

    let Dto = {
      dataAccessDTO: {
        userId: this.sidebarService.userId,
        userName: this.sidebarService.loginId,
      },
      branchId: branchId
    }

    this.centralService.villagesOfBranch(Dto).subscribe((res) => {
      this.villagesOfBranch = res.responseObject;
      console.log(this.villagesOfBranch, 'villagesOfBranch2');
    });

    // this.locationForm.controls.block.setValue('');
    // this.locationForm.controls.gp.setValue('');
    // this.locationForm.controls.gram.setValue('');

    // if (this.locationForm.value.branch == '') {
    //   this.showError('No Data Found');
    //   this.baselineDetails = [];
    //   this.villageDtoList = [];
    //   this.villagesOfBranch = [];
    //   this.gpDtoList = [];
    // }

  }

  changeBlock(blockId) {
    this.blockId = blockId;
    console.log(this.blockId);

    this.gpList = this.villagesOfBranch.find(block => block.blockMasterId == blockId)?.gpDtoList;
    console.log(this.gpList);

    // this.selectedBlock = this.locationForm.get('block').value;
    // this.locationForm.controls.gp.setValue('');
    // this.locationForm.controls.gram.setValue('');
    // if (this.locationForm.value.block == '') {
    //   this.showError('No Data Found');
    //   this.baselineDetails = [];
    //   this.villageDtoList = [];
    //   this.gpDtoList = [];
    // }
  }

  changeGp(gpId) {
    this.gpId = gpId;
    console.log(this.gpId);

    this.villageList = this.gpList.find(gp => gp.gpMunicipalId == gpId)?.villageDtoList;
    console.log(this.villageList);

    // this.selectedGp = this.locationForm.get('gp').value;
    // this.locationForm.controls.gram.setValue('');
    // if (this.locationForm.value.gp == '') {
    //   this.showError('No Data Found');
    //   this.baselineDetails = [];
    //   this.villageDtoList = [];
    // }
  }

  changeVillage(villageId) {
    this.villageId = villageId;
    console.log(this.villageId);
    this.loader = false;

    let obj = { dataAccessDTO: this.http.dataAccessDTO, villageId: villageId }
    this.centralService.viewCentralRegisterDetails(obj).subscribe((res) => {
      this.centralDetails = res.responseObject;
      console.log(this.centralDetails);
      this.loader = true;
    });
  }


  routePWStatus(item) {
    if (item.pregnantStatus == 'Y') {
      console.log(item);
      //window.open('http://localhost:4200/#/pw-register');
      this.route.navigate(['/pw-register'], {
        queryParams: {
          familyID: item.familyDetailId,
          status: 'viewCentral',
          regionID: this.regionId,
          branchID: this.branchId,
          blockID: this.blockId,
          gpID: this.gpId,
          villageID: this.villageId,

        }


      });


    }
  }

  ngOnDestroy() {
    localStorage.removeItem("datas");
  }


}

  // editHousehold(item) {
  //   console.log('edit', item);
  //   this.route.navigate(['/Baseline-Survey/edit'], {
  //     queryParams: {
  //       id: item.householdDetailId,
  //       type: item.familyType,
  //       tMem: item.totalMembers,
  //       tFam: item.numberOfFamily,
  //       hhNo: item.houseHoldNumber,
  //       bName: item.branchDTO.branchName,
  //       bId: item.branchDTO.branchId,
  //       blockName: this.selectedBlock,
  //       gpName: this.selectedGp,
  //       vName: this.villageDtoList.find(i => i.branchVillageMapId == item.branchVillageMapId).villageName,
  //       vId: item.branchVillageMapId,
  //       ssName: item.swasthyaSahayikaDTO.name,
  //       ssId: item.swasthyaSahayikaDTO.swasthyaSahayikaId
  //     }
  //   });
  // }





  // getMoreDetails(id) {

  //   let postBody = {
  //     activeStatus: "A",
  //     dataAccessDTO: this.http.dataAccessDTO,
  //     id: id
  //   }

  //   //API call for viewing Details of centralRegister
  //   this.centralService.viewDetailsCentralRegister(postBody).subscribe((response: any) => {
  //     this.moreDetails = response.responseObject;
  //     console.log(this.moreDetails)
  //   })

  // }

  // openModal(viewDetails, id) {
  //   this.getMoreDetails(id);
  //   this.modalContent = '';
  //   this.modalReference = this.modalService.open(viewDetails, {
  //     windowClass: 'viewDetails',
  //   });
  // }

  // deleteFamily(id, i) {
  //   let postBody = {
  //     activeStatus: "A",
  //     dataAccessDTO: this.http.dataAccessDTO,
  //     id: id
  //   }

  //   this.centralService.viewDetailsCentralRegister(postBody).subscribe((response: any) => {
  //     let delDetails = response.responseObject;
  //     console.log(delDetails);
  //     this.delFam(delDetails, i);

  //   })

  // }

  // delFam(delDetails, i) {

  //   if (confirm('Do you want to delete family: ' + delDetails.firstName + ' ' + delDetails.lastName)) {

  //     let post = {

  //       dataAccessDTO: this.http.dataAccessDTO,
  //       familyDetailDTO: {
  //         age: delDetails.age,
  //         bbMicroGroupMembership: delDetails.bbMicroGroupMembership,
  //         casteTypeMasterDTO: {
  //           casteTypeDescription: delDetails.casteTypeMasterDTO.casteTypeDescription,
  //           casteTypeMasterId: delDetails.casteTypeMasterDTO.casteTypeMasterId
  //         },
  //         childDetailDTOList: delDetails.childDetailDTOList,
  //         childrenBelow18: delDetails.childrenBelow18,
  //         childrenBelow5: delDetails.childrenBelow5,
  //         createdOn: delDetails.createdOn,
  //         educationalQualificationMasterDTO: {
  //           educationalQualificationMasterId: delDetails.educationalQualificationMasterDTO.educationalQualificationMasterId,
  //           qualification: delDetails.educationalQualificationMasterDTO.qualification
  //         },
  //         familyDetailId: delDetails.familyDetailId,
  //         familyDetailRemaingStatusDTO: {
  //           createdFamilyCount: delDetails.familyDetailRemaingStatusDTO.createdFamilyCount,
  //           createdFamilyMambersCount: delDetails.familyDetailRemaingStatusDTO.createdFamilyMambersCount,
  //           totalFamilyCount: delDetails.familyDetailRemaingStatusDTO.totalFamilyCount,
  //           totalFamilyMambersCount: delDetails.familyDetailRemaingStatusDTO.totalFamilyMambersCount
  //         },
  //         familyNumber: delDetails.familyNumber,
  //         familyType: delDetails.familyType,
  //         firstName: delDetails.firstName,
  //         haveChild: delDetails.haveChild,
  //         haveSanitaryLatrine: delDetails.haveSanitaryLatrine,
  //         householdDetailsId: delDetails.householdDetailsId,
  //         husbandOrGuardianName: delDetails.husbandOrGuardianName,
  //         identityCardDTOList: delDetails.identityCardDTOList,
  //         institutionalDelivery: delDetails.institutionalDelivery,
  //         lactetingMother: delDetails.lactetingMother,
  //         lastName: delDetails.lastName,
  //         middleName: delDetails.middleName,
  //         mobileNumber: delDetails.mobileNumber,
  //         monthlyIncomeMasterDTO: {
  //           incomeRange: delDetails.monthlyIncomeMasterDTO.incomeRange,
  //           monthlyIncomeMasterId: delDetails.monthlyIncomeMasterDTO.monthlyIncomeMasterId
  //         },
  //         occupationMasterDTO: {
  //           occupationDescription: delDetails.occupationMasterDTO.occupationDescription,
  //           occupationMasterId: delDetails.occupationMasterDTO.occupationMasterId
  //         },
  //         pregnantWoman: delDetails.pregnantWoman,
  //         religionMasterDTO: {
  //           religionMasterDescription: delDetails.religionMasterDTO.religionMasterDescription,
  //           religionMasterId: delDetails.religionMasterDTO.religionMasterId
  //         },
  //         status: "D",
  //         totaFamilyMemberFemales: delDetails.totaFamilyMemberFemales,
  //         totaFamilyMemberMales: delDetails.totaFamilyMemberMales,
  //         totaFamilyMemberSrcitizen: delDetails.totaFamilyMemberSrcitizen,
  //         totalNumberOfChildren: delDetails.totalNumberOfChildren
  //       }

  //     }

  //     this.centralService.deleteFamily(post).subscribe((response: any) => {
  //       console.log(response);
  //       if (response.status == true) {
  //         this.showSuccess(response.message);
  //         this.centralDetails.splice(i, 1);
  //       }
  //       else {
  //         this.showError(response.responseObject);
  //       }

  //     })
  //   }

  // }

  // showSuccess(message) {
  //   this.toaster.success(message, 'Family Delete', {
  //     timeOut: 3000,
  //   });
  // }

  // showError(message) {
  //   this.toaster.error(message, 'Family Delete', {
  //     timeOut: 3000,
  //   });
  // }

  // p(event) { }

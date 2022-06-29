import { Component, DoCheck, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../core/http/http.service';
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
  registerSearch: any;

  constructor(private centralService: CentralRegisterService, private http: HttpService, private route: Router,
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
      }, 1000);
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
  }

  createForm() {
    this.centralViewForm = this.fb.group({
      region: [this.localStorageData?.regionID ? this.localStorageData?.regionID : '', Validators.required],
      branch: [this.localStorageData?.branchID ? this.localStorageData?.branchID : '', Validators.required],
      block: [this.localStorageData?.blockID ? this.localStorageData?.blockID : '', Validators.required],
      gp: [this.localStorageData?.gpID ? this.localStorageData?.gpID : '', Validators.required],
      gram: [this.localStorageData?.villageID ? this.localStorageData?.villageID : '', Validators.required],
    });

    if (this.localStorageData) {
      this.centralViewForm.markAllAsTouched();
    }
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

    this.centralViewForm.controls.branch.setValue('');
    this.centralViewForm.controls.block.setValue('');
    this.centralViewForm.controls.gp.setValue('');
    this.centralViewForm.controls.gram.setValue('');
    this.villageList = [];
    this.villagesOfBranch = [];
    this.gpList = [];
    this.centralDetails = [];
    if (!this.centralViewForm.value.region) {
      this.villageList = [];
      this.villagesOfBranch = [];
      this.gpList = [];
      this.centralDetails = [];
    }

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

    this.centralViewForm.controls.block.setValue('');
    this.centralViewForm.controls.gp.setValue('');
    this.centralViewForm.controls.gram.setValue('');
    this.villageList = [];
    this.gpList = [];
    this.centralDetails = [];
    if (!this.centralViewForm.value.branch) {
      this.centralViewForm.controls.block.setValue('');
      this.centralViewForm.controls.gp.setValue('');
      this.centralViewForm.controls.gram.setValue('');
      this.villageList = [];
      this.villagesOfBranch = [];
      this.gpList = [];
      this.centralDetails = [];
    }

  }

  changeBlock(blockId) {
    this.blockId = blockId;
    console.log(this.blockId);

    this.gpList = this.villagesOfBranch.find(block => block.blockMasterId == blockId)?.gpDtoList;
    console.log(this.gpList);

    this.centralViewForm.controls.gp.setValue('');
    this.centralViewForm.controls.gram.setValue('');
    this.centralDetails = [];
    if (!this.centralViewForm.value.block) {
      this.centralViewForm.controls.gp.setValue('');
      this.centralViewForm.controls.gram.setValue('');
      this.villageList = [];
      this.centralDetails = [];

    }

  }

  changeGp(gpId) {
    this.gpId = gpId;
    console.log(this.gpId);

    this.villageList = this.gpList.find(gp => gp.gpMunicipalId == gpId)?.villageDtoList;
    console.log(this.villageList);

    this.centralViewForm.controls.gram.setValue('');
    this.centralDetails = [];
    if (!this.centralViewForm.value.gp) {
      this.centralViewForm.controls.gram.setValue('');
      this.centralDetails = [];
    }
  }

  changeVillage(villageId) {
    this.villageId = villageId;
    console.log(this.villageId);
    this.loader = false;
    if (!this.centralViewForm.value.gram) {
      this.loader = true;
    }

    let obj = { dataAccessDTO: this.http.dataAccessDTO, villageId: villageId }
    this.centralService.viewCentralRegisterDetails(obj).subscribe((res) => {
      this.centralDetails = res.responseObject;
      console.log(this.centralDetails);
      this.loader = true;
    });

    this.centralDetails = [];
    if (!this.centralViewForm.value.gram) {
      this.centralDetails = [];
    }
  }

  routePWStatus(PWitem) {
    if (PWitem.pregnantStatus == 'Y') {
      console.log(PWitem);
      //window.open('http://localhost:4200/#/pw-register');
      this.route.navigate(['/pw-register'], {
        queryParams: {
          familyID: PWitem.familyDetailId,
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

  routeLMStatus(LMitem) {
    if (LMitem.lactatingWomanStatus == 'Y') {
      console.log(LMitem);
      this.route.navigate(['/lmr'], {
        queryParams: {
          familyID: LMitem.familyDetailId,
          status: 'viewCentralLM',
          regionID: this.regionId,
          branchID: this.branchId,
          blockID: this.blockId,
          gpID: this.gpId,
          villageID: this.villageId,
        }
      });
    }
  }

  routePEMStatus(PEMitem) {
    if (PEMitem.pemStatus == 'RED' || PEMitem.pemStatus == 'GREEN' || PEMitem.pemStatus == 'YELLOW') {
      console.log(PEMitem);
      this.route.navigate(['/pem-register/create'], {
        queryParams: {
          familyID: PEMitem.familyDetailId,
          status: 'viewCentralPEM',
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

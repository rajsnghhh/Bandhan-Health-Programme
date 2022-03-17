import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaselineSurveyService } from '../baseline-survey/baseline-survey.service';
import { HttpService } from '../core/http/http.service';
import { SidebarService } from '../shared/sidebar/sidebar.service';
import { MatDialog } from '@angular/material/dialog';
import { ViewMuaclistComponent } from './view-muaclist/view-muaclist.component';
import { AddChildMuacComponent } from './add-child-muac/add-child-muac.component';
import { AcrService } from './acr.service';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-all-child-register',
  templateUrl: './all-child-register.component.html',
  styleUrls: ['./all-child-register.component.css']
})
export class AllChildRegisterComponent implements OnInit {

  childrenBetween6And59Months: Array<any> = [];
  childrenWRTPsdOrBoD: Array<any> = [];
  ineligibleChildren: Array<any> = [];
  villageMasterId: any;
  childDetailId: any;

  locationForm: FormGroup;
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
  index: number = 0;

  constructor(private httpService: HttpService, private fb: FormBuilder, private sidebarService: SidebarService
    , private baselineService: BaselineSurveyService, public dialog: MatDialog, public acrService: AcrService,) { }

  ngOnInit(): void {
    this.createForm();
    this.getChildrenList();

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
    }, 500);

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
    setTimeout(() => {
      this.baselineService.listOfBranchesOfARegion(req).subscribe(
        (res) => {
          this.branchList = res?.responseObject;
        },
        (error) => {
          this.branchList = null;
        }
      );
    }, 500);
    this.locationForm.controls.branch.setValue('');
    this.locationForm.controls.block.setValue('');
    this.locationForm.controls.gp.setValue('');
    this.locationForm.controls.gram.setValue('');
    if (this.locationForm.value.region == '') {
      this.childrenBetween6And59Months = [];
      this.childrenWRTPsdOrBoD = [];
      this.ineligibleChildren = [];
      this.villagesOfBranch = [];
      this.gpDtoList = [];
      this.villageDtoList = [];
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
    setTimeout(() => {
      this.baselineService.villagesOfBranch(Dto).subscribe((res) => {
        this.villagesOfBranch = res.responseObject;
        console.log(this.villagesOfBranch, 'villagesOfBranch2');
      })
    }, 500);
    this.locationForm.controls.block.setValue('');
    this.locationForm.controls.gp.setValue('');
    this.locationForm.controls.gram.setValue('');
    if (this.locationForm.value.branch == '') {
      this.childrenBetween6And59Months = [];
      this.childrenWRTPsdOrBoD = [];
      this.ineligibleChildren = [];
      this.villagesOfBranch = [];
      this.gpDtoList = [];
      this.villageDtoList = [];
    }
  }

  changeBlock(blockname) {
    this.gpDtoList = this.villagesOfBranch.find(block => block.blockName == blockname)?.gpDtoList;
    this.selectedBlock = this.locationForm.get('block').value;
    this.locationForm.controls.gp.setValue('');
    this.locationForm.controls.gram.setValue('');
    if (this.locationForm.value.block == '') {
      this.childrenBetween6And59Months = [];
      this.childrenWRTPsdOrBoD = [];
      this.ineligibleChildren = [];
      this.gpDtoList = [];
      this.villageDtoList = [];
    }
  }
  changeGp(gpName) {
    this.villageDtoList = this.villagesOfBranch.find(block => block.blockName == this.selectedBlock)?.gpDtoList.find(gp => gp.name == gpName)?.villageDtoList;
    this.selectedGp = this.locationForm.get('gp').value;
    this.locationForm.controls.gram.setValue('');
    if (this.locationForm.value.gp == '') {
      this.childrenBetween6And59Months = [];
      this.childrenWRTPsdOrBoD = [];
      this.ineligibleChildren = [];
      this.villageDtoList = [];
    }
  }

  changeVillage(villagename) {
    this.villageMasterId = this.villagesOfBranch.find(block => block.blockName == this.selectedBlock)?.gpDtoList.find(gp => gp.name == this.selectedGp)?.villageDtoList.find(vill => vill.villageName == villagename)?.villageMasterId;
    this.getChildrenList(this.villageMasterId);
    if (this.locationForm.value.gram == '') {
      this.childrenBetween6And59Months = [];
      this.childrenWRTPsdOrBoD = [];
      this.ineligibleChildren = [];
    }
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

  getChildrenList(villageMasterId = null) {
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      villageMasterId: villageMasterId
    }
    this.httpService.getChildrenRegister(req).subscribe((res) => {
      this.childrenBetween6And59Months = res.responseObject?.eligibleChildren?.childrenBetween6And59Months;
      this.childrenWRTPsdOrBoD = res.responseObject?.eligibleChildren?.childrenWRTPsdOrBoD;
      this.ineligibleChildren = res.responseObject?.ineligibleChildren;
    })
  }
  tabChanged(tabChangeEvent: MatTabChangeEvent) {
    this.index = tabChangeEvent.index;
  }

  openCreateChild(index): void {
    this.acrService.editMode = true;
    const dialogRef = this.dialog.open(AddChildMuacComponent, {
      width: '500px',
      height: '450px',
      data: { childId: (this.index == 0) ? this.childrenWRTPsdOrBoD[index].childDetailId : this.childrenBetween6And59Months[index].childDetailId }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getChildrenList(this.villageMasterId);
      //this.viewMuaclistComponent.viewMuacChildList();
    });
  }

  openViewChild(index) {
    const dialogRef = this.dialog.open(ViewMuaclistComponent, {
      width: '700px',
      height: '400px',
      data: { childId: (this.index == 0) ? this.childrenWRTPsdOrBoD[index].childDetailId : this.childrenBetween6And59Months[index].childDetailId }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getChildrenList(this.villageMasterId);
    });
  }
}

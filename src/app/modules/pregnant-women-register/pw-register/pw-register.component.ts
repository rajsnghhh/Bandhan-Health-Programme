import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { BaselineSurveyService } from '../../baseline-survey/baseline-survey.service';
import { HttpService } from '../../core/http/http.service';
import { SidebarService } from '../../shared/sidebar/sidebar.service';
import { PwStatusComponent } from '../pw-status/pw-status.component';
import { PwViewComponent } from '../pw-view/pw-view.component';
import { SinglePwListComponent } from '../single-pw-list/single-pw-list.component';

@Component({
  selector: 'app-pw-register',
  templateUrl: './pw-register.component.html',
  styleUrls: ['./pw-register.component.css']
})
export class PwRegisterComponent implements OnInit {

  allPregnantWomenList: Array<any> = [];
  nonPregnantWomenList: Array<any> = [];

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
  editMode: boolean;
  branchVillageMapId: any;
  villageMasterId: any;
  index: number = 0;
  acrSearch: string;
  searchFullscreen: boolean;
  pwSearch: string | number;
  page = 1;
  pageSize = 6;

  constructor(private httpService: HttpService, private fb: FormBuilder, private sidebarService: SidebarService,
    private baselineService: BaselineSurveyService, public dialog: MatDialog,) { }

  ngOnInit(): void {
    this.createForm();

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

  tabChanged(tabChangeEvent: MatTabChangeEvent) {
    this.index = tabChangeEvent.index;
  }
  p(event) { }
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

      this.gpDtoList = [];
      this.villageDtoList = [];
    }
  }
  changeGp(gpName) {
    this.villageDtoList = this.villagesOfBranch.find(block => block.blockName == this.selectedBlock)?.gpDtoList.find(gp => gp.name == gpName)?.villageDtoList;
    this.selectedGp = this.locationForm.get('gp').value;
    this.locationForm.controls.gram.setValue('');
    if (this.locationForm.value.gp == '') {

      this.villageDtoList = [];
    }
  }

  changeVillage(villagename) {
    this.villageMasterId = this.villagesOfBranch.find(block => block.blockName == this.selectedBlock)?.gpDtoList.find(gp => gp.name == this.selectedGp)?.villageDtoList.find(vill => vill.villageName == villagename)?.villageMasterId;
    this.getPregnantWomenList(this.villageMasterId);
    if (this.locationForm.value.gram == '') {

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

  /* get the all Pregnant Women List */
  getPregnantWomenList(villageMasterId = null) {
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      villageMasterId: villageMasterId
    }
    this.httpService.getPregnantWomenList(req).subscribe((res) => {
      this.allPregnantWomenList = res.responseObject.pregnantWomanList;
      this.nonPregnantWomenList = res.responseObject.nonPregnantWomanList;
    })
  }

  openPwList(i) {
    const dialogRef = this.dialog.open(SinglePwListComponent, {
      width: '1000px',
      height: '550px',
      data: {
        index: i,
        singlePregnantWomenList: this.allPregnantWomenList[i],
        villageMasterId: this.villageMasterId
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getPregnantWomenList(this.villageMasterId)
    });
  }

  openPwStatus(i) {
    const dialogRef = this.dialog.open(PwStatusComponent, {
      width: '500px',
      height: '270px',
      data: { nonPregnantWomenList: this.nonPregnantWomenList[i] }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getPregnantWomenList(this.villageMasterId);
    });
  }
}

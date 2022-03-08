import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SidebarService } from '../../shared/sidebar/sidebar.service';
import { BaselineSurveyService } from '../baseline-survey.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
})
export class LocationComponent implements OnInit, OnDestroy {
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
  loader: boolean = true;

  constructor(
    private fb: FormBuilder,
    private sidebarService: SidebarService,
    private baselineService: BaselineSurveyService
  ) { }

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

    this.baselineService.villagesOfBranch(Dto).subscribe((res) => {
      this.villagesOfBranch = res.responseObject;
      console.log(this.villagesOfBranch, 'villagesOfBranch1');
    })
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
    this.locationForm.get('branch').reset();
    this.locationForm.get('block').reset();
    this.locationForm.get('gp').reset();
    this.locationForm.get('gram').reset();
    this.locationForm.get('swasthyaSahayika').reset();
  }

  changeBranch(branch) {
    this.sidebarService.branchId1 = this.branchList?.find(bran => bran.branchName == branch)?.branchId;
    this.sidebarService.branchName = this.locationForm.get('branch').value
    let Dto = {
      dataAccessDTO: {
        userId: this.sidebarService.userId,
        userName: this.sidebarService.loginId,
      },
      branchId: this.sidebarService.branchId1
    }
    this.loader = false;
    setTimeout(() => {
      this.baselineService.villagesOfBranch(Dto).subscribe((res) => {
        this.loader = true;
        this.villagesOfBranch = res.responseObject;
        console.log(this.villagesOfBranch, 'villagesOfBranch2');
      })
    }, 500);
    this.locationForm.get('block').reset();
    this.locationForm.get('gp').reset();
    this.locationForm.get('gram').reset();
    this.locationForm.get('swasthyaSahayika').reset();
  }

  changeBlock(blockname) {
    this.gpDtoList = this.villagesOfBranch.find(block => block.blockName == blockname)?.gpDtoList;
    this.selectedBlock = this.locationForm.get('block').value;
    this.locationForm.get('gp').reset();
    this.locationForm.get('gram').reset();
    this.locationForm.get('swasthyaSahayika').reset();
  }
  changeGp(gpName) {
    this.villageDtoList = this.villagesOfBranch.find(block => block.blockName == this.selectedBlock)?.gpDtoList.find(gp => gp.name == gpName)?.villageDtoList;
    this.selectedGp = this.locationForm.get('gp').value;
    this.locationForm.get('gram').reset();
    this.locationForm.get('swasthyaSahayika').reset();
  }
  changeVillage(villagename) {
    let villId = this.villagesOfBranch.find(block => block.blockName == this.selectedBlock)?.gpDtoList.find(gp => gp.name == this.selectedGp)?.villageDtoList.find(vill => vill.villageName == villagename)?.villageMasterId;
    this.sidebarService.branchVillageMapId = this.villagesOfBranch.find(block => block.blockName == this.selectedBlock)?.gpDtoList.find(gp => gp.name == this.selectedGp)?.villageDtoList.find(vill => vill.villageName == villagename)?.branchVillageMapId
    let req = {
      dataAccessDTO: {
        userId: this.sidebarService.userId,
        userName: this.sidebarService.loginId,
      },
      villageId: villId,
      userId: this.sidebarService.userId
    }
    this.loader = false;
    setTimeout(() => {
      this.baselineService.ssVillageWiseList(req).subscribe((res) => {
        console.log(res);
        this.loader = true;
        this.swasthyaSahayika = res.responseObject;
      }, (error) => {
        this.loader = true;
        this.swasthyaSahayika = null;
      })
    }, 500);
  }
  changeSS(ss) {
    this.sidebarService.swasthyaSahayikaId = ss;
    this.sidebarService.swasthyaSahayikaName = this.swasthyaSahayika.find(i => i.swasthyaSahayikaId == ss)?.swasthyaSahayikaName
  }
  createForm() {
    this.locationForm = this.fb.group({
      region: ['', Validators.required],
      branch: ['', Validators.required],
      block: ['', Validators.required],
      gp: ['', Validators.required],
      gram: ['', Validators.required],
      swasthyaSahayika: ['', Validators.required],
    });
  }

  get f() {
    return this.locationForm.controls;
  }

  ngOnDestroy(): void {
    console.log(this.locationForm.value, 'destroy');
  }
}

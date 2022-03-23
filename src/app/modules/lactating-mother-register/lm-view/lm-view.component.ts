import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BaselineSurveyService } from '../../baseline-survey/baseline-survey.service';
import { HttpService } from '../../core/http/http.service';
import { SidebarService } from '../../shared/sidebar/sidebar.service';
import { AddLmChildComponent } from '../add-lm-child/add-lm-child.component';

@Component({
  selector: 'app-lm-view',
  templateUrl: './lm-view.component.html',
  styleUrls: ['./lm-view.component.css'],
  providers: [DatePipe]
})
export class LmViewComponent implements OnInit {

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
  villageMasterId: any;
  lactatingmotherregister: Array<any> = [];
  searchFullscreen: boolean;
  lmrSearch: string | number;
  loader: boolean = false;


  constructor(private httpService: HttpService, private fb: FormBuilder, private sidebarService: SidebarService
    , private baselineService: BaselineSurveyService, public dialog: MatDialog, public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.createForm();
    this.getLactatingMotherList();

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
    this.getLactatingMotherList(this.villageMasterId);
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

  getLactatingMotherList(villageMasterId = null) {
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      villageMasterId: villageMasterId
    }
    this.loader = false;
    this.httpService.getLactatingMotherRegister(req).subscribe((res) => {
      this.lactatingmotherregister = res.responseObject?.childrenBetween0And6Months.concat(res.responseObject?.childrenBetween6And12Months, res.responseObject?.childrenBetween12And18Months, res.responseObject?.childrenBetween18And24Months);
      this.loader = true;
    })
  }

  openAddLmChild(index): void {
    //console.log(this.getAge(this.lactatingmotherregister[index].dob.replace(/-/g, "/")));
    // console.log(this.getAge(this.lactatingmotherregister[index].childAge));

    const dialogRef = this.dialog.open(AddLmChildComponent, {
      width: '1000px',
      height: '450px',
      data: {
        editMode: false,
        muacRegisterId: this.lactatingmotherregister[index].muacRegisterId,
        childId: this.lactatingmotherregister[index].childDetailId,
        childAge: this.lactatingmotherregister[index].childAge
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getLactatingMotherList(this.villageMasterId);
    });
  }

  openEditLmChild(index) {
    console.log(this.lactatingmotherregister[index]);

    const dialogRef = this.dialog.open(AddLmChildComponent, {
      width: '1000px',
      height: '450px',
      data: {
        editMode: true,
        muacRegisterId: this.lactatingmotherregister[index].muacRegisterId,
        childId: this.lactatingmotherregister[index].childDetailId,
        placeOfDelivery: this.lactatingmotherregister[index].childBasicStatusDto.placeOfDelivery,
        birthWeight: this.lactatingmotherregister[index].childBasicStatusDto.birthWeight,
        firstVisitDate: this.lactatingmotherregister[index].childBasicStatusDto.firstVisitDate,
        secondVisitDate: this.lactatingmotherregister[index].childBasicStatusDto.secondVisitDate,
        ebfUpto6Complete: this.lactatingmotherregister[index].childBasicStatusDto.ebfUpto6Complete,
        primaryImmunizationUpto12Completed: this.lactatingmotherregister[index].childBasicStatusDto.primaryImmunizationUpto12Completed,
        ebfUpto12Complete: this.lactatingmotherregister[index].childBasicStatusDto.ebfUpto12Complete,
        ebfUpto18Complete: this.lactatingmotherregister[index].childBasicStatusDto.ebfUpto18Complete,
        primaryImmunizationUpto24Completed: this.lactatingmotherregister[index].childBasicStatusDto.primaryImmunizationUpto24Completed,
        ebfUpto24Complete: this.lactatingmotherregister[index].childBasicStatusDto.ebfUpto24Complete,
        childAge: this.lactatingmotherregister[index].childAge,
        muac: this.lactatingmotherregister[index].muac,
        height: this.lactatingmotherregister[index].height,
        weight: this.lactatingmotherregister[index].weight,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getLactatingMotherList(this.villageMasterId);
    });
  }

  getAge(dateString) {
    // const oneDay = 24 * 60 * 60 * 1000;
    // let daysInMonth = 30.436875;
    // let today = new Date();
    // let birthDate = new Date(dateString);
    // let year = today.getFullYear() - birthDate.getFullYear();
    // let month = today.getMonth() - birthDate.getMonth();
    // const start = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
    // const end = Date.UTC(birthDate.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    // let a = start - end;
    // let days = a / oneDay
    // return days;

    // let y = dateString.indexOf("year");
    // let year = parseInt(dateString.slice(0, y - 1));

    // let m = dateString.indexOf("r");
    // let m1 = dateString.indexOf("month");
    // let month = parseInt(dateString.slice(m + 2, m1 - 1));

    // let d = dateString.indexOf("h");
    // let d1 = dateString.indexOf("day");
    // let days = parseInt(dateString.slice(d + 2, d1 - 1));

    // console.log(year, month, days)
  }
}

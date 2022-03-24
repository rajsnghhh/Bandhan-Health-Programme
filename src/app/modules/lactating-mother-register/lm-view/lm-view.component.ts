import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
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


  constructor(private httpService: HttpService, private fb: FormBuilder, private sidebarService: SidebarService, private http: HttpClient,
    private baselineService: BaselineSurveyService, public dialog: MatDialog, public datepipe: DatePipe) { }

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
    }, error => {
      this.loader = true;
    }
    )
  }

  ViewLmChild(index) {
    const dialogRef = this.dialog.open(AddLmChildComponent, {
      width: '1000px',
      height: '550px',
      data: {
        viewMode: true,
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
    });
  }

  openAddEditLmChild(index) {
    console.log(this.lactatingmotherregister[index]);
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      childId: this.lactatingmotherregister[index].childDetailId,
    }
    this.http.post(`${this.httpService.baseURL}lactatingmotherregister/childWiselactatingmotherMUACList`, Dto).subscribe((res: any) => {
      if (res.responseObject.length == 0 && (this.lactatingmotherregister[index].childBasicStatusDto.placeOfDelivery ==
        this.lactatingmotherregister[index].childBasicStatusDto.birthWeight)) {
        const dialogRef = this.dialog.open(AddLmChildComponent, {
          width: '1000px',
          height: '550px',
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
      } else {
        const dialogRef = this.dialog.open(AddLmChildComponent, {
          width: '1000px',
          height: '550px',
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
    })
  }

}

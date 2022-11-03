import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../core/http/http.service';
import { SidebarService } from '../../shared/sidebar/sidebar.service';
import { BaselineSurveyService } from '../baseline-survey.service';
import CryptoJS from 'crypto-js';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
})
export class LocationComponent implements OnInit {
  locationForm: FormGroup;
  regionList: Array<any> = [];
  branchList: Array<any> = [];
  villagesOfBranch: Array<any> = [];
  gpDtoList: Array<any> = [];
  villageDtoList: Array<any> = [];
  ssList: Array<any> = [];
  swasthyaSahayika: Array<any> = [];
  selectedBlock: String;
  selectedDonor: String;
  selectedGp: String;
  branchId: any;
  regionBranchHide: boolean;
  loader: boolean = true;
  branchEnddateDetailDTO: any;
  timeToTentativeEndDate: any;

  constructor(
    private http: HttpClient,
    private httpService: HttpService,
    private fb: FormBuilder,
    private sidebarService: SidebarService,
    private baselineService: BaselineSurveyService
  ) { }

  ngOnInit(): void {
    this.createForm();

    this.sidebarService.checkRoledetailDTO().then((res: any) => {
      if (res.regionBranchHide) {
        this.regionList = res.region;
        this.regionBranchHide = res.regionBranchHide;
      } else {
        let Dto = {
          dataAccessDTO: res.dataAccessDTO,
          branchId: res.branchId
        }
        // let user = JSON.parse(localStorage.getItem('user'));
        const password = JSON.parse(localStorage.getItem('cachedData'));
        const bytes = CryptoJS.AES.decrypt(password, 'encryptionCode');
        let objs = {
          deviceType: "W",
          loginId: this.sidebarService.loginId,
          password: bytes.toString(CryptoJS.enc.Utf8)
        }
        this.baselineService.login(objs).subscribe((res: any) => {
          console.log(res.responseObject.branchBaselineSurveyEnddateDetailDTO, 'forclosebaselinedata');

          // console.log(user.responseObject.branchBaselineSurveyEnddateDetailDTO, 'branchBaselineSurveyEnddateDetailDTO');
          if (res.responseObject.branchBaselineSurveyEnddateDetailDTO?.actualEndDate != null) {
            console.log(true, '1');
            this.baselineService.timeToTentativeEndDate = res.responseObject.branchBaselineSurveyEnddateDetailDTO?.timeToActualEndDate;
          } else if (res.responseObject.branchBaselineSurveyEnddateDetailDTO?.timeToTentativeEndDate != null) {
            console.log(true, '2');
            this.baselineService.timeToTentativeEndDate = res.responseObject.branchBaselineSurveyEnddateDetailDTO?.timeToTentativeEndDate;
          } else {
            this.baselineService.timeToTentativeEndDate = '';
          }
        });
        this.regionBranchHide = res.regionBranchHide;
        this.http.post(`${this.sidebarService.baseURL}village/getVillagesOfABranch`, Dto).subscribe((res: any) => {
          if (res.sessionDTO.status == true) {
            this.villagesOfBranch = res.responseObject;
          }
        })
      }
    });

  }

  changeRegion(region) {
    let regionId = this.regionList.find(
      (reg) => reg.regionName == region
    )?.regionMasterId;


    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      regionId: regionId,
    };
    this.baselineService.listOfBranchesOfARegion(req).subscribe(
      (res) => {
        this.branchList = res?.responseObject;
        console.log(this.branchList);

      },
      (error) => {
        this.branchList = null;
      }
    );
    this.locationForm.controls.branch.setValue('');
    this.locationForm.controls.block.setValue('');
    this.locationForm.controls.gp.setValue('');
    this.locationForm.controls.gram.setValue('');
    this.baselineService.timeToTentativeEndDate = '';
    this.locationForm.controls.swasthyaSahayika.setValue('');
    if (!this.locationForm.value.region) {
      this.villageDtoList = [];
      this.villagesOfBranch = [];
      this.gpDtoList = [];
      this.baselineService.timeToTentativeEndDate = '';
    }
  }

  changeBranch(brnchId) {

    console.log(brnchId, 'brnchId');
    this.branchEnddateDetailDTO = this.branchList.find(bran => bran.branchId == brnchId)?.branchBaselineSurveyEnddateDetailDTO;
    console.log(this.branchEnddateDetailDTO, 'branchEnddateDetailDTO');
    if (this.branchEnddateDetailDTO?.actualEndDate != null) {
      console.log(true, '1');
      this.baselineService.timeToTentativeEndDate = this.branchEnddateDetailDTO?.timeToActualEndDate;
    } else if (this.branchEnddateDetailDTO?.timeToTentativeEndDate != null) {
      console.log(true, '2');
      this.baselineService.timeToTentativeEndDate = this.branchEnddateDetailDTO?.timeToTentativeEndDate;
    } else {
      this.baselineService.timeToTentativeEndDate = '';
    }

    this.sidebarService.donorName = this.branchList?.find(bran => bran.branchId == brnchId)?.donorMasterDto?.donorName;
    console.log(this.sidebarService.donorName);

    this.sidebarService.donorMasterDto = this.branchList?.find(bran => bran.branchId == brnchId)?.donorMasterDto
    console.log(this.sidebarService.donorMasterDto);


    this.sidebarService.branchId = brnchId;
    this.sidebarService.branchName = this.branchList?.find(bran => bran.branchId == brnchId)?.branchName;

    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: brnchId
    }
    this.baselineService.villagesOfBranch(Dto).subscribe((res) => {
      this.villagesOfBranch = res.responseObject;
      console.log(this.villagesOfBranch, 'villagesOfBranch2');
    })
    this.locationForm.controls.block.setValue('');
    this.locationForm.controls.gp.setValue('');
    this.locationForm.controls.gram.setValue('');
    this.locationForm.controls.swasthyaSahayika.setValue('');
    if (!this.locationForm.value.branch) {
      this.villageDtoList = [];
      this.villagesOfBranch = [];
      this.gpDtoList = [];
    }
  }

  changeBlock(blockname) {
    this.gpDtoList = this.villagesOfBranch.find(block => block.blockName == blockname)?.gpDtoList;
    this.selectedBlock = this.locationForm.get('block').value;
    this.locationForm.controls.gp.setValue('');
    this.locationForm.controls.gram.setValue('');
    this.locationForm.controls.swasthyaSahayika.setValue('');
    if (!this.locationForm.value.block) {
      this.villageDtoList = [];
    }
  }

  changeGp(gpName) {
    this.villageDtoList = this.villagesOfBranch.find(block => block.blockName == this.selectedBlock)?.gpDtoList.find(gp => gp.name == gpName)?.villageDtoList;
    this.selectedGp = this.locationForm.get('gp').value;
    this.locationForm.controls.gram.setValue('');
    this.locationForm.controls.swasthyaSahayika.setValue('');
    if (!this.locationForm.value.gp) {
      this.villageDtoList = [];
    }
  }

  changeVillage(villageId) {
    // let villId = this.villagesOfBranch.find(block => block.blockName == this.selectedBlock)?.gpDtoList.find(gp => gp.name == this.selectedGp)?.villageDtoList.find(vill => vill.villageName == villagename)?.villageMasterId;
    this.sidebarService.branchVillageMapId = this.villagesOfBranch.find(block => block.blockName == this.selectedBlock)?.gpDtoList.find(gp => gp.name == this.selectedGp)?.villageDtoList.find(vill => vill.villageMasterId == villageId)?.branchVillageMapId
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      villageId: villageId,
      userId: this.sidebarService.userId
    }
    this.baselineService.ssVillageWiseList(req).subscribe((res) => {
      console.log(res);
      this.swasthyaSahayika = res.responseObject;
    }, (error) => {
      this.swasthyaSahayika = null;
    })

    this.locationForm.controls.swasthyaSahayika.setValue('');
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
      swasthyaSahayika: [''],
    });
  }

  get f() {
    return this.locationForm.controls;
  }


}

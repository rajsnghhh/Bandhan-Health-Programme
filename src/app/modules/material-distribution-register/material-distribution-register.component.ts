import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpService } from '../core/http/http.service';
import { SidebarService } from '../shared/sidebar/sidebar.service';
import { MaterialDistributionRegisterService } from './material-distribution-register.service';

@Component({
  selector: 'app-material-distribution-register',
  templateUrl: './material-distribution-register.component.html',
  styleUrls: ['./material-distribution-register.component.css']
})
export class MaterialDistributionRegisterComponent implements OnInit {
  viewMaterialDistributionForm: FormGroup;
  regionBranchHide: boolean;
  regionList: Array<any> = [];
  lowerRoleBranchId: any;
  branchList: Array<any> = [];
  villagesOfBranch: Array<any> = [];
  gpList: Array<any> = [];
  villageList: Array<any> = [];
  page = 1;
  pageSize = 6;
  p: any;
  modalContent: any;
  modalReference: any;

  constructor(private fb: FormBuilder, private sidebarService: SidebarService, private http: HttpClient, private httpService: HttpService,
    private materialDistributionService: MaterialDistributionRegisterService, private modalService: NgbModal, config: NgbModalConfig,) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.view_materialDistributionForm();
    this.sidebarService.checkRoledetailDTO().then((res: any) => {
      if (res.regionBranchHide) {
        this.regionList = res.region;
        this.regionBranchHide = res.regionBranchHide;
      } else {
        this.lowerRoleBranchId = res.branchId;
        // this.branchList = res.branchLIST;
        // this.branchName = res.branchName;
        // console.log(this.branchName, 'this.branchName');
        let dataAccessDTO = JSON.parse(localStorage.getItem('dataAccessDTO'));
        let Dto = {
          dataAccessDTO: {
            userId: dataAccessDTO.userId,
            userName: dataAccessDTO.userName,
          },
          branchId: this.lowerRoleBranchId
        }
        this.regionBranchHide = res.regionBranchHide;
        this.http.post(`${this.sidebarService.baseURL}village/getVillagesOfABranch`, Dto).subscribe((res: any) => {
          if (res.sessionDTO.status == true) {
            this.villagesOfBranch = res.responseObject;
            console.log(this.villagesOfBranch, 'lowerrankvillagesOfBranch');
          }
        });
        // this.changeBranch(this.viewSSTrainingEventForm.value.branch ? this.viewSSTrainingEventForm.value.branch : this.lowerRoleBranchId);
      }
    });
  }

  view_materialDistributionForm() {
    this.viewMaterialDistributionForm = this.fb.group({
      region: ['', Validators.required],
      branch: ['', Validators.required],
      block: ['', Validators.required],
      gp: ['', Validators.required],
      gram: ['', Validators.required]
    })
  }

  get m() {
    return this.viewMaterialDistributionForm.controls;
  }

  changeRegion(regionId) {
    console.log(regionId, 'regionMasterId');
    // this.regionName = this.regionList.find((reg) => reg.regionMasterId == this.regionID)?.regionName;
    // console.log(this.regionName, 'this.regionName');
    if (regionId) {
      let req = { dataAccessDTO: this.httpService.dataAccessDTO, regionId: regionId };
      this.materialDistributionService.getBranchesOfRegion(req).subscribe((res) => {
        this.branchList = res.responseObject;
        console.log(this.branchList, 'branchList');
      });
    }

    this.viewMaterialDistributionForm.controls.branch.setValue('');
    this.viewMaterialDistributionForm.controls.block.setValue('');
    this.viewMaterialDistributionForm.controls.gp.setValue('');
    this.viewMaterialDistributionForm.controls.gram.setValue('');
    this.gpList = [];
    this.villageList = [];
    this.villagesOfBranch = [];
    if (this.viewMaterialDistributionForm.value.region == '') {
      this.branchList = [];
    }

  }

  changeBranch(branchId) {
    console.log(branchId, 'branchId');
    let req = { dataAccessDTO: this.httpService.dataAccessDTO, branchId: branchId };
    this.materialDistributionService.getVillagesOfBranch(req).subscribe((res) => {
      this.villagesOfBranch = res.responseObject;
      console.log(this.villagesOfBranch, 'villagesOfBranch');
    });

    this.viewMaterialDistributionForm.controls.block.setValue('');
    this.viewMaterialDistributionForm.controls.gp.setValue('');
    this.viewMaterialDistributionForm.controls.gram.setValue('');
    this.gpList = [];
    this.villageList = [];
  }

  changeBlock(blockId) {
    console.log(blockId, 'blockId');
    this.gpList = this.villagesOfBranch.find(block => block.blockMasterId == blockId)?.gpDtoList;
    console.log(this.gpList, 'gplist');

    this.viewMaterialDistributionForm.controls.gp.setValue('');
    this.viewMaterialDistributionForm.controls.gram.setValue('');
    this.villageList = [];
  }

  changeGp(gpId) {
    console.log(gpId, 'GpId');
    this.villageList = this.gpList.find(gp => gp.gpMunicipalId == gpId)?.villageDtoList;
    console.log(this.villageList, 'villageList');

    this.viewMaterialDistributionForm.controls.gram.setValue('');
  }

  changeVillage(villageId) {
    console.log(villageId, 'villageId');

  }

  viewdistributionDetails(detailsOfDistribution) {

    this.modalContent = '';
    this.modalReference = this.modalService.open(detailsOfDistribution, {
      windowClass: 'detailsOfParticipants',
    });

  }

  detailsOfDistributionModalDismiss() {
    this.modalReference?.close();
  }

}

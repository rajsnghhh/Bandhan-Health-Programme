import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { HttpService } from '../core/http/http.service';
import { ValidationService } from '../shared/services/validation.service';
import { SidebarService } from '../shared/sidebar/sidebar.service';
import { MaterialDistributionRegisterService } from './material-distribution-register.service';

@Component({
  selector: 'app-material-distribution-register',
  templateUrl: './material-distribution-register.component.html',
  styleUrls: ['./material-distribution-register.component.css']
})
export class MaterialDistributionRegisterComponent implements OnInit {
  dropdownSettings: IDropdownSettings = {};
  viewMaterialDistributionForm: FormGroup;
  createMaterialDistributionForm: FormGroup;
  regionBranchHide: boolean;
  regionList: Array<any> = [];
  lowerRoleBranchId: any;
  branchList: Array<any> = [];
  villagesOfBranch: Array<any> = [];
  gpList: Array<any> = [];
  villageList: Array<any> = [];
  villageID: any;
  page = 1;
  pageSize = 6;
  p: any;
  modalContent: any;
  modalReference: any;
  eligibleFamilyList: Array<any> = [];
  eligibleChildList: Array<any> = [];
  itemList: Array<any> = [];
  subItemMultiItem: Array<any> = [];

  constructor(private fb: FormBuilder, private sidebarService: SidebarService, private http: HttpClient, private httpService: HttpService,
    private materialDistributionService: MaterialDistributionRegisterService, private modalService: NgbModal, config: NgbModalConfig,
    private validationService: ValidationService,) {
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
    this.villageID = villageId;
    console.log(this.villageID, 'changevillage this.villageID');

  }

  viewdistributionDetails(detailsOfDistribution) {
    this.modalContent = '';
    this.modalReference = this.modalService.open(detailsOfDistribution, {
      windowClass: 'detailsOfParticipants',
    });

  }

  viewDistributionDetailsModalDismiss() {
    this.modalReference?.close();
  }

  viewEligibleFamilyDetails(eligibleFamilyDetails) {
    console.log(this.villageID, 'this.villageID');
    this.modalContent = '';
    this.modalReference = this.modalService.open(eligibleFamilyDetails, {
      windowClass: 'eligibleFamilyDetails',
    });

    let viewFamObj = { dataAccessDTO: this.httpService.dataAccessDTO, village_master_id: '1' };

    this.materialDistributionService.getEligibleFamilyDetails(viewFamObj).subscribe((res: any) => {
      this.eligibleFamilyList = res.responseObject;
      console.log(this.eligibleFamilyList, 'eligibleFamilyList');
    });
  }

  eligibleFamilyDetailsModalDismiss() {
    this.modalReference = this.modalService.dismissAll();
  }

  create_materialDistributionForm() {
    this.createMaterialDistributionForm = this.fb.group({
      itemList: ['', Validators.required],
      subItems: ['', Validators.required],
      enterSubItem: ['', Validators.required]
    })
  }

  get t() {
    return this.createMaterialDistributionForm.controls;
  }

  createMaterialDistribution(materialDistribution, childItem) {
    console.log(childItem.family_detail_id, 'family_detail_id');

    this.modalContent = '';
    this.modalReference = this.modalService.open(materialDistribution, {
      windowClass: 'materialDistribution',
    });

    let viewChildObj = { dataAccessDTO: this.httpService.dataAccessDTO, family_detail_id: childItem.family_detail_id };

    this.materialDistributionService.getFamilyChildDetails(viewChildObj).subscribe((res: any) => {
      this.eligibleChildList = res.responseObject;
      console.log(this.eligibleChildList, 'eligibleChildList');
    });
    this.create_materialDistributionForm();


    console.log(this.itemList, 'itemlist');


  }

  changeitemList(itemId) {
    if (this.createMaterialDistributionForm.value.itemList == 1) {
      this.itemList = [
        { itemId: 1, itemName: 'India' },
        { itemId: 2, itemName: 'Singapore' },
        { itemId: 3, itemName: 'Germany' },
        { itemId: 4, itemName: 'France' },
        { itemId: 5, itemName: 'South Korea' },
        { itemId: 6, itemName: 'Sweden' }
      ];
      console.log(this.itemList, '1');

    }


    if (this.createMaterialDistributionForm.value.itemList == 2) {
      this.itemList = [
        { itemId: 7, itemName: 'Engineer' },
        { itemId: 8, itemName: 'Doctor' },
        { itemId: 9, itemName: 'Actor' },
        { itemId: 10, itemName: 'Cricketer' },
        { itemId: 11, itemName: 'Singer' },
        { itemId: 12, itemName: 'Dancer' }
      ];
      console.log(this.itemList, '2');
    }


    this.dropdownSettings = {
      singleSelection: false,
      enableCheckAll: false,
      idField: 'itemId',
      textField: 'itemName',
      // selectAllText: 'Select All',
      // unSelectAllText: 'Unselect All',
      // itemsShowLimit: 3,
      allowSearchFilter: true,
    };

  }

  onItemSelect(item: any) {
    console.log(item);
    this.subItemMultiItem.push(item);
    console.log(this.subItemMultiItem);
  }

  onItemDeSelect(item: any) {
    console.log(item);
    console.log(this.subItemMultiItem);
    const index: number = this.subItemMultiItem.findIndex(
      (x) => x.itemId == item.itemId
    );
    if (index !== -1) {
      this.subItemMultiItem.splice(index, 1);
      console.log(this.subItemMultiItem);
    }

  }

  createMaterialDistributionModalDismiss() {
    this.modalReference?.close();
  }

  createMaterialDistributionSave() {
    console.log('createMaterialDistributionSave');

  }

  editMaterialDistributedFamily() {
    console.log('editMaterialDistributedFamily');

  }

  deleteMaterialDistributedFamily() {
    console.log('deleteMaterialDistributedFamily');

  }


}

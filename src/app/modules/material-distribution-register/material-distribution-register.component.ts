import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../core/http/http.service';
import { ConfirmationDialogService } from '../shared/confirmation-dialog/confirmation-dialog.service';
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
  subItemList: Array<any> = [];
  subItemMultiItem: Array<any> = [];
  familyDetails: any;
  materialDistributionList: Array<any> = [];
  materialDistributionListFamilyWise: Array<any> = [];
  onDistributionEditData: any;
  editItemID: any;
  viewMode: boolean;
  createMode: boolean;
  updateMode: boolean;
  deleteMode: boolean;

  constructor(private fb: FormBuilder, private sidebarService: SidebarService, private http: HttpClient, private httpService: HttpService,
    private materialDistributionService: MaterialDistributionRegisterService, private modalService: NgbModal, config: NgbModalConfig,
    private validationService: ValidationService, private toaster: ToastrService, private confirmationDialogService: ConfirmationDialogService,
    private router: Router) {
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
      }
    });

    this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionMasterId == 5)?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 226 || item.subFunctionMasterId == 227 || item.subFunctionMasterId == 228 || item.subFunctionMasterId == 229)?.accessDetailList
      .find(accessType => accessType.accessType == 'view')?.accessType ? this.router.navigate(['/material-distribution-register']) : this.router.navigate(['/error']);

    this.createMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionMasterId == 5)?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 226 || item.subFunctionMasterId == 227 || item.subFunctionMasterId == 228 || item.subFunctionMasterId == 229)?.accessDetailList
      .find(accessType => accessType.accessType == 'create')?.accessType ? true : false;

    this.updateMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionMasterId == 5)?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 226 || item.subFunctionMasterId == 227 || item.subFunctionMasterId == 228 || item.subFunctionMasterId == 229)?.accessDetailList
      .find(accessType => accessType.accessType == 'update')?.accessType ? true : false;

    this.deleteMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionMasterId == 5)?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 226 || item.subFunctionMasterId == 227 || item.subFunctionMasterId == 228 || item.subFunctionMasterId == 229)?.accessDetailList
      .find(accessType => accessType.accessType == 'delete')?.accessType ? true : false;

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

    let req = { dataAccessDTO: this.httpService.dataAccessDTO, village_master_id: villageId };
    this.materialDistributionService.getMaterialDistributionList(req).subscribe((res: any) => {
      this.materialDistributionList = res.responseObject;
      console.log(this.materialDistributionList, 'this.materialDistributionList');
    })
  }

  viewdistributionDetails(detailsOfDistribution, mat) {
    console.log(mat);

    if (mat.pregnant_woman == 'Y') {
      this.materialDistributionListFamilyWise = mat.material_distribution_List;
      this.materialDistributionListFamilyWise.forEach((item) => {
        item.childList = [];
        item.childList.push({ child_name: mat.first_name + mat.middle_name + ' ' + mat.last_name, status: 'PW' })
        console.log(item.childList);
      });
    } else {
      this.materialDistributionListFamilyWise = mat.material_distribution_List;
    }

    this.materialDistributionListFamilyWise = this.materialDistributionListFamilyWise?.map(({
      family_detail_id = mat.family_detail_id,
      pregnant_woman = mat.pregnant_woman,
      ...rest
    }) => ({
      family_detail_id, pregnant_woman,
      ...rest
    }));
    console.log(this.materialDistributionListFamilyWise, 'this.materialDistributionListFamilyWise');

    this.modalContent = '';
    this.modalReference = this.modalService.open(detailsOfDistribution, {
      windowClass: 'detailsOfParticipants',
    });

  }

  viewDistributionDetailsModalDismiss() {
    this.modalReference = this.modalService.dismissAll();
  }

  viewEligibleFamilyDetails(eligibleFamilyDetails) {
    console.log(this.villageID, 'this.villageID');
    this.modalContent = '';
    this.modalReference = this.modalService.open(eligibleFamilyDetails, {
      windowClass: 'eligibleFamilyDetails',
    });

    let viewFamObj = { dataAccessDTO: this.httpService.dataAccessDTO, village_master_id: this.villageID };

    this.materialDistributionService.getEligibleFamilyDetails(viewFamObj).subscribe((res: any) => {
      this.eligibleFamilyList = res.responseObject;
      console.log(this.eligibleFamilyList, 'eligibleFamilyList');
    });
  }

  eligibleFamilyDetailsModalDismiss() {
    this.modalReference = this.modalService.dismissAll();
  }

  create_materialDistributionForm(onDistributionEditData) {
    console.log(onDistributionEditData, '...create_materialDistributionForm');

    if (onDistributionEditData != '') {
      this.editItemID = onDistributionEditData?.subItems?.find(item => item.md_item_id)?.md_item_id;
      console.log(this.editItemID, 'edit_item_ID');

      var edit_sub_item_ID = [];
      onDistributionEditData?.subItems.forEach(item => {
        edit_sub_item_ID.push({ sub_item_id: item.md_sub_item_id, sub_item_name: item.md_sub_item_name });
        console.log(edit_sub_item_ID, ' edit_sub_item_ID ');
        this.subItemMultiItem.push(item.md_sub_item_id);
      })
      console.log(edit_sub_item_ID, ' edit_sub_item_ID ');
    }

    this.createMaterialDistributionForm = this.fb.group({
      itemList: [this.editItemID ? this.editItemID : '', Validators.required],
      subItems: [edit_sub_item_ID ? edit_sub_item_ID : '', Validators.required],
      enterSubItem: [onDistributionEditData?.other_item_name ? onDistributionEditData?.other_item_name : '', Validators.required]
    });

    if (!this.createMaterialDistributionForm.value.itemList) {
      this.createMaterialDistributionForm.controls.subItems.setValue('');
      this.subItemMultiItem = [];
    }

  }

  get t() {
    return this.createMaterialDistributionForm.controls;
  }

  createMaterialDistribution(materialDistribution, fam_details) {


    console.log(this.onDistributionEditData);

    this.familyDetails = fam_details;
    console.log(this.familyDetails, 'this.familyDetails');

    this.create_materialDistributionForm(this.onDistributionEditData);

    this.getItemList();

    console.log(fam_details.family_detail_id, 'family_detail_id');
    setTimeout(() => {
      this.modalContent = '';
      this.modalReference = this.modalService.open(materialDistribution, {
        windowClass: 'materialDistribution',
      });

    }, 200);

    let viewChildObj = { dataAccessDTO: this.httpService.dataAccessDTO, family_detail_id: fam_details.family_detail_id };

    this.materialDistributionService.getFamilyChildDetails(viewChildObj).subscribe((res: any) => {
      this.eligibleChildList = res.responseObject;
      console.log(this.eligibleChildList, 'eligibleChildList');
    });


  }

  getItemList() {

    let ItemObj = { dataAccessDTO: this.httpService.dataAccessDTO };

    this.materialDistributionService.getItemSubItemList(ItemObj).subscribe((res: any) => {
      this.itemList = res.responseObject;
      console.log(this.itemList, 'this.itemList');
      this.changeItemList(this.editItemID);
    });
  }

  changeItemList(itemId) {
    console.log(itemId);

    this.subItemList = this.itemList.find(item => item.item_id == itemId)?.subItemList;
    console.log(this.subItemList, 'subItemList');
    console.log(this.onDistributionEditData?.subItems, 'this.onDistributionEditData.subItems');

    this.dropdownSettings = {
      singleSelection: false,
      enableCheckAll: false,
      idField: 'sub_item_id',
      textField: 'sub_item_name',
      allowSearchFilter: true,
    };

  }

  onItemSelect(item: any) {
    console.log(item);
    this.subItemMultiItem.push(item.sub_item_id);
    console.log(this.subItemMultiItem);
  }

  onItemDeSelect(item: any) {
    console.log(item);
    console.log(this.subItemMultiItem);
    const index: number = this.subItemMultiItem?.findIndex((x) => x == item?.sub_item_id);
    if (index !== -1) {
      this.subItemMultiItem.splice(index, 1);
      console.log(this.subItemMultiItem);
    }

  }

  createMaterialDistributionModalDismiss() {
    this.modalReference?.close();
    this.subItemMultiItem = [];
    var ID = this.onDistributionEditData?.material_distribution_register_id;

    if (ID) {
      this.onDistributionEditData = '';
      ID = 0;
      this.modalReference?.close();
      this.editItemID = '';
    }
    else {
      this.modalReference?.close();
    }
  }

  disabledSaveMaterialTraining() {
    let flag = true;

    if (this.createMaterialDistributionForm.value.itemList == 'OTHERS') {
      if (!this.createMaterialDistributionForm.value.enterSubItem) {
        flag = false;
      }
    } else if (this.subItemMultiItem.length == 0) {
      flag = false;
    }

    return flag;
  }

  createMaterialDistributionSave() {
    console.log('createMaterialDistributionSave');
    console.log(this.familyDetails, 'xxxxxxxxxxsavexxx');
    console.log(this.onDistributionEditData, 'onDistributionEditData');

    let saveReq = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      material_distribution_register_id: this.onDistributionEditData ? this.onDistributionEditData?.material_distribution_register_id : 0,
      active_flag: this.onDistributionEditData ? 'U' : 'C',
      family_detail_id: this.onDistributionEditData ? this.onDistributionEditData?.family_detail_id : this.familyDetails.family_detail_id,
      pregnant_woman: this.onDistributionEditData ? this.onDistributionEditData?.pregnant_woman : this.familyDetails.pregnant_woman,
      subItems: this.subItemMultiItem,
      otherItem: this.createMaterialDistributionForm.value.enterSubItem ? this.createMaterialDistributionForm.value.enterSubItem : null
    };

    console.log(saveReq, 'saveReq');

    this.materialDistributionService.saveUpdateDeleteMaterialDistribution(saveReq).subscribe((res: any) => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.createMaterialDistributionModalDismiss();
        this.eligibleFamilyDetailsModalDismiss();
        this.viewDistributionDetailsModalDismiss();
        this.changeVillage(this.villageID);
      } else {
        this.showError(res.message);
      }

    })
  }

  savingDataDisplayModalDismiss() {
    this.modalReference?.close();
  }

  editMaterialDistributedFamily(materialDistribution, mat) {
    this.onDistributionEditData = mat;
    this.createMaterialDistribution(materialDistribution, mat);
  }

  deleteMaterialDistributedFamily(mat, i) {
    this.confirmationDialogService.confirm('', 'Are you sure you want to delete distribution record ?')
      .then(() => this.delete(mat, i)
      )
      .catch(() => '');
  }

  delete(mat, i) {
    console.log(mat, 'deleteMaterialDistributedFamily');
    let deleteReq = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      material_distribution_register_id: mat.material_distribution_register_id,
      active_flag: 'D',
      family_detail_id: mat.family_detail_id,
      pregnant_woman: mat.pregnant_woman,
      subItems: mat.subItems,
      otherItem: mat.other_item_map_id
    };

    console.log(deleteReq);

    this.materialDistributionService.saveUpdateDeleteMaterialDistribution(deleteReq).subscribe((res: any) => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.materialDistributionListFamilyWise.splice(i, 1);
      } else {
        this.showError(res.message);
      }

    })

  }

  showSuccess(message) {
    this.toaster.success(message, 'Material Distribution Register', {
      timeOut: 3000,
    });
  }

  showError(message) {
    this.toaster.error(message, 'Material Distribution Register', {
      timeOut: 3000,
    });
  }

}

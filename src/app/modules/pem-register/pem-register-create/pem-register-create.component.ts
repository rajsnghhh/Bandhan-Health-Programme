import { Component, DoCheck, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { BranchService } from '../../core/http/branch.service';
import { HttpService } from '../../core/http/http.service';
import { ValidationService } from '../../shared/services/validation.service';
import { SidebarService } from '../../shared/sidebar/sidebar.service';
import { PemRegisterService } from '../pem-register.service';

@Component({
  selector: 'app-pem-register-create',
  templateUrl: './pem-register-create.component.html',
  styleUrls: ['./pem-register-create.component.css']
})


export class PemRegisterCreateComponent implements OnInit, DoCheck {
  pemForm: FormGroup;
  editPemForm: FormGroup;
  locationForm: FormGroup;
  pemDetails: any;
  pemDataSave: any;
  childId: any;
  childrenId: any;
  pemRegisterEntry: any;
  loader: boolean = false;
  regionList: Array<any> = [];
  branchList: Array<any> = [];
  villagesOfBranch: Array<any> = [];
  gpDtoList: Array<any> = [];
  villageDtoList: Array<any> = [];
  selectedBlock: String;
  selectedGp: String;
  regionBranchHide: boolean;
  branchVillageMapId: any;
  villageMasterId: any;
  placeOfDelivery: any;
  institutionalDelivery: string;
  immunizationDelivery12: string;
  immunizationDelivery24: string;
  breastFeeding6: string;
  breastFeeding12: string;
  breastFeeding18: string;
  breastFeeding24: string;
  diarrhea: string;
  supplementary: string;
  healthcare: string;
  modalContent: any;
  modalReference: any;
  modalIndex: any;
  latestMuac: number;
  firstVisitDate: any;
  secondVisitDate: any;
  childDTO: any;
  saveEditFormData: any;
  registerSearch: any;
  searchFullscreen: boolean;

  constructor(private fb: FormBuilder, private pemService: PemRegisterService,
    private modalService: NgbModal, private toaster: ToastrService, private httpService: HttpService,
    private route: Router, private httpBranch: BranchService,
    public validationService: ValidationService, private sidebarService: SidebarService) { }


  ngDoCheck(): void {
    this.searchFullscreen = this.validationService.val;
  }

  ngOnInit(): void {
    this.locForm();
    this.createForm(this.pemDataSave);


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
        this.pemService.villagesOfBranch(Dto).subscribe((res) => {
          if (res.sessionDTO.status == true) {
            this.villagesOfBranch = res.responseObject;
            console.log(this.villagesOfBranch, 'villagesOfBranch1');
          }
        })
      }
    }, 1000);


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
      this.pemService.listOfBranchesOfARegion(req).subscribe(
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
    this.locationForm.controls.branch.setValue('');
    this.locationForm.controls.block.setValue('');
    this.locationForm.controls.gp.setValue('');
    this.locationForm.controls.gram.setValue('');

    if (this.locationForm.value.region == '') {
      this.showError('No Data Found');
      this.pemDetails = [];
      this.villageDtoList = [];
      this.villagesOfBranch = [];
      this.gpDtoList = [];
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
    this.loader = false;
    setTimeout(() => {
      this.pemService.villagesOfBranch(Dto).subscribe((res) => {
        this.loader = true;
        this.villagesOfBranch = res.responseObject;
        console.log(this.villagesOfBranch, 'villagesOfBranch2');
      })
    }, 500);
    this.locationForm.controls.block.setValue('');
    this.locationForm.controls.gp.setValue('');
    this.locationForm.controls.gram.setValue('');

    if (this.locationForm.value.branch == '') {
      this.showError('No Data Found');
      this.pemDetails = [];
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
    if (this.locationForm.value.block == '') {
      this.showError('No Data Found');
      this.pemDetails = [];
      this.villageDtoList = [];
      this.gpDtoList = [];
    }
  }
  changeGp(gpName) {
    this.villageDtoList = this.villagesOfBranch.find(block => block.blockName == this.selectedBlock)?.gpDtoList.find(gp => gp.name == gpName)?.villageDtoList;
    this.selectedGp = this.locationForm.get('gp').value;
    this.locationForm.controls.gram.setValue('');
    console.log(this.villageDtoList);

    if (this.locationForm.value.gp == '') {
      this.showError('No Data Found');
      this.pemDetails = [];
      this.villageDtoList = [];
    }
  }

  changeVillage(villagename) {
    this.branchVillageMapId = this.villagesOfBranch.find(block => block.blockName == this.selectedBlock)?.gpDtoList.find(gp => gp.name == this.selectedGp)?.villageDtoList.find(vill => vill.villageName == villagename)?.branchVillageMapId;
    this.villageMasterId = this.villageDtoList.find(vill => vill.villageName == villagename)?.villageMasterId
    console.log(this.villageMasterId);

    this.viewPEMList();

    if (this.locationForm.value.gram == '') {
      this.showError('No Data Found');
      this.pemDetails = [];
    }

  }

  locForm() {
    this.locationForm = this.fb.group({
      region: ['', Validators.required],
      branch: ['', Validators.required],
      block: ['', Validators.required],
      gp: ['', Validators.required],
      gram: ['', Validators.required],
    });

  }

  createForm(pemDataSave: any) {
    var item = pemDataSave;
    this.latestMuac = this.pemDataSave?.latestMuacValue;
    this.firstVisitDate = item?.childBasicStatusDto?.firstVisitDate;
    this.secondVisitDate = item?.childBasicStatusDto?.secondVisitDate;

    this.pemForm = this.fb.group({
      delivery: [item?.childBasicStatusDto?.placeOfDelivery ? item?.childBasicStatusDto?.placeOfDelivery : ''],
      birthweight: [item?.childBasicStatusDto?.birthWeight ? item?.childBasicStatusDto?.birthWeight : ''],
      height: [''],
      weight: [''],
      breastfeeding6: [item?.childBasicStatusDto?.ebfUpto6Complete ? item?.childBasicStatusDto?.ebfUpto6Complete : ''],
      breastfeeding12: [item?.childBasicStatusDto?.ebfUpto12Complete ? item?.childBasicStatusDto?.ebfUpto12Complete : ''],
      breastfeeding18: [item?.childBasicStatusDto?.ebfUpto18Complete ? item?.childBasicStatusDto?.ebfUpto18Complete : ''],
      breastfeeding24: [item?.childBasicStatusDto?.ebfUpto24Complete ? item?.childBasicStatusDto?.ebfUpto24Complete : ''],
      pemDate: [''],
      muac: [''],
      immunization12: [item?.childBasicStatusDto?.primaryImmunizationUpto12Completed ? item?.childBasicStatusDto?.primaryImmunizationUpto12Completed : ''],
      immunization24: [item?.childBasicStatusDto?.primaryImmunizationUpto24Completed ? item?.childBasicStatusDto?.primaryImmunizationUpto24Completed : ''],
      diarrhea: [item?.latestPemCounsellingExperiencedDiarrhea ? item?.latestPemCounsellingExperiencedDiarrhea : ''],
      supplementary: [item?.latestPemCounsellingSupplementaryFood ? item?.latestPemCounsellingSupplementaryFood : ''],
      healthcare: [item?.latestPemCounsellingVisitingHealthCenter ? item?.latestPemCounsellingVisitingHealthCenter : ''],
    });
  }

  get f() {
    return this.pemForm.controls;
  }

  get l() {
    return this.locationForm.controls;
  }

  showSuccess(message) {
    this.toaster.success(message, 'Pem Register', {
      timeOut: 3000,
    });
  }

  showError(message) {
    this.toaster.error(message, 'Pem Register', {
      timeOut: 3000,
    });
  }

  p(event) { }

  openModal(pemData, childId) {
    this.viewPEMRegisterEntry(childId);
    this.modalContent = '';
    this.modalReference = this.modalService.open(pemData, {
      windowClass: 'pemData',
    });
  }

  addPemModal(addPem, childId, pem) {
    this.pemDataSave = pem;
    this.createForm(this.pemDataSave);
    console.log(this.pemDataSave);
    this.childrenId = childId;
    this.modalContent = '';
    this.modalReference = this.modalService.open(addPem, {
      windowClass: 'pemData',
    });
  }

  modalDismiss() {
    this.modalReference?.close();
  }

  delivery(e) {
    this.institutionalDelivery = e.target.value;
    console.log(this.institutionalDelivery);
  }

  immunization12(e) {
    this.immunizationDelivery12 = e.target.value;
    console.log(this.immunizationDelivery12);
  }

  immunization24(e) {
    this.immunizationDelivery24 = e.target.value;
    console.log(this.immunizationDelivery24);
  }

  breastfeeding6(e) {
    this.breastFeeding6 = e.target.value;
  }

  breastfeeding12(e) {
    this.breastFeeding12 = e.target.value;
  }

  breastfeeding18(e) {
    this.breastFeeding18 = e.target.value;
  }

  breastfeeding24(e) {
    this.breastFeeding24 = e.target.value;
  }

  diarrhe(e) {
    this.diarrhea = e.target.value;
  }

  supplementar(e) {
    this.supplementary = e.target.value;
  }

  healthCare(e) {
    this.healthcare = e.target.value;
  }

  restrictTypeOfDate() {
    return false;
  }

  viewPEMList() {
    let obj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      villageMasterId: this.villageMasterId
    }

    this.pemService.viewPemList(obj).subscribe((res) => {
      this.pemDetails = res.responseObject;
      console.log(this.pemDetails);
    })

  }

  viewPEMRegisterEntry(childId) {
    console.log(childId);

    let obj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      childId: childId
    }

    this.pemService.viewPemRegisterEntry(obj).subscribe((res) => {
      this.pemRegisterEntry = res.responseObject;
      this.childDTO = res.responseObject[0].childBasicStatusDto;

      console.log(this.pemRegisterEntry);
      console.log(this.childDTO);

    })

  }

  resetPEMRegisterEntry() {
    this.createForm(this.pemDataSave);
  }

  savePEMRegisterEntry() {
    let item = this.pemForm.value;

    if (item.pemDate == '') {
      this.showError('Please select date of record keeping');
      return;
    }

    if (item.muac == '') {
      this.showError('Please enter muac value');
      return;
    }

    let pemBody = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      muacDataDto: {
        muacRegisterId: 0,
        muacCampId: null,
        childId: this.childrenId,
        height: item.height ? item.height : 0,
        weight: item.weight ? item.weight : 0,
        muac: item.muac,
        active_flag: 'A'
      },
      pemCounsellingDataDto: {
        pemCounsellingDataMasterId: 0,
        experiencedDiarrhea: item.diarrhea,
        supplementaryFoodProvided: item.supplementary,
        visitingHealthCareCenter: item.healthcare,
        active_flag: "A",
        pemDate: item.pemDate
      },
      childBasicStatusDto: {
        placeOfDelivery: item.delivery,
        birthWeight: item.birthweight,
        firstVisitDate: this.firstVisitDate,
        secondVisitDate: this.secondVisitDate,
        ebfUpto6Complete: item.breastfeeding6,
        primaryImmunizationUpto12Completed: item.immunization12,
        ebfUpto12Complete: item.breastfeeding12,
        ebfUpto18Complete: item.breastfeeding18,
        primaryImmunizationUpto24Completed: item.immunization24,
        ebfUpto24Complete: item.breastfeeding24
      }
    }

    console.log(pemBody);

    this.pemService.savePemRegister(pemBody).subscribe((res: any) => {
      console.log(res);

      if (res.status == true) {
        this.showSuccess(res.message);
        this.createForm(this.pemDataSave);
      }
      else {
        this.showError(res.message);
      }
    })

  }

  editPEMData(item, i, editPem, pemCounsellingDataMasterId) {
    this.modalDismiss();
    this.modalContent = '';
    this.modalReference = this.modalService.open(editPem, {
      windowClass: 'pemData',
    })
    this.EditForm(item);

  }

  EditForm(item) {
    this.saveEditFormData = item;

    this.editPemForm = this.fb.group({
      delivery: [item?.childBasicStatusDto?.placeOfDelivery ? item?.childBasicStatusDto?.placeOfDelivery : ''],
      birthweight: [item?.childBasicStatusDto?.birthWeight ? item?.childBasicStatusDto?.birthWeight : ''],
      height: [item?.muacData?.height ? item?.muacData?.height : ''],
      weight: [item?.muacData?.weight ? item?.muacData?.weight : ''],
      breastfeeding6: [item?.childBasicStatusDto?.ebfUpto6Complete ? item?.childBasicStatusDto?.ebfUpto6Complete : ''],
      breastfeeding12: [item?.childBasicStatusDto?.ebfUpto12Complete ? item?.childBasicStatusDto?.ebfUpto12Complete : ''],
      breastfeeding18: [item?.childBasicStatusDto?.ebfUpto18Complete ? item?.childBasicStatusDto?.ebfUpto18Complete : ''],
      breastfeeding24: [item?.childBasicStatusDto?.ebfUpto24Complete ? item?.childBasicStatusDto?.ebfUpto24Complete : ''],
      pemDate: [item?.pemDate],
      muac: [item?.muacData?.muac ? item?.muacData?.muac : ''],
      immunization12: [item?.childBasicStatusDto?.primaryImmunizationUpto12Completed ? item?.childBasicStatusDto?.primaryImmunizationUpto12Completed : ''],
      immunization24: [item?.childBasicStatusDto?.primaryImmunizationUpto24Completed ? item?.childBasicStatusDto?.primaryImmunizationUpto24Completed : ''],
      diarrhea: [item?.experiencedDiarrhea ? item?.experiencedDiarrhea : ''],
      supplementary: [item?.supplementaryFood ? item?.supplementaryFood : ''],
      healthcare: [item?.visitingHcareCenter ? item?.visitingHcareCenter : ''],
    });

  }

  saveEditPEMRegisterEntry() {
    var item = this.editPemForm.value;

    console.log(this.saveEditFormData);
    var set = this.saveEditFormData;

    if (item.muac == '') {
      this.showError('Please enter muac value');
      return;
    }

    let pemBody = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      muacDataDto: {
        muacRegisterId: set.muacData.muacRegisterId,
        muacCampId: set.muacData.muacCampId,
        childId: set.childId,
        height: item.height ? item.height : 0,
        weight: item.weight ? item.weight : 0,
        muac: item.muac ? item.muac : 0,
        active_flag: 'A'
      },
      pemCounsellingDataDto: {
        pemCounsellingDataMasterId: set.pemCounsellingDataMasterId,
        experiencedDiarrhea: item.diarrhea ? item.diarrhea : '',
        supplementaryFoodProvided: item.supplementary ? item.supplementary : '',
        visitingHealthCareCenter: item.healthcare ? item.healthcare : '',
        active_flag: 'A',
        pemDate: item.pemDate
      },
      childBasicStatusDto: {
        placeOfDelivery: item.delivery ? item.delivery : '',
        birthWeight: item.birthweight ? item.birthweight : '',
        firstVisitDate: set.childBasicStatusDto.firstVisitDate,
        secondVisitDate: set.childBasicStatusDto.secondVisitDate,
        ebfUpto6Complete: item.breastfeeding6 ? item.breastfeeding6 : '',
        primaryImmunizationUpto12Completed: item.immunization12 ? item.immunization12 : '',
        ebfUpto12Complete: item.breastfeeding12 ? item.breastfeeding12 : '',
        ebfUpto18Complete: item.breastfeeding18 ? item.breastfeeding18 : '',
        primaryImmunizationUpto24Completed: item.immunization24 ? item.immunization24 : '',
        ebfUpto24Complete: item.breastfeeding24 ? item.breastfeeding24 : ''
      }
    }

    console.log(pemBody);

    this.pemService.savePemRegister(pemBody).subscribe((res: any) => {
      console.log(res);

      if (res.status == true) {
        this.showSuccess(res.message);
        this.modalDismiss();
      }
      else {
        this.showError(res.message);
      }
    })

  }

  deletePEMData(item, i) {
    console.log(item);

    if (confirm('Do you want to delete PEMData: ')) {
      let pemBody = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        muacDataDto: {
          muacRegisterId: item.muacData.muacRegisterId,
          muacCampId: item.muacData.muacCampId,
          childId: item.childId,
          height: item.muacData.height,
          weight: item.muacData.weight,
          muac: item.muacData.muac,
          active_flag: 'D'
        },
        pemCounsellingDataDto: {
          pemCounsellingDataMasterId: item.pemCounsellingDataMasterId,
          experiencedDiarrhea: item.experiencedDiarrhea,
          supplementaryFoodProvided: item.supplementaryFood,
          visitingHealthCareCenter: item.visitingHcareCenter,
          active_flag: 'D',
          pemDate: item.pemDate
        },
        childBasicStatusDto: {
          placeOfDelivery: item.childBasicStatusDto.placeOfDelivery,
          birthWeight: item.childBasicStatusDto.birthWeight,
          firstVisitDate: item.childBasicStatusDto.firstVisitDate,
          secondVisitDate: item.childBasicStatusDto.secondVisitDate,
          ebfUpto6Complete: item.childBasicStatusDto.ebfUpto6Complete,
          primaryImmunizationUpto12Completed: item.childBasicStatusDto.primaryImmunizationUpto12Completed,
          ebfUpto12Complete: item.childBasicStatusDto.ebfUpto12Complete,
          ebfUpto18Complete: item.childBasicStatusDto.ebfUpto18Complete,
          primaryImmunizationUpto24Completed: item.childBasicStatusDto.primaryImmunizationUpto24Completed,
          ebfUpto24Complete: item.childBasicStatusDto.ebfUpto24Complete
        }
      }

      console.log(pemBody);

      this.pemService.savePemRegister(pemBody).subscribe((res: any) => {
        console.log(res);

        if (res.status == true) {
          this.showSuccess(res.message);
          this.pemRegisterEntry.splice(i, 1);

        }
        else {
          this.showError(res.message);
        }
      })
    }
  }

  restrictZero(event: any) {
    if (event.target.value.length === 0 && event.key === '0') {
      event.preventDefault();
    }

  }

}

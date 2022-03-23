import { Component, OnInit } from '@angular/core';
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
export class PemRegisterCreateComponent implements OnInit {
  pemForm: FormGroup;
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

  constructor(private fb: FormBuilder, private pemService: PemRegisterService,
    private modalService: NgbModal, private toaster: ToastrService, private httpService: HttpService,
    private route: Router, private httpBranch: BranchService,
    public validationService: ValidationService, private sidebarService: SidebarService) { }

  ngOnInit(): void {

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
    this.pemForm.controls.branch.setValue('');
    this.pemForm.controls.block.setValue('');
    this.pemForm.controls.gp.setValue('');
    this.pemForm.controls.gram.setValue('');

    if (this.pemForm.value.region == '') {
      this.showError('No Data Found');
      this.pemDetails = [];
      this.villageDtoList = [];
      this.villagesOfBranch = [];
      this.gpDtoList = [];
    }
  }

  changeBranch(branch) {
    this.sidebarService.branchId = this.branchList?.find(bran => bran.branchName == branch)?.branchId;
    this.sidebarService.branchName = this.pemForm.get('branch').value
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
    this.pemForm.controls.block.setValue('');
    this.pemForm.controls.gp.setValue('');
    this.pemForm.controls.gram.setValue('');

    if (this.pemForm.value.branch == '') {
      this.showError('No Data Found');
      this.pemDetails = [];
      this.villageDtoList = [];
      this.villagesOfBranch = [];
      this.gpDtoList = [];
    }
  }
  changeBlock(blockname) {
    this.gpDtoList = this.villagesOfBranch.find(block => block.blockName == blockname)?.gpDtoList;
    this.selectedBlock = this.pemForm.get('block').value;
    this.pemForm.controls.gp.setValue('');
    this.pemForm.controls.gram.setValue('');
    if (this.pemForm.value.block == '') {
      this.showError('No Data Found');
      this.pemDetails = [];
      this.villageDtoList = [];
      this.gpDtoList = [];
    }
  }
  changeGp(gpName) {
    this.villageDtoList = this.villagesOfBranch.find(block => block.blockName == this.selectedBlock)?.gpDtoList.find(gp => gp.name == gpName)?.villageDtoList;
    this.selectedGp = this.pemForm.get('gp').value;
    this.pemForm.controls.gram.setValue('');
    console.log(this.villageDtoList);

    if (this.pemForm.value.gp == '') {
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

    if (this.pemForm.value.gram == '') {
      this.showError('No Data Found');
      this.pemDetails = [];
    }

  }

  createForm(pemDataSave: any) {
    var item = pemDataSave;
    let milliTime = item?.childBasicStatusDto?.firstVisitDate

    const date = new Date(milliTime);
    var dateFormat = date.toLocaleDateString('en-US');
    let currentDate = new Date(dateFormat);

    function convertDate(date) {
      var yyyy = date.getFullYear().toString();
      var mm = (date.getMonth() + 1).toString();
      var dd = date.getDate().toString();

      var mmChars = mm.split('');
      var ddChars = dd.split('');

      return yyyy + '-' + (mmChars[1] ? mm : "0" + mmChars[0]) + '-' + (ddChars[1] ? dd : "0" + ddChars[0]);
    }

    console.log(convertDate(currentDate));
    var firstDateFormat = convertDate(currentDate);

    if (item?.childBasicStatusDto?.firstVisitDate == null) {
      var firstDateFormat = '';
    }

    this.pemForm = this.fb.group({
      region: ['', Validators.required],
      branch: ['', Validators.required],
      block: ['', Validators.required],
      gp: ['', Validators.required],
      gram: ['', Validators.required],
      delivery: [item?.childBasicStatusDto?.placeOfDelivery ? item?.childBasicStatusDto?.placeOfDelivery : ''],
      birthweight: [item?.childBasicStatusDto?.birthWeight ? item?.childBasicStatusDto?.birthWeight : '', Validators.required],
      height: ['', Validators.required],
      weight: ['', Validators.required],
      breastfeeding6: [item?.childBasicStatusDto?.ebfUpto6Complete ? item?.childBasicStatusDto?.ebfUpto6Complete : '', Validators.required],
      breastfeeding12: [item?.childBasicStatusDto?.ebfUpto12Complete ? item?.childBasicStatusDto?.ebfUpto12Complete : '', Validators.required],
      breastfeeding18: [item?.childBasicStatusDto?.ebfUpto18Complete ? item?.childBasicStatusDto?.ebfUpto18Complete : '', Validators.required],
      breastfeeding24: [item?.childBasicStatusDto?.ebfUpto24Complete ? item?.childBasicStatusDto?.ebfUpto24Complete : '', Validators.required],
      pemDate: [''],
      muac: [item?.latestMuacValue ? item?.latestMuacValue : '', Validators.required],
      immunization12: [item?.childBasicStatusDto?.primaryImmunizationUpto12Completed ? item?.childBasicStatusDto?.primaryImmunizationUpto12Completed : '', Validators.required],
      immunization24: [item?.childBasicStatusDto?.primaryImmunizationUpto24Completed ? item?.childBasicStatusDto?.primaryImmunizationUpto24Completed : '', Validators.required],
      diarrhea: [item?.latestPemCounsellingExperiencedDiarrhea ? item?.latestPemCounsellingExperiencedDiarrhea : ''],
      supplementary: [item?.latestPemCounsellingSupplementaryFood ? item?.latestPemCounsellingSupplementaryFood : ''],
      healthcare: [item?.latestPemCounsellingVisitingHealthCenter ? item?.latestPemCounsellingVisitingHealthCenter : ''],
      firstVisitDate: [firstDateFormat ? firstDateFormat : ''],
      secondVisitDate: ['']

    });
  }

  get f() {
    return this.pemForm.controls;
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
      console.log(this.pemRegisterEntry);
    })

  }

  resetPEMRegisterEntry() {
    this.createForm(this.pemDataSave);
  }

  savePEMRegisterEntry() {
    let item = this.pemForm.value;
    console.log(this.childrenId);

    let pemBody = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      muacDataDto: {
        muacRegisterId: 0,
        muacCampId: null,
        childId: this.childrenId,
        height: item.height,
        weight: item.weight,
        muac: item.muac,
        active_flag: 'A'
      },
      pemCounsellingDataDto: {
        pemCounsellingDataMasterId: 0,
        experiencedDiarrhea: this.diarrhea,
        supplementaryFoodProvided: this.supplementary,
        visitingHealthCareCenter: this.healthcare,
        active_flag: "A",
        pemDate: item.pemDate
      },
      childBasicStatusDto: {
        placeOfDelivery: this.institutionalDelivery,
        birthWeight: item.birthweight,
        firstVisitDate: item.firstVisitDate,
        secondVisitDate: item.secondVisitDate,
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
        this.showError(res.responseObject);
      }
    })

  }


}

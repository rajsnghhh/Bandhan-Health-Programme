import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { BaselineSurveyService } from '../../baseline-survey/baseline-survey.service';
import { BranchService } from '../../core/http/branch.service';
import { HttpService } from '../../core/http/http.service';
import { ValidationService } from '../../shared/services/validation.service';
import { SidebarService } from '../../shared/sidebar/sidebar.service';
import { ChildrenRegisterService } from '../children-register.service';

@Component({
  selector: 'app-children-register-create',
  templateUrl: './children-register-create.component.html',
  styleUrls: ['./children-register-create.component.css']
})

export class ChildrenRegisterCreateComponent implements OnInit {
  locationForm: FormGroup;
  today: string = new Date(new Date().setDate(new Date().getDate() - 1)).toISOString().substring(0, 10);
  minDate: any;
  modalContent: any
  modalReference: any;
  existingFamilyList: any;
  existingFamilyDetails: any;
  existingChildList: any;
  checkChildCount: number;
  familyID: any;
  checkTotalMale: any;
  checkTotalFemale: any;
  showAge: any;
  ide: any;
  maleLen: any;
  femaleLen: any;
  childStatusList: any;
  setChild: any;
  childDetails = {
    childInfo: [],
  };
  childViewExistingChild: any;
  childFamId: any;
  loader: boolean = true;
  page = 1;
  pageSize = 6;
  registerSearch: any;
  searchFullscreen: boolean;
  childIndexId: any;
  regionList: Array<any> = [];
  branchList: Array<any> = [];
  villagesOfBranch: Array<any> = [];
  gpDtoList: Array<any> = [];
  villageDtoList: Array<any> = [];
  selectedBlock: String;
  selectedGp: String;
  branchId: any;
  regionBranchHide: boolean;

  constructor(private fb: FormBuilder, private childService: ChildrenRegisterService,
    private http: HttpService, private modalService: NgbModal, public validationService: ValidationService,
    private httpService: HttpService, private toaster: ToastrService, private httpBranch: BranchService,
    private sidebarService: SidebarService, private baselineService: BaselineSurveyService) { }

  ngDoCheck(): void {
    this.searchFullscreen = this.validationService.val;
  }

  ngOnInit(): void {
    this.createForm();
    this.getMinDate();

    this.childDetails.childInfo.push({
      age: 'string',
      childDetailId: 0,
      childName: '',
      dob: '',
      familyDetailId: this.familyID,
      sex: '',
      status: 'A'
    });

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
      this.baselineService.villagesOfBranch(Dto).subscribe((res) => {
        this.loader = true;
        this.villagesOfBranch = res.responseObject;
      })
    }, 500);
    this.locationForm.get('block').reset();
    this.locationForm.get('gp').reset();
    this.locationForm.get('gram').reset();
  }

  changeBlock(blockname) {
    this.gpDtoList = this.villagesOfBranch.find(block => block.blockName == blockname)?.gpDtoList;
    this.selectedBlock = this.locationForm.get('block').value;
    this.locationForm.get('gp').reset();
    this.locationForm.get('gram').reset();
  }
  changeGp(gpName) {
    this.villageDtoList = this.villagesOfBranch.find(block => block.blockName == this.selectedBlock)?.gpDtoList.find(gp => gp.name == gpName)?.villageDtoList;
    this.selectedGp = this.locationForm.get('gp').value;
    this.locationForm.get('gram').reset();
  }

  changeVillage(villagename) {
    let branchVillageMapId = this.villagesOfBranch[0].gpDtoList[0].villageDtoList.find(i => i.villageName == villagename)?.branchVillageMapId;
    let obj = {
      activeStatus: "A",
      dataAccessDTO: this.http.dataAccessDTO,
      id: branchVillageMapId
    }
    this.loader = false;
    setTimeout(() => {
      this.childService.viewExistingFamilyLists(obj).subscribe((response: any) => {
        this.loader = true;
        this.existingFamilyList = response.responseObject;
        console.log(this.existingFamilyList);
        this.existingFamilyList?.forEach(item => {
          this.ide = item.familyDetailId
        })
      },
        (err) => {
          this.loader = true;
        })
    }, 1000);
  }

  get f() {
    return this.locationForm.controls;
  }
  getMinDate() {
    let date = new Date();
    let toDate: any = date.getDate();
    if (toDate < 10) {
      toDate = '0' + toDate;
    }

    let month: any = date.getMonth() + 1;
    if (month < 10) {
      month = "0" + month;
    }

    let year = date.getUTCFullYear() - 18;
    this.minDate = year + "-" + month + "-" + toDate;
  }

  createForm() {
    this.locationForm = this.fb.group({
      region: ['', Validators.required],
      branch: ['', Validators.required],
      block: ['', Validators.required],
      gp: ['', Validators.required],
      gram: ['', Validators.required]
    });
  }

  openModal(viewExistingChild, famid: any) {
    this.childViewExistingChild = viewExistingChild;
    this.childFamId = famid;
    this.getMoreDetails(famid);
    this.modalContent = '';
    this.modalReference = this.modalService.open(viewExistingChild, {
      windowClass: 'Child-Create-ModalClass',
    });
  }

  openModals(addNewChild, famid: any) {
    this.getMoreDetails(famid);
    this.familyID = famid;
    this.modalContent = '';
    this.modalReference = this.modalService.open(addNewChild, {
      windowClass: 'Child-Create-ModalClass',
    });
  }

  openModall(EditChild) {
    // this.getMoreDetails(famid);
    // this.familyID = famid;
    this.modalContent = '';
    this.modalReference = this.modalService.open(EditChild, {
      windowClass: 'Child-Create-ModalClass',
    });
  }

  getMoreDetails(famid) {
    let postBody = {
      activeStatus: "A",
      dataAccessDTO: this.http.dataAccessDTO,
      id: famid
    }

    //API call for viewing Details of existingFamilyChildDetails
    this.childService.viewExistingFamilyDetails(postBody).subscribe((response: any) => {
      this.existingFamilyDetails = response.responseObject;
      this.existingChildList = response.responseObject.childDetailDTOList;
      this.checkChildCount = response.responseObject.totalNumberOfChildren - response.responseObject.childDetailDTOList.length;
      this.maleLen = response.responseObject.childDetailDTOList.filter((x) => x.sex == 'M');
      // console.log(this.maleLen.length, 'maleLen');

      this.femaleLen = response.responseObject.childDetailDTOList.filter((x) => x.sex == 'F');
      // console.log(this.femaleLen.length, 'femaleLen');

      this.checkTotalMale = response.responseObject.totaFamilyMemberMales - this.maleLen.length;
      this.checkTotalFemale = response.responseObject.totaFamilyMemberFemales - this.femaleLen.length;
      console.log(this.existingFamilyDetails, 'existingFamilyDetails')
      console.log(this.existingChildList, 'existingChildList')

    })
  }

  saveAddChild() {
    this.childDetails.childInfo.forEach(a => {
      a.familyDetailId = this.familyID
    })

    this.childDetails.childInfo.forEach((item) => {
      let ageCheck = item.dob
      if (ageCheck) {
        const convertAge = new Date(ageCheck);
        const timeDiff = Math.abs(Date.now() - convertAge.getTime());
        this.showAge = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
      }
      console.log(this.showAge);
    })

    const postBody = {
      childDetailDTOList: this.childDetails.childInfo,
      dataAccessDTO: this.httpService.dataAccessDTO,
    }

    console.log(postBody);

    if (this.checkChildCount < this.childDetails.childInfo.length) {
      this.showError('You cannot add more child than entered total no. of children');
      return;
    }

    let maleData = this.childDetails.childInfo.filter((x) => x.sex == 'M')
    // console.log(maleData.length);

    let femaleData = this.childDetails.childInfo.filter((x) => x.sex == 'F')
    // console.log(femaleData.length);

    if (this.checkTotalMale < maleData.length) {
      this.showError('Total Male child should not be more than Total Family Member Male')
      return;
    }

    if (this.checkTotalFemale <= femaleData.length) {
      this.showError('Total Female child should not be more than or equal to Total Family Member Female')
      return;
    }

    // for disable add
    if (this.existingFamilyDetails.haveChild == 'N') {
      this.showError('This Family does not have any child');
      return;
    }

    // for disable add
    if (this.existingFamilyDetails.childrenBelow18 == 'N' || this.existingFamilyDetails.childrenBelow18 == 'NA') {
      this.showError('This family does not have any child below 18 years');
      return;
    }

    if (this.existingFamilyDetails.haveChild == 'Y' && this.existingFamilyDetails.childrenBelow18 == 'Y'
      && this.existingFamilyDetails.childrenBelow5 == 'N') {
      if (this.showAge < 5) {
        this.showError('This family does have any child below 5 years')
        return;
      }
    }

    if (this.existingFamilyDetails.childrenBelow5 == 'Y' && this.existingFamilyDetails.lactetingMother == 'NA') {
      if (this.showAge < 2) {
        this.showError('This family does have any child below 2 years')
        return;
      }
    }

    this.childService.saveChild(postBody).subscribe((response: any) => {
      console.log(response);
      if (response.status == true) {
        this.showSuccess(response.message);
        this.childModalDismiss();
        // this.viewExistingChild.dismiss('Cross click')

      } else {
        this.showError(response.message);
      }

    })

  }

  saveEditChild() {
    console.log(this.childDetails);
    console.log(this.existingFamilyDetails);
    console.log(this.setChild);
    this.childDetails.childInfo[0].familyDetailId = this.setChild.familyDetailId;
    this.childDetails.childInfo[0].childDetailId = this.setChild.childDetailId;
    console.log(this.childDetails);
    let firstCopyOFEFD = JSON.stringify(this.existingFamilyDetails);
    this.childDetails.childInfo.forEach((item) => {
      let ageCheck = item.dob
      if (ageCheck) {
        const convertAge = new Date(ageCheck);
        const timeDiff = Math.abs(Date.now() - convertAge.getTime());
        this.showAge = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
      }
      item.age = this.showAge;
      this.existingChildList[this.childIndexId] = item
      console.log(this.existingChildList, 'newChild');

    })


    this.existingChildList.filter((i) => {
      let ageCheck = i.dob
      if (ageCheck) {
        const convertAge = new Date(ageCheck);
        const timeDiff = Math.abs(Date.now() - convertAge.getTime());
        this.showAge = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
      }
      i.age = this.showAge
    })

    if ((this.existingFamilyDetails.lactetingMother == 'Y' || this.existingFamilyDetails.lactetingMother == 'N')) {
      if (this.existingChildList.filter((v) => v.age <= 2).length < 1) {
        this.showError('Child list must contain atleast one child below 2 years');
        return;
      }
    }

    if ((this.existingFamilyDetails.childrenBelow5 == 'Y' && this.existingFamilyDetails.lactetingMother == 'NA')) {
      if (this.existingChildList.filter((v) => v.age <= 5 && v.age > 2).length < 1) {
        this.showError('Child list must contain atleast one child below 5 years & more than 2 years');
        return;
      }

      if (this.existingChildList.filter((v) => v.age < 2).length > 0) {
        this.showError('Child list should not contain any child below 2 years');
        return;
      }
    }

    if ((this.existingFamilyDetails.childrenBelow18 == 'Y' && this.existingFamilyDetails.childrenBelow5 == 'N')) {
      if (this.existingChildList.filter((v) => v.age > 5 && v.age <= 18).length < 1) {
        this.showError('Child list must contain atleast one child below 18 years & more than 5 years');
        return;
      }

      if (this.existingChildList.filter((v) => v.age <= 5).length > 0) {
        this.showError('Child list should not contain any child below 5 years');
        return;
      }
    }

    const postBody = {
      childDetailDTOList: [
        {
          age: this.setChild.age,
          childDetailId: this.setChild.childDetailId,
          childName: this.childDetails.childInfo[0].childName,
          createdOn: this.setChild.createdOn,
          dob: this.childDetails.childInfo[0].dob,
          familyDetailId: this.setChild.familyDetailId,
          sex: this.childDetails.childInfo[0].sex,
          status: this.setChild.status
        }
      ],
      dataAccessDTO: this.httpService.dataAccessDTO,
    }

    if (this.existingFamilyDetails.childrenBelow5 == 'N') {
      if (this.showAge < 5) {
        this.showError('This family does have any child below 5 years')
        return;
      }

    }

    if (this.existingFamilyDetails.lactetingMother == 'NA') {
      if (this.showAge < 2) {
        this.showError('This family does have any child below 2 years')
        return;
      }

    }
    let copyOfexistingFamilyDetails: any = this.existingFamilyDetails;

    for (let i = 0; i < copyOfexistingFamilyDetails.childDetailDTOList.length; i++) {
      if (copyOfexistingFamilyDetails.childDetailDTOList[i].childDetailId == this.childDetails.childInfo[0].childDetailId) {
        copyOfexistingFamilyDetails.childDetailDTOList[i] = this.childDetails.childInfo[0];
      }
    }

    console.log(copyOfexistingFamilyDetails);
    console.log(this.existingFamilyDetails); console.log("**********", firstCopyOFEFD);

    let femaleList = copyOfexistingFamilyDetails.childDetailDTOList.filter(x => x.sex == "F");
    let maleList = copyOfexistingFamilyDetails.childDetailDTOList.filter(x => x.sex == "M");
    let femaleLength = femaleList.length;
    let maleLength = maleList.length;
    console.log(femaleLength, maleLength);

    if (this.existingFamilyDetails.totaFamilyMemberFemales == femaleLength || this.existingFamilyDetails.totaFamilyMemberFemales < femaleLength) {
      this.showError('Total Female child should not be more than or equal to Total Family Member Female')
      this.existingFamilyDetails = JSON.parse(firstCopyOFEFD);
      this.existingChildList = this.existingFamilyDetails.childDetailDTOList;
      console.log(this.existingFamilyDetails);
      return;
    }

    if (this.existingFamilyDetails.totaFamilyMemberMales < maleLength) {
      this.showError('Total Male child should not be more than Total Family Member Male');
      this.existingFamilyDetails = JSON.parse(firstCopyOFEFD);
      this.existingChildList = this.existingFamilyDetails.childDetailDTOList;
      return;
    }

    this.childService.saveChild(postBody).subscribe((response: any) => {
      console.log(response, 'response');
      if (response.status == true) {
        this.showSuccess(response.message);
        this.childModalDismiss();
        this.getMoreDetails(this.existingFamilyDetails.familyDetailId);
      } else {
        this.showError(response.message);
      }

    })

  }

  showSuccess(message) {
    this.toaster.success(message, 'Children Info Save', {
      timeOut: 3000,
    });
  }

  showError(message) {
    this.toaster.error(message, 'Children Info Save', {
      timeOut: 2000,
    });
  }

  showSuccesss(message) {
    this.toaster.success(message, 'Children Info Delete', {
      timeOut: 3000,
    });
  }

  showErrors(message) {
    this.toaster.error(message, 'Children Info Delete', {
      timeOut: 2000,
    });
  }

  p(event) { }

  addMoreChild() {
    this.childDetails.childInfo.push({
      age: 'string',
      childDetailId: 0,
      childName: '',
      dob: '',
      familyDetailId: this.familyID,
      sex: '',
      status: 'A'
    });
  }

  removeNewChild(i) {
    this.childDetails.childInfo.splice(i, 1);
  }

  childModalDismiss() {
    this.modalReference.close();
    this.childDetails.childInfo = [{
      age: 'string',
      childDetailId: 0,
      childName: '',
      dob: '',
      familyDetailId: this.familyID,
      sex: '',
      status: 'A'
    }];
  }

  checkChildDisabled() {
    let flag = true;

    if (this.childDetails.childInfo.length == 0) {
      flag = false;
    }

    this.childDetails.childInfo.forEach((item) => {
      if (!item.childName || !item.dob || !item.sex) {
        flag = false;
      }
    });

    return flag;
  }

  deleteChild(items, i) {
    var below18 = 0;
    var below5 = 0;
    var below2 = 0;
    var below188 = 0;
    var forDelete = 0;
    var x = 0;

    this.existingChildList.forEach((item) => {
      let ageCheck = item.dob
      if (ageCheck) {
        const convertAge = new Date(ageCheck);
        const timeDiff = Math.abs(Date.now() - convertAge.getTime());
        this.showAge = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
      }

      if (this.showAge >= 0 && this.showAge < 2) {
        below2 += 1;
      }  // checking for 0-2 years

      if (this.showAge >= 2 && this.showAge < 5) {
        below5 += 1;
      } // checking for 2-5 years

      if (this.showAge >= 5 && this.showAge < 18) {
        below18 += 1;
      }  // checking for 6-18 years


      if (x == i) {
        if (this.showAge >= 2 && this.showAge < 5) {
          forDelete = 5;
        } else if (this.showAge >= 0 && this.showAge < 2) {
          forDelete = 2;
        } else if (this.showAge >= 5 && this.showAge < 18) {
          forDelete = 18;
        }
        else {
          forDelete = 188;
        }
      }
      x += 1;
    })

    if (confirm('Do you want to delete : ' + items.childName)) {

      let postBody = {
        childDetailDTOList: [
          {
            age: items.age,
            childDetailId: items.childDetailId,
            childName: items.childName,
            createdOn: items.createdOn,
            dob: items.dob,
            familyDetailId: items.familyDetailId,
            sex: items.sex,
            status: 'D'
          }
        ],
        dataAccessDTO: this.httpService.dataAccessDTO

      }

      // if (this.existingChildList.length == 1) {
      //   this.showError('Child list must contain atleast one child below 18 years');
      //   return;
      // }


      if ((this.existingFamilyDetails.childrenBelow5 == 'N' && this.existingFamilyDetails.childrenBelow18 == 'Y') && forDelete == 18) {
        if (below18 == 1) {
          this.showError('Child list must contain atleast one child below 18 years');
          return;
        }
      }

      if ((this.existingFamilyDetails.lactetingMother == 'Y' || this.existingFamilyDetails.lactetingMother == 'N') && forDelete == 2) {
        if (below2 == 1) {
          this.showError('Child list must contain atleast one child below 2 years');
          return;
        }
      }

      if ((this.existingFamilyDetails.childrenBelow5 == 'Y' && this.existingFamilyDetails.lactetingMother == 'NA') && forDelete == 5) {
        if (below5 == 1) {
          this.showError('Child list must contain atleast one child below 5 years');
          return;
        }
      }

      this.childService.saveChild(postBody).subscribe((response: any) => {
        console.log(response);
        if (response.status == true) {
          this.showSuccesss(response.message);
          this.existingChildList.splice(i, 1);

        } else {
          this.showErrors(response.message);
        }

      });

    }
  }

  editChild(items, i, EditChild) {
    this.openModall(EditChild);
    this.setData(items);
    this.childIndexId = i;
    console.log(this.childIndexId, 'abc');

  }

  setData(data) {
    this.setChild = data;
    console.log(this.setChild, 'checkdata')
    this.childService.editChild(data);
    if (this.setChild) {
      this.childDetails.childInfo.forEach((x) => {
        x.childName = this.setChild.childName;
      });

      this.childDetails.childInfo.forEach((x) => {
        x.dob = this.setChild.dob.substring(0, 10);
      })
      this.childDetails.childInfo.forEach((x) => {
        x.sex = this.setChild.sex;
      })
    }
  }

}

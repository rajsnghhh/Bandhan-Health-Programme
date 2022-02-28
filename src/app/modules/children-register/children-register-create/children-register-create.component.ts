import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../../core/http/http.service';
import { ValidationService } from '../../shared/services/validation.service';
import { ChildrenRegisterService } from '../children-register.service';

@Component({
  selector: 'app-children-register-create',
  templateUrl: './children-register-create.component.html',
  styleUrls: ['./children-register-create.component.css']
})

export class ChildrenRegisterCreateComponent implements OnInit {
  childRegister: FormGroup;
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
  loader: boolean = false;

  constructor(private fb: FormBuilder, private childService: ChildrenRegisterService,
    private http: HttpService, private modalService: NgbModal, public validationService: ValidationService,
    private httpService: HttpService, private toaster: ToastrService) { }

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

    let obj = {
      activeStatus: "A",
      dataAccessDTO: this.http.dataAccessDTO,
      id: 888
    }

    setTimeout(() => {
      this.childService.viewExistingFamilyLists(obj).subscribe((response: any) => {
        this.loader = true;
        this.existingFamilyList = response.responseObject;
        console.log(this.existingFamilyList);
        this.existingFamilyList?.forEach(item => {
          this.ide = item.familyDetailId
          // console.log(item.familyDetailId)
        })
      })
    }, 1000);

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
    this.childRegister = this.fb.group({
      block: ['', Validators.required],
      gp: ['', Validators.required],
      gram: ['', Validators.required]
    });
  }

  get f() {
    return this.childRegister.controls;
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

    this.childDetails.childInfo.forEach((item) => {
      let ageCheck = item.dob
      if (ageCheck) {
        const convertAge = new Date(ageCheck);
        const timeDiff = Math.abs(Date.now() - convertAge.getTime());
        this.showAge = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
      }
      // console.log(this.showAge);
    })

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

    this.maleLen = this.existingFamilyDetails.childDetailDTOList.filter((x) => x.sex == 'M');
    // console.log(this.maleLen.length, 'maleLens');

    this.femaleLen = this.existingFamilyDetails.childDetailDTOList.filter((x) => x.sex == 'F');
    // console.log(this.femaleLen.length, 'femaleLens');
    let currentSex = this.childDetails.childInfo[0].sex;
    let existsmalelength = 0;
    let existsfemalelength = 0;
    if (currentSex == 'F') {
      existsfemalelength = existsfemalelength + 1;
    } else if (currentSex == 'M') {
      existsmalelength = existsmalelength + 1;
    }

    console.log(existsfemalelength);
    console.log(this.checkTotalFemale);


    if (this.checkTotalMale < existsmalelength) {
      this.showError('Total Male child should not be more than Total Family Member Male')
      return;
    }

    if (this.checkTotalFemale <= existsfemalelength) {
      this.showError('Total Female child should not be more than or equal to Total Family Member Female')
      return;
    }

    this.childService.saveChild(postBody).subscribe((response: any) => {
      console.log(response, 'response');
      if (response.status == true) {
        this.showSuccess(response.message);
        this.childModalDismiss();
        this.openModal(this.childViewExistingChild, this.childFamId);
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

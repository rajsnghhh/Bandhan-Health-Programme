import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../../core/http/http.service';
import { ValidationService } from '../../shared/services/validation.service';
import { CentralRegisterService } from '../central-register.service';

@Component({
  selector: 'app-central-register-create',
  templateUrl: './central-register-create.component.html',
  styleUrls: ['./central-register-create.component.css']
})
export class CentralRegisterCreateComponent implements OnInit {
  dropdownSettings: IDropdownSettings;
  centralRegister: UntypedFormGroup;
  modalContent: any;
  modalReference: any;
  modalIndex: any;
  casteList: any;
  educationList: any;
  monthlyIncomeDetails: any;
  religionDetails: any;
  cardDetails: any;
  haveSanitaryLatrine: string = 'N';
  today: string = new Date(new Date().setDate(new Date().getDate() - 1)).toISOString().substring(0, 10);
  minDate: any;
  minYear: any;
  maxYear: any;
  idTypeField: number = 0;
  @ViewChild('aadhaarId') aadhaarId: ElementRef;

  childDetails = {
    childInfo: [],
  };

  constructor(private fb: UntypedFormBuilder, private router: Router, private modalService: NgbModal,
    private centralService: CentralRegisterService, private httpService: HttpService,
    public validationService: ValidationService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getMinDate();
    this.getMinYear();
    this.getMaxYear();
    this.createForm();

    this.childDetails.childInfo.push({
      age: 'string',
      childDetailId: 0,
      childName: '',
      dob: '',
      familyDetailId: 0,
      sex: '',
      status: 'A'
    });

    let obj = this.httpService.dataAccessDTO;

    // API call for getting caste
    this.centralService.getCasteView(obj).subscribe((response: any) => {
      this.casteList = response.responseObject;
      console.log(this.casteList);
    })

    //API call for getting education details
    this.centralService.getEducationDetails(obj).subscribe((response: any) => {
      this.educationList = response.responseObject;
      console.log(this.educationList);
    })

    //API call for getting monthlyIncomeDetails
    this.centralService.monthlyIncomeDetails(obj).subscribe((response: any) => {
      this.monthlyIncomeDetails = response.responseObject;
      console.log(this.monthlyIncomeDetails);
    })

    //API call for getting religionDetails
    this.centralService.religionDetails(obj).subscribe((response: any) => {
      this.religionDetails = response.responseObject;
      console.log(this.religionDetails);
    })

    //API call for getting idCardDetails
    this.centralService.getIdCardDetails(obj).subscribe((response: any) => {
      this.cardDetails = response.responseObject;
      console.log(this.cardDetails);
    })

  }

  aadharcardValidation(event) {
    let data;
    if (event.keyCode !== 8 && event.keyCode !== 46) {
      data = this.aadhaarId.nativeElement.value
        .replace(/[^0-9]/g, '')
        .replace(/\W/gi, '')
        .replace(/(.{4})/g, '$1 ')
        .trim();
    } else {
      data = this.aadhaarId.nativeElement.value;
    }
    let q: any = this.aadhaarId.nativeElement;
    q.value = data;
    return data;
  }

  restrictZero(event: any) {
    if (event.target.value.length === 0 && event.key === '0') {
      event.preventDefault();
    }

  }

  firstChildCaps(event: any) {
    if (event.target.value) {
      event.target.value = event.target.value[0].toUpperCase() + event.target.value.slice(1);
    }
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

    let year = date.getUTCFullYear() - 5;
    this.minDate = year + "-" + month + "-" + toDate;
  }

  getMinYear() {
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
    this.minYear = year + "-" + month + "-" + toDate;
  }

  getMaxYear() {
    let date = new Date();
    let toDate: any = date.getDate();
    if (toDate < 10) {
      toDate = '0' + toDate;
    }

    let month: any = date.getMonth() + 1;
    if (month < 10) {
      month = "0" + month;
    }

    let year = date.getUTCFullYear() - 15;
    this.maxYear = year + "-" + month + "-" + toDate;

  }

  createForm() {
    this.centralRegister = this.fb.group({
      district: ['', Validators.required],
      block: ['', Validators.required],
      gp: ['', Validators.required],
      gram: ['', Validators.required],
      swasthyaSahayika: ['', Validators.required],
      family: ['', Validators.required],
      household: ['', Validators.required],
      firstName: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      middleName: ['', Validators.compose([Validators.minLength(3)])],
      lastName: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      age: ['', Validators.required],
      husbandName: ['', Validators.compose([Validators.required, Validators.minLength(3),
      Validators.maxLength(20)])],
      mobile: ['', Validators.compose([Validators.minLength(10), Validators.pattern("[6789][0-9]{9}")])],
      idtype: [''],
      aadhar: ['', Validators.compose([Validators.required, Validators.minLength(12), Validators.pattern("[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}")])],
      pan: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.pattern("[A-Z]{5}[0-9]{4}[A-Z]{1}")])],
      voter: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.pattern("[A-Z]{3}[0-9]{7}")])],
      religion: ['', Validators.required],
      caste: ['', Validators.required],
      monthly: ['', Validators.required],
      education: ['', Validators.required],
      children: [''],
      pregnant: ['', Validators.required],
      breastFeeding: ['', Validators.required],
      sanitary: this.haveSanitaryLatrine,
    });
  };

  get f() {
    return this.centralRegister.controls;
  }

  openModal(child) {

    this.modalContent = '';
    this.modalReference = this.modalService.open(child, {
      windowClass: 'Child-Create-ModalClass',
    });
  }

  addNewChild() {
    this.childDetails.childInfo.push({
      age: 'string',
      childDetailId: 0,
      childName: '',
      dob: '',
      familyDetailId: 0,
      sex: '',
      status: 'A'
    });
  }

  childModalDismiss() {
    this.modalReference?.close();
  }

  removeNewChild(i) {
    this.childDetails.childInfo.splice(i, 1);
  }

  changesanitary(e) {
    this.haveSanitaryLatrine = e.target.value;
  }

  saveChild() {
    console.log(this.childDetails);
    this.modalReference.close();
  }

  saveCentralRegister() {

    let item = this.centralRegister.value;
    let idValue = '';

    item.firstName = this.validationService.firstCaps(
      item.firstName.trim()
    );

    item.middleName = this.validationService.firstCaps(
      item.middleName.trim()
    );

    item.lastName = this.validationService.firstCaps(
      item.lastName.trim()
    );

    item.husbandName = this.validationService.firstCaps(
      item.husbandName.trim()
    );

    this.childDetails.childInfo.forEach(item => {
      if (item.childName == '') {
        this.childDetails.childInfo = [];
      }
    })

    if (item.idtype == 1) {
      idValue = item.aadhar;
    } else if (item.idtype == 2) {
      idValue = item.pan;
    } else if (item.idtype == 3) {
      idValue = item.voter;
    }

    const postBody = {

      dataAccessDTO: this.httpService.dataAccessDTO,
      houseHoldDetailDTO: {
        branchDTO: {
          branchId: 15,
          branchName: "Kestopur",
        },
        branchVillageMapId: 5,
        familyDetailDTOList: [
          {
            age: item.age,
            bbMicroGroupMembership: "N",
            casteTypeMasterDTO: {
              casteTypeDescription: this.casteList.filter((x) => x.casteTypeMasterId == item.caste)[0]?.casteTypeDescription,
              casteTypeMasterId: item.caste
            },
            educationalQualificationMasterDTO: {
              educationalQualificationMasterId: item.education,
              qualification: this.educationList.filter((x) => x.educationalQualificationMasterId == item.education)[0]?.qualification
            },
            familyDetailId: 0,
            familyNumber: "string",
            firstName: item.firstName,
            haveChild: "Y",
            haveSanitaryLatrine: item.haveSanitaryLatrine,
            householdDetailsId: 0,
            husbandOrGuardianName: item.husbandName,
            identityCardDTOList: [
              {
                familyIdentityCardMapId: 0,
                identityCardTypesMasterDTO: {
                  identityCardTypesMasterId: item.idtype ? item.idtype : 0,
                  name: this.cardDetails.filter((x) => x.identityCardTypesMasterId == item.idtype)[0]?.name ?
                    this.cardDetails.filter((x) => x.identityCardTypesMasterId == item.idtype)[0]?.name : ''
                },
                number: idValue
              }
            ],
            institutionalDelivery: "Y",
            lactetingMother: item.breastFeeding,
            lastName: item.lastName,
            middleName: item.middleName,
            mobileNumber: item.mobile,
            monthlyIncomeMasterDTO: {
              incomeRange: this.monthlyIncomeDetails.filter((x) => x.monthlyIncomeMasterId == item.monthly)[0]?.incomeRange,
              monthlyIncomeMasterId: item.monthly
            },
            occupationMasterDTO: {
              occupationDescription: "ocococo",
              occupationMasterId: 1
            },
            pregnantWoman: item.pregnant,
            religionMasterDTO: {
              religionMasterDescription: this.religionDetails.filter((x) => x.religionMasterId == item.religion)[0]?.religionMasterDescription,
              religionMasterId: item.religion
            },
            status: "A",
            totaFamilyMemberFemales: 1,
            totaFamilyMemberMales: 2,
            totaFamilyMemberSrcitizen: 3,
            totalNumberOfChildren: item.children,
            zeroToFiveChildDetailDTOList: this.childDetails.childInfo
          }
        ],
        houseHoldNumber: "string",
        householdDetailId: 0,
        status: "A",
        swasthyaSahayikaDTO: {
          name: "ABC",
          swasthyaSahayikaId: 1
        }
      }
    }
    console.log(postBody);


    if (!this.centralRegister.value.firstName) {
      this.showError('First Name should not be blank');
      return;
    } else if (this.centralRegister.value.firstName.length < 3) {
      this.showError('First Name should be at least 3 char long');
      return;
    }

    if (this.centralRegister.value.middleName.length) {
      if (this.centralRegister.value.middleName.length < 3) {
        this.showError('Middle Name should be at least 3 char long');
        return;
      }
    }


    if (!this.centralRegister.value.lastName) {
      this.showError('Last Name should not be blank');
      return;
    } else if (this.centralRegister.value.lastName.length < 3) {
      this.showError('Last Name should be at least 3 char long');
      return;
    }

    if (!this.centralRegister.value.age) {
      this.showError('Age should not be blank');
      return;
    }

    if (!this.centralRegister.value.husbandName) {
      this.showError('Husband Name should not be blank');
      return;
    } else if (this.centralRegister.value.husbandName.length < 3) {
      this.showError('Husband Name should be at least 3 char long');
      return;
    }


    if (this.centralRegister.value.mobile.length) {
      if (this.centralRegister.value.mobile.length != 10) {
        this.showError('Mobile Number should exactly contain 10 char');
        return;
      } else {
        let startChar = parseInt(
          this.centralRegister.value.mobile.substr(0, 1)
        );
        console.log(startChar);
        if (startChar < 6) {
          this.showError('Mobile Number must start from 6-9');
          return;
        }
      }

    }

    if (this.centralRegister.value.idtype) {
      if (this.idTypeField == 1) {
        if (!this.centralRegister.value.aadhar) {
          this.showError('Please Enter Aadhaar Card No.');
          return;
        }
      }

    }

    if (this.centralRegister.value.idtype) {
      if (this.idTypeField == 2) {
        if (!this.centralRegister.value.pan) {
          this.showError('Please Enter PAN Card No');
          return;
        }

      }
    }

    if (this.centralRegister.value.idtype) {
      if (this.idTypeField == 3) {
        if (!this.centralRegister.value.voter) {
          this.showError('Please Enter Voter Card No');
          return;
        }
      }
    }


    if (!this.centralRegister.value.religion) {
      this.showError('Please select Religion');
      return;
    }

    if (!this.centralRegister.value.caste) {
      this.showError('Please select Caste');
      return;
    }

    if (!this.centralRegister.value.monthly) {
      this.showError('Please select Monthly Income');
      return;
    }


    if (!this.centralRegister.value.education) {
      this.showError('Please select Education');
      return;
    }

    if (!this.centralRegister.value.pregnant) {
      this.showError('Please select Pregnancy');
      return;
    }

    if (!this.centralRegister.value.breastFeeding) {
      this.showError('Please select Breast-Feeding');
      return;
    }


    this.centralService.saveCentralRegister(postBody).subscribe((response: any) => {
      console.log(response);
      if (response.message == "Success") {
        this.showSuccess(response.message);
        this.createForm();
        this.childModalDismiss();
      } else {
        this.showError(response.message);
      }

    })

  }

  resetCentralRegister() {
    this.idTypeField = 0;
    this.haveSanitaryLatrine = 'N';
    this.createForm();
    this.childDetails.childInfo = [{
      age: 'string',
      childDetailId: 0,
      childName: '',
      dob: '',
      familyDetailId: 0,
      sex: '',
      status: 'A'
    }];

  }

  showSuccess(message) {
    this.toastr.success(message, 'Central Register Save', {
      timeOut: 3000,
    });
  }

  showError(message) {
    this.toastr.error(message, 'Central Register Save', {
      timeOut: 2000,
    });
  }

  IdType(IdType) {

    if (IdType == "") {
      this.idTypeField = 0;
    }
    else {
      this.idTypeField = IdType;
    }

    if (this.centralRegister.value.idtype == '') {
      this.centralRegister.controls.pan.setValue('');
      this.centralRegister.controls.voter.setValue('');
      this.centralRegister.controls.aadhar.setValue('');
    }

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

}

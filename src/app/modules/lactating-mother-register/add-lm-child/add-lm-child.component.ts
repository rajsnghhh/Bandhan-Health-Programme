import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../../core/http/http.service';
import { ValidationService } from '../../shared/services/validation.service';

@Component({
  selector: 'app-add-lm-child',
  templateUrl: './add-lm-child.component.html',
  styleUrls: ['./add-lm-child.component.css']
})
export class AddLmChildComponent implements OnInit {

  panelOpenState: boolean;
  childBirthForm: FormGroup;
  childDeath: any;
  after6m: boolean;
  after12m: boolean;
  after18m: boolean;
  after24m: boolean;
  childMuacList: Array<any> = [];
  muacRegisterId6month: any;
  muacRegisterId12month: any;
  muacRegisterId18month: any;
  muacRegisterId24month: any;
  editMode: boolean;
  viewMode: boolean;
  today: string = new Date(new Date().setDate(new Date().getDate())).toISOString().substring(0, 10);
  childDob: string;
  firstVisit: string;
  maxFirstVisit: string;

  constructor(public validationService: ValidationService, private fb: FormBuilder, private httpService: HttpService,
    private toaster: ToastrService, private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<AddLmChildComponent>) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    this.childDob = this.data?.childWiselactatingmotherList?.dob;

    let after6date = moment(this.childDob).add(6, 'M').format('YYYY-MM-DD');
    if (after6date > this.today) {
      this.maxFirstVisit = this.today;
    } else {
      this.maxFirstVisit = after6date;
    }

    this.editMode = this.data.editMode;
    this.panelOpenState = false;
    this.lmMuacList();
    this.createForm();
    this.disableForm();
    if (this.data.viewMode == true) {
      this.viewMode = this.data.viewMode;
      this.lmMuacList();
      this.childBirthForm.disable();
    }
  }

  /* get the childWiselactatingmotherMUACList & 
    set the value in form */
  lmMuacList() {
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      childId: this.data?.childWiselactatingmotherList?.childDetailId
    }
    this.http.post(`${this.httpService.baseURL}lactatingmotherregister/childWiselactatingmotherMUACList`, Dto).subscribe((res: any) => {
      this.childMuacList = res?.responseObject;
      this.muacRegisterId6month = this.childMuacList.find(month => month.muacForMonth == "6")?.muacRegisterId;
      this.muacRegisterId12month = this.childMuacList.find(month => month.muacForMonth == "12")?.muacRegisterId;
      this.muacRegisterId18month = this.childMuacList.find(month => month.muacForMonth == "18")?.muacRegisterId;
      this.muacRegisterId24month = this.childMuacList.find(month => month.muacForMonth == "24")?.muacRegisterId;
      if (this.data.editMode == false) {
        this.childBirthForm.reset();
      } else {
        this.childBirthForm.patchValue({
          place: this.data?.childWiselactatingmotherList?.childBasicStatusDto.placeOfDelivery,
          birthWeight: this.data?.childWiselactatingmotherList?.childBasicStatusDto.birthWeight,
          primaryImmunizationUpto12Completed: this.data?.childWiselactatingmotherList?.childBasicStatusDto?.primaryImmunizationUpto12Completed,
          primaryImmunizationUpto24Completed: this.data?.childWiselactatingmotherList?.childBasicStatusDto?.primaryImmunizationUpto24Completed,
          ebfUpto6Complete: this.data?.childWiselactatingmotherList?.childBasicStatusDto.ebfUpto6Complete,
          ebfUpto12Complete: this.data?.childWiselactatingmotherList?.childBasicStatusDto.ebfUpto12Complete,
          ebfUpto18Complete: this.data?.childWiselactatingmotherList?.childBasicStatusDto.ebfUpto18Complete,
          ebfUpto24Complete: this.data?.childWiselactatingmotherList?.childBasicStatusDto.ebfUpto24Complete,
          muacDate6: this.childMuacList.find(month => month.muacForMonth == "6")?.muacRecordDate,
          muacDate12: this.childMuacList.find(month => month.muacForMonth == "12")?.muacRecordDate,
          muacDate18: this.childMuacList.find(month => month.muacForMonth == "18")?.muacRecordDate,
          muacDate24: this.childMuacList.find(month => month.muacForMonth == "24")?.muacRecordDate,
          height6month: this.childMuacList.find(month => month.muacForMonth == "6")?.height,
          height12month: this.childMuacList.find(month => month.muacForMonth == "12")?.height,
          height18month: this.childMuacList.find(month => month.muacForMonth == "18")?.height,
          height24month: this.childMuacList.find(month => month.muacForMonth == "24")?.height,
          weight6month: this.childMuacList.find(month => month.muacForMonth == "6")?.weight,
          weight12month: this.childMuacList.find(month => month.muacForMonth == "12")?.weight,
          weight18month: this.childMuacList.find(month => month.muacForMonth == "18")?.weight,
          weight24month: this.childMuacList.find(month => month.muacForMonth == "24")?.weight,
          muac6month: this.childMuacList.find(month => month.muacForMonth == "6")?.muac,
          muac12month: this.childMuacList.find(month => month.muacForMonth == "12")?.muac,
          muac18month: this.childMuacList.find(month => month.muacForMonth == "18")?.muac,
          muac24month: this.childMuacList.find(month => month.muacForMonth == "24")?.muac,
          firstVisitDate: this.data?.childWiselactatingmotherList?.childBasicStatusDto.firstVisitDate,
          secondVisitDate: this.data?.childWiselactatingmotherList?.childBasicStatusDto.secondVisitDate,
        })
      }
    })
  }

  /* Disable the form field 
  depending on child age */
  disableForm() {
    let dateString = this.data?.childWiselactatingmotherList?.childAge;

    let y = dateString?.indexOf("year");
    let year = parseInt(dateString?.slice(0, y - 1));

    let m = dateString?.indexOf("r");
    let m1 = dateString?.indexOf("month");
    let month = parseInt(dateString?.slice(m + 2, m1 - 1));

    if (year <= 0 && month <= 6) {
      this.after6m = true;
      this.after12m = true;
      this.after18m = true;
      this.after24m = true;
    }
    else if (year <= 0 && month >= 6 && month <= 12) {
      this.after6m = false;
      this.after12m = true;
      this.after18m = true;
      this.after24m = true;
      this.childBirthForm.get('muac6month').setValidators(Validators.required);
      this.childBirthForm.get('muacDate6').setValidators(Validators.required);
    }
    else if (year >= 1 && year < 2 && month <= 6) {
      this.after6m = false;
      this.after12m = false;
      this.after18m = true;
      this.after24m = true;
      this.childBirthForm.get('muac6month').setValidators(Validators.required);
      this.childBirthForm.get('muac12month').setValidators(Validators.required);
      this.childBirthForm.get('muacDate6').setValidators(Validators.required);
      this.childBirthForm.get('muacDate12').setValidators(Validators.required);
    }
    else if (year >= 1 && year <= 2 && month >= 6 && month <= 12) {
      this.after6m = false;
      this.after12m = false;
      this.after18m = false;
      this.after24m = true;
      this.childBirthForm.get('muac6month').setValidators(Validators.required);
      this.childBirthForm.get('muac12month').setValidators(Validators.required);
      this.childBirthForm.get('muac18month').setValidators(Validators.required);
      this.childBirthForm.get('muacDate6').setValidators(Validators.required);
      this.childBirthForm.get('muacDate12').setValidators(Validators.required);
      this.childBirthForm.get('muacDate18').setValidators(Validators.required);
    }
    else if (year >= 2) {
      this.after6m = false;
      this.after12m = false;
      this.after18m = false;
      this.after24m = false;
      this.childBirthForm.get('muac6month').setValidators(Validators.required);
      this.childBirthForm.get('muac12month').setValidators(Validators.required);
      this.childBirthForm.get('muac18month').setValidators(Validators.required);
      this.childBirthForm.get('muac24month').setValidators(Validators.required);
      this.childBirthForm.get('muacDate6').setValidators(Validators.required);
      this.childBirthForm.get('muacDate12').setValidators(Validators.required);
      this.childBirthForm.get('muacDate18').setValidators(Validators.required);
      this.childBirthForm.get('muacDate24').setValidators(Validators.required);
    }
  }

  createForm() {
    this.childBirthForm = this.fb.group({
      place: [null],
      birthWeight: ['', this.birthWeightRange],
      primaryImmunizationUpto12Completed: [null],
      primaryImmunizationUpto24Completed: [null],
      ebfUpto6Complete: [null],
      ebfUpto12Complete: [null],
      ebfUpto18Complete: [null],
      ebfUpto24Complete: [null],
      muacDate6: [''],
      muacDate12: [''],
      muacDate18: [''],
      muacDate24: [''],
      height6month: ['', this.heightRange],
      height12month: ['', this.heightRange],
      height18month: ['', this.heightRange],
      height24month: ['', this.heightRange],
      weight6month: ['', this.weightRange],
      weight12month: ['', this.weightRange],
      weight18month: ['', this.weightRange],
      weight24month: ['', this.weightRange],
      muac6month: ['', Validators.compose([this.muacRange])],
      muac12month: ['', Validators.compose([this.muacRange])],
      muac18month: ['', Validators.compose([this.muacRange])],
      muac24month: ['', Validators.compose([this.muacRange])],
      firstVisitDate: ['', Validators.required],
      secondVisitDate: ['', Validators.required],
      checkChildDeath: [null],
      deathOfChildDate: [null],
      comment: [''],
    });
  }
  get f() {
    return this.childBirthForm.controls;
  }

  /* Restrict the second date depending on First visit date */
  restrictSecondDate(date) {
    this.firstVisit = moment(date).add(1, 'days').format('YYYY-MM-DD');
  }

  /* make child death comment required 
  depending on checkChildDeath field value */
  checkChildDeath(value) {
    this.childDeath = value;
    if (this.childBirthForm.get('checkChildDeath').value == 'Y') {
      this.childBirthForm.get('comment').setValidators(Validators.required);
    } else {
      this.childBirthForm.get('comment').clearAsyncValidators();
    }
  }
  /* MUAC range between 1 to 30, validation */
  muacRange(controls: AbstractControl): { [key: string]: any } | null {
    if (controls.value >= 1 && controls.value <= 30 || controls.value == null) {
      return null;
    }
    return { 'notInMuacRange': true };
  }
  /* weight range between 0 to 25, validation */
  weightRange(controls: AbstractControl): { [key: string]: any } | null {
    if (controls.value >= 0 && controls.value <= 25 || controls.value == null) {
      return null;
    }
    return { 'notInWeightRange': true };
  }
  /* Birth Weight range between 0 to 9, validation */
  birthWeightRange(controls: AbstractControl): { [key: string]: any } | null {
    if (controls.value >= 0 && controls.value <= 9 || controls.value == null) {
      return null;
    }
    return { 'notInBirthWeightRange': true };
  }
  /* Height range between 10 to 180, validation */
  heightRange(controls: AbstractControl): { [key: string]: any } | null {
    if (controls.value >= 10 && controls.value <= 180 || controls.value == null) {
      return null;
    }
    return { 'notInHeightRange': true };
  }

  /* Depending on condition form is Save or Edit */
  onSave() {

    if (!this.childBirthForm.value.firstVisitDate) {
      this.showError('Please Enter First Visit Date');
      return;
    }

    if (!this.childBirthForm.value.secondVisitDate) {
      this.showError('Please Enter Second Visit Date');
      return;
    }

    if (this.after6m == false) {
      if (!this.childBirthForm.value.muacDate6) {
        this.showError('Enter record date for after 6 months');
        return;
      }
      if (!this.childBirthForm.value.muac6month) {
        this.showError('Enter muac value for after 6 months');
        return;
      }
    }

    if (this.after12m == false) {
      if (!this.childBirthForm.value.muacDate6) {
        this.showError('Enter record date for after 6 months');
        return;
      }
      if (!this.childBirthForm.value.muac6month) {
        this.showError('Enter muac value for after 6 months');
        return;
      }
      if (!this.childBirthForm.value.muacDate12) {
        this.showError('Enter record date for after 12 months');
        return;
      }
      if (!this.childBirthForm.value.muac12month) {
        this.showError('Enter muac value for after 12 months');
        return;
      }
    }

    if (this.after18m == false) {
      if (!this.childBirthForm.value.muacDate6) {
        this.showError('Enter record date for after 6 months');
        return;
      }
      if (!this.childBirthForm.value.muac6month) {
        this.showError('Enter muac value for after 6 months');
        return;
      }
      if (!this.childBirthForm.value.muacDate12) {
        this.showError('Enter record date for after 12 months');
        return;
      }
      if (!this.childBirthForm.value.muac12month) {
        this.showError('Enter muac value for after 12 months');
        return;
      }
      if (!this.childBirthForm.value.muacDate18) {
        this.showError('Enter record date for after 18 months');
        return;
      }
      if (!this.childBirthForm.value.muac18month) {
        this.showError('Enter muac value for after 18 months');
        return;
      }
    }

    if (this.after24m == false) {
      if (!this.childBirthForm.value.muacDate6) {
        this.showError('Enter record date for after 6 months');
        return;
      }
      if (!this.childBirthForm.value.muac6month) {
        this.showError('Enter muac value for after 6 months');
        return;
      }
      if (!this.childBirthForm.value.muacDate12) {
        this.showError('Enter record date for after 12 months');
        return;
      }
      if (!this.childBirthForm.value.muac12month) {
        this.showError('Enter muac value for after 12 months');
        return;
      }
      if (!this.childBirthForm.value.muacDate18) {
        this.showError('Enter record date for after 18 months');
        return;
      }
      if (!this.childBirthForm.value.muac18month) {
        this.showError('Enter muac value for after 18 months');
        return;
      }

      if (!this.childBirthForm.value.muacDate24) {
        this.showError('Enter record date for after 24 months');
        return;
      }
      if (!this.childBirthForm.value.muac24month) {
        this.showError('Enter muac value for after 24 months');
        return;
      }
    }

    if (this.childBirthForm.valid) {
      if (this.data.editMode == false) {
        let Dto = {
          dataAccessDTO: this.httpService.dataAccessDTO,
          childBasicStatusDto: {
            childId: this.data.childWiselactatingmotherList.childDetailId,
            placeOfDelivery: this.childBirthForm.value.place,
            birthWeight: this.childBirthForm.value.birthWeight,
            firstVisitDate: this.childBirthForm.value.firstVisitDate,
            secondVisitDate: this.childBirthForm.value.secondVisitDate,
            ebfUpto6Complete: this.childBirthForm.value.ebfUpto6Complete,
            primaryImmunizationUpto12Completed: this.childBirthForm.value.primaryImmunizationUpto12Completed,
            ebfUpto12Complete: this.childBirthForm.value.ebfUpto12Complete,
            ebfUpto18Complete: this.childBirthForm.value.ebfUpto18Complete,
            primaryImmunizationUpto24Completed: this.childBirthForm.value.primaryImmunizationUpto24Completed,
            ebfUpto24Complete: this.childBirthForm.value.ebfUpto24Complete,
          },

          muacDataList: [{
            muacRegisterId: 0,
            childId: this.data.childWiselactatingmotherList.childDetailId,
            height: this.childBirthForm.value.height6month == null ? "0" : this.childBirthForm.value.height6month,
            weight: this.childBirthForm.value.weight6month == null ? "0" : this.childBirthForm.value.weight6month,
            muac: this.childBirthForm.value.muac6month == null ? "0" : this.childBirthForm.value.muac6month,
            active_flag: "A",
            muacForMonth: "6",
            muacRecordDate: this.childBirthForm.value.muacDate6
          },
          {
            muacRegisterId: 0,
            childId: this.data.childWiselactatingmotherList.childDetailId,
            height: this.childBirthForm.value.height12month == null ? "0" : this.childBirthForm.value.height12month,
            weight: this.childBirthForm.value.weight12month == null ? "0" : this.childBirthForm.value.weight12month,
            muac: this.childBirthForm.value.muac12month == null ? "0" : this.childBirthForm.value.muac12month,
            active_flag: "A",
            muacForMonth: "12",
            muacRecordDate: this.childBirthForm.value.muacDate12
          },
          {
            muacRegisterId: 0,
            childId: this.data.childWiselactatingmotherList.childDetailId,
            height: this.childBirthForm.value.height18month == null ? "0" : this.childBirthForm.value.height18month,
            weight: this.childBirthForm.value.weight18month == null ? "0" : this.childBirthForm.value.weight18month,
            muac: this.childBirthForm.value.muac18month == null ? "0" : this.childBirthForm.value.muac18month,
            active_flag: "A",
            muacForMonth: "18",
            muacRecordDate: this.childBirthForm.value.muacDate18
          },
          {
            muacRegisterId: 0,
            childId: this.data.childWiselactatingmotherList.childDetailId,
            height: this.childBirthForm.value.height24month == null ? "0" : this.childBirthForm.value.height24month,
            weight: this.childBirthForm.value.weight24month == null ? "0" : this.childBirthForm.value.weight24month,
            muac: this.childBirthForm.value.muac24month == null ? "0" : this.childBirthForm.value.muac24month,
            active_flag: "A",
            muacForMonth: "24",
            muacRecordDate: this.childBirthForm.value.muacDate24
          }
          ],
          deadChildRegisterDto: {
            deathOfChildDate: this.childBirthForm.value.deathOfChildDate,
            comment: this.childBirthForm.value.comment ? this.childBirthForm.value.comment : null
          }
        }
        console.log(Dto, 'reqAdd')
        this.http.post(`${this.httpService.baseURL}lactatingmotherregister/saveOrUpdateLactatingMotherData`, Dto).subscribe((res: any) => {
          console.log(res, 'responseAdd');
          if (res.status == true) {
            this.showSuccess(res.message);
            this.dialogRef.close();
          }
          else {
            this.showError(res.message);
          }
        });
      } else {
        let Dto = {
          dataAccessDTO: this.httpService.dataAccessDTO,
          childBasicStatusDto: {
            childId: this.data.childWiselactatingmotherList.childDetailId,
            placeOfDelivery: this.childBirthForm.value.place,
            birthWeight: this.childBirthForm.value.birthWeight,
            firstVisitDate: this.childBirthForm.value.firstVisitDate,
            secondVisitDate: this.childBirthForm.value.secondVisitDate,
            ebfUpto6Complete: this.childBirthForm.value.ebfUpto6Complete,
            primaryImmunizationUpto12Completed: this.childBirthForm.value.primaryImmunizationUpto12Completed,
            ebfUpto12Complete: this.childBirthForm.value.ebfUpto12Complete,
            ebfUpto18Complete: this.childBirthForm.value.ebfUpto18Complete,
            primaryImmunizationUpto24Completed: this.childBirthForm.value.primaryImmunizationUpto24Completed,
            ebfUpto24Complete: this.childBirthForm.value.ebfUpto24Complete,
          },

          muacDataList: [{
            muacRegisterId: this.muacRegisterId6month ? this.muacRegisterId6month : 0,
            childId: this.data.childWiselactatingmotherList.childDetailId,
            height: this.childBirthForm.value.height6month == null ? "0" : this.childBirthForm.value.height6month,
            weight: this.childBirthForm.value.weight6month == null ? "0" : this.childBirthForm.value.weight6month,
            muac: this.childBirthForm.value.muac6month == null ? "0" : this.childBirthForm.value.muac6month,
            active_flag: "A",
            muacForMonth: "6",
            muacRecordDate: this.childBirthForm.value.muacDate6
          },
          {
            muacRegisterId: this.muacRegisterId12month ? this.muacRegisterId12month : 0,
            childId: this.data.childWiselactatingmotherList.childDetailId,
            height: this.childBirthForm.value.height12month == null ? "0" : this.childBirthForm.value.height12month,
            weight: this.childBirthForm.value.weight12month == null ? "0" : this.childBirthForm.value.weight12month,
            muac: this.childBirthForm.value.muac12month == null ? "0" : this.childBirthForm.value.muac12month,
            active_flag: "A",
            muacForMonth: "12",
            muacRecordDate: this.childBirthForm.value.muacDate12
          },
          {
            muacRegisterId: this.muacRegisterId18month ? this.muacRegisterId18month : 0,
            childId: this.data.childWiselactatingmotherList.childDetailId,
            height: this.childBirthForm.value.height18month == null ? "0" : this.childBirthForm.value.height18month,
            weight: this.childBirthForm.value.weight18month == null ? "0" : this.childBirthForm.value.weight18month,
            muac: this.childBirthForm.value.muac18month == null ? "0" : this.childBirthForm.value.muac18month,
            active_flag: "A",
            muacForMonth: "18",
            muacRecordDate: this.childBirthForm.value.muacDate18
          },
          {
            muacRegisterId: this.muacRegisterId24month ? this.muacRegisterId24month : 0,
            childId: this.data.childWiselactatingmotherList.childDetailId,
            height: this.childBirthForm.value.height24month == null ? "0" : this.childBirthForm.value.height24month,
            weight: this.childBirthForm.value.weight24month == null ? "0" : this.childBirthForm.value.weight24month,
            muac: this.childBirthForm.value.muac24month == null ? "0" : this.childBirthForm.value.muac24month,
            active_flag: "A",
            muacForMonth: "24",
            muacRecordDate: this.childBirthForm.value.muacDate24
          }
          ],
          deadChildRegisterDto: {
            deathOfChildDate: this.childBirthForm.value.deathOfChildDate,
            comment: this.childBirthForm.value.comment ? this.childBirthForm.value.comment : null
          }
        }
        console.log(Dto, 'reqEdit')
        this.http.post(`${this.httpService.baseURL}lactatingmotherregister/saveOrUpdateLactatingMotherData`, Dto).subscribe((res: any) => {
          console.log(res, 'responseedit');

          if (res.status == true) {
            this.showSuccess(res.message);
            this.dialogRef.close();
          }
          else {
            this.showError(res.message);
          }
        });

      }
    }
  }

  /* Close the dialog pop-up */
  closeDialog() {
    this.dialogRef.close();
  }

  /* Show success message toaster */
  showSuccess(message) {
    this.toaster.success(message, 'Child Information Save', {
      timeOut: 3000,
    });
  }

  /* Show Error message toaster */
  showError(message) {
    this.toaster.error(message, 'Error', {
      timeOut: 3000,
    });
  }

  restrictTypeOfDate() {
    return false;
  }
}

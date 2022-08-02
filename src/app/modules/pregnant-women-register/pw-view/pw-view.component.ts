import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../../core/http/http.service';
import { ValidationService } from '../../shared/services/validation.service';
import { SidebarService } from '../../shared/sidebar/sidebar.service';

@Component({
  selector: 'app-pw-view',
  templateUrl: './pw-view.component.html',
  styleUrls: ['./pw-view.component.css']
})
export class PwViewComponent implements OnInit {

  pwRegisterForm: FormGroup;
  checkAncComplete: boolean;
  Anc1stMin: any;
  Anc2ndMin: any;
  Anc3rdMin: any;
  Anc4thMin: any;
  deliveryStatusNo: boolean;
  deliveryStatusYes: boolean;
  showMessage: any;
  actualDeliveryDate: any;
  MotherDeath: any;
  miscarriage: boolean;
  abortion: boolean;
  today: string = new Date(new Date().setDate(new Date().getDate())).toISOString().substring(0, 10);
  maxEdd: string;
  miscarriageAbortionMinDate: string;
  viewMode: boolean;

  constructor(private http: HttpClient, private httpService: HttpService, private fb: FormBuilder,
    public validationService: ValidationService, private toaster: ToastrService, private sidebarService: SidebarService,
    @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<PwViewComponent>) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    this.createForm();
    console.log(this.data.pregnantWomanRegisterData, 'editpage');

    this.editMode();

    if (this.data.viewMode) {
      this.viewMode = this.data.viewMode;
      this.editMode();
      this.pwRegisterForm.disable();
    }
  }

  editMode() {
    this.pwRegisterForm.patchValue({
      initialWeight: this.data.pregnantWomanRegisterData.initialWeight,
      lastMenstrualDate: this.data.pregnantWomanRegisterData.lastMenstrualPeriod,
      expectedDeliveryDate: this.data.pregnantWomanRegisterData.expectedDateOfDelivery,
      ancComplete: this.data.pregnantWomanRegisterData.antenatalCheckup,
      anc1st: this.data.pregnantWomanRegisterData.firstAncCheckup,
      anc2nd: this.data.pregnantWomanRegisterData.secondAncCheckup,
      anc3rd: this.data.pregnantWomanRegisterData.thirdAncCheckup,
      anc4th: this.data.pregnantWomanRegisterData.fourthAncCheckup,
      pregnancyComplication: this.data.pregnantWomanRegisterData.pregnancyComplication,
      beforeDeliveryWeight: this.data.pregnantWomanRegisterData.weightBeforeDelivery,
      delivery: this.data.pregnantWomanRegisterData.delivery,
      deliveryNo: this.data.pregnantWomanRegisterData.miscarriage != null ? 'miscarriage' : this.data.pregnantWomanRegisterData.abortion != null ? 'abortion' : '',
      miscarriage: this.data.pregnantWomanRegisterData.miscarriage,
      abortion: this.data.pregnantWomanRegisterData.abortion,
      actualDeliveryDate: this.data.pregnantWomanRegisterData.actualDateOfDelivery,
      liveStill: this.data.pregnantWomanRegisterData.livebirthOrStillbirth,
      deliveryPlace: this.data.pregnantWomanRegisterData.placeOfDelivery,
      womenDeath: this.data.pregnantWomanRegisterData?.familyDeathRegister?.deathStatus == null ? 'N' : 'Y',
      deathTime: this.data.pregnantWomanRegisterData?.familyDeathRegister?.timeOfDeath,
      deathReason: this.data.pregnantWomanRegisterData?.familyDeathRegister?.familyDeathComment
    })

    if (this.data.pregnantWomanRegisterData.antenatalCheckup == 'Y') {
      this.checkAncComplete = true;
    } else {
      this.checkAncComplete = false;
    }

    if (this.data.pregnantWomanRegisterData.delivery == 'Y') {
      this.checkDeliveryStatus('Y');
      this.enableActualDelivery();
    }
    if (this.data.pregnantWomanRegisterData.delivery == 'N') {
      this.checkDeliveryStatus('N');
      let value = (this.data.pregnantWomanRegisterData.miscarriage != null) ? 'miscarriage' : 'abortion'
      if (value == 'miscarriage') {
        this.pwRegisterForm.controls['miscarriage'].enable();
        this.pwRegisterForm.controls['abortion'].disable();
        this.pwRegisterForm.get('miscarriage').setValidators(Validators.required);
        this.pwRegisterForm.get('abortion').clearAsyncValidators();
        this.pwRegisterForm.controls['abortion'].reset();
        this.miscarriage = true;
        this.abortion = false;
      } else if (value == 'abortion') {
        this.pwRegisterForm.controls['miscarriage'].disable();
        this.pwRegisterForm.controls['abortion'].enable();
        this.pwRegisterForm.get('abortion').setValidators(Validators.required);
        this.pwRegisterForm.get('miscarriage').clearAsyncValidators();
        this.pwRegisterForm.controls['miscarriage'].reset();
        this.miscarriage = false;
        this.abortion = true;
      }
    }
    this.enableDeliveryStatusNo();

    if (this.data.pregnantWomanRegisterData.lastMenstrualPeriod != null) {
      this.actualDeliveryDate = moment(this.data.pregnantWomanRegisterData.lastMenstrualPeriod).add(1, 'days').format('YYYY-MM-DD');
      this.miscarriageAbortionMinDate = moment(this.data.pregnantWomanRegisterData.lastMenstrualPeriod).add(1, 'days').format('YYYY-MM-DD');
      let after12date = moment(this.data.pregnantWomanRegisterData.lastMenstrualPeriod).add(12, 'M').format('YYYY-MM-DD');
      this.maxEdd = after12date;
      this.Anc1stMin = moment(this.data.pregnantWomanRegisterData.lastMenstrualPeriod).add(1, 'days').format('YYYY-MM-DD');
    }

    if (this.data.pregnantWomanRegisterData.firstAncCheckup != null) {
      this.actualDeliveryDate = this.data.pregnantWomanRegisterData.firstAncCheckup;
      this.Anc2ndMin = moment(this.data.pregnantWomanRegisterData.firstAncCheckup).add(1, 'days').format('YYYY-MM-DD');
      if (this.pwRegisterForm.controls['anc1st'].value != null && this.pwRegisterForm.controls['anc2nd'].value != null &&
        this.pwRegisterForm.controls['anc3rd'].value != null) {
        this.showMessage = true;
      } else {
        this.showMessage = false;
      }
    }

    if (this.data.pregnantWomanRegisterData.secondAncCheckup != null) {
      this.actualDeliveryDate = this.data.pregnantWomanRegisterData.secondAncCheckup;
      this.Anc3rdMin = moment(this.data.pregnantWomanRegisterData.secondAncCheckup).add(1, 'days').format('YYYY-MM-DD');
      if (this.pwRegisterForm.controls['anc1st'].value != null && this.pwRegisterForm.controls['anc2nd'].value != null &&
        this.pwRegisterForm.controls['anc3rd'].value != null) {
        this.showMessage = true;
      } else {
        this.showMessage = false;
      }
    }

    if (this.data.pregnantWomanRegisterData.thirdAncCheckup != null) {
      this.actualDeliveryDate = this.data.pregnantWomanRegisterData.thirdAncCheckup;
      this.Anc4thMin = moment(this.data.pregnantWomanRegisterData.thirdAncCheckup).add(1, 'days').format('YYYY-MM-DD');
      if (this.pwRegisterForm.controls['anc1st'].value != null && this.pwRegisterForm.controls['anc2nd'].value != null &&
        this.pwRegisterForm.controls['anc3rd'].value != null) {
        this.showMessage = true;
      } else {
        this.showMessage = false;
      }
    }

    if (this.data.pregnantWomanRegisterData.fourthAncCheckup != null) {
      this.actualDeliveryDate = moment(this.data.pregnantWomanRegisterData.fourthAncCheckup).add(1, 'days').format('YYYY-MM-DD');
      if (this.pwRegisterForm.controls['anc1st'].value != null && this.pwRegisterForm.controls['anc2nd'].value != null &&
        this.pwRegisterForm.controls['anc3rd'].value != null) {
        this.showMessage = true;
      } else {
        this.showMessage = false;
      }
    }

    if (this.data.pregnantWomanRegisterData?.familyDeathRegister?.deathStatus == 'Y') {
      this.checkMotherDeath(this.data.pregnantWomanRegisterData?.familyDeathRegister?.deathStatus);
    }
  }

  createForm() {
    this.pwRegisterForm = this.fb.group({
      initialWeight: [null, this.weightRange],
      lastMenstrualDate: [null, Validators.required],
      expectedDeliveryDate: [null],
      ancComplete: [null],
      anc1st: [null],
      anc2nd: [null],
      anc3rd: [null],
      anc4th: [null],
      pregnancyComplication: [''],
      beforeDeliveryWeight: [null, this.weightRange],
      delivery: [''],
      deliveryNo: [''],
      miscarriage: [''],
      abortion: [''],
      actualDeliveryDate: [''],
      liveStill: [null],
      deliveryPlace: [null],
      womenDeath: ['N'],
      deathTime: [null],
      deathReason: [null],
    });
  }
  get f() {
    return this.pwRegisterForm.controls;
  }

  weightRange(controls: AbstractControl): { [key: string]: any } | null {
    if (controls.value >= 20 && controls.value <= 200 || controls.value == null) {
      return null;
    }
    return { 'notInWeightRange': true };
  }

  restrictAncDate(value) {
    this.actualDeliveryDate = moment(value).add(1, 'days').format('YYYY-MM-DD');
    this.miscarriageAbortionMinDate = moment(value).add(1, 'days').format('YYYY-MM-DD');
    let after12date = moment(value).add(12, 'M').format('YYYY-MM-DD');
    this.maxEdd = after12date;
    this.Anc1stMin = moment(value).add(1, 'days').format('YYYY-MM-DD');
    this.pwRegisterForm.get('expectedDeliveryDate').reset();
    this.pwRegisterForm.get('anc1st').reset();
    this.pwRegisterForm.get('anc2nd').reset();
    this.pwRegisterForm.get('anc3rd').reset();
    this.pwRegisterForm.get('anc4th').reset();
    this.pwRegisterForm.get('actualDeliveryDate').reset();
  }

  restrictTypeOfDate() {
    return false;
  }

  checkAnc(value) {
    if (value == 'Y') {
      this.checkAncComplete = true;
    } else {
      this.checkAncComplete = false;
    }
  }

  checkDeliveryStatus(value) {
    if (value == 'N') {
      this.deliveryStatusNo = true;
      this.deliveryStatusYes = false;
      this.pwRegisterForm.controls['deliveryNo'].enable();
      this.pwRegisterForm.get('deliveryNo').setValidators(Validators.required);
      this.pwRegisterForm.get('actualDeliveryDate').clearAsyncValidators();
      this.pwRegisterForm.get('liveStill').clearValidators();
      this.pwRegisterForm.get('deliveryPlace').clearValidators();
      this.pwRegisterForm.controls['actualDeliveryDate'].disable();
      this.pwRegisterForm.controls['liveStill'].disable();
      this.pwRegisterForm.controls['deliveryPlace'].disable();
    } else if (value == 'Y') {
      this.pwRegisterForm.get('deliveryNo').clearValidators();
      this.pwRegisterForm.controls['deliveryNo'].disable();
      this.deliveryStatusYes = true;
      this.deliveryStatusNo = false;
      this.pwRegisterForm.get('miscarriage').clearAsyncValidators();
      this.pwRegisterForm.get('abortion').clearAsyncValidators();
      this.pwRegisterForm.controls['miscarriage'].disable();
      this.pwRegisterForm.controls['abortion'].disable();
      this.enableActualDelivery();
    } else {
      this.deliveryStatusNo = false;
      this.deliveryStatusYes = false;
      this.pwRegisterForm.get('deliveryNo').clearAsyncValidators();
      this.pwRegisterForm.get('miscarriage').clearAsyncValidators();
      this.pwRegisterForm.get('abortion').clearAsyncValidators();
      this.pwRegisterForm.get('actualDeliveryDate').clearAsyncValidators();
      this.pwRegisterForm.get('liveStill').clearAsyncValidators();
      this.pwRegisterForm.get('deliveryPlace').clearAsyncValidators();
    }
  }

  checkDeliveryStatusNo(value) {
    this.enableDeliveryStatusNo();
    if (value == 'miscarriage') {
      this.pwRegisterForm.controls['miscarriage'].enable();
      this.pwRegisterForm.controls['abortion'].disable();
      this.pwRegisterForm.get('miscarriage').setValidators(Validators.required);
      this.pwRegisterForm.get('abortion').clearAsyncValidators();
      this.pwRegisterForm.controls['miscarriage'].reset();
      this.pwRegisterForm.controls['abortion'].reset();
      this.miscarriage = true;
      this.abortion = false;
    } else if (value == 'abortion') {
      this.pwRegisterForm.controls['miscarriage'].disable();
      this.pwRegisterForm.controls['abortion'].enable();
      this.pwRegisterForm.get('abortion').setValidators(Validators.required);
      this.pwRegisterForm.get('miscarriage').clearAsyncValidators();
      this.pwRegisterForm.controls['miscarriage'].reset();
      this.pwRegisterForm.controls['abortion'].reset();
      this.miscarriage = false;
      this.abortion = true;
    } else {
      this.miscarriage = false;
      this.abortion = false;
      this.pwRegisterForm.get('miscarriage').clearAsyncValidators();
      this.pwRegisterForm.get('abortion').clearAsyncValidators();
    }
  }

  enableDeliveryStatusNo() {
    if (this.pwRegisterForm.controls['lastMenstrualDate'].value == null) {
      this.pwRegisterForm.controls['miscarriage'].disable();
      this.pwRegisterForm.controls['abortion'].disable();
    } else {
      this.pwRegisterForm.controls['miscarriage'].enable();
      this.pwRegisterForm.controls['abortion'].enable();
    }
  }

  anc1stDate(value) {
    this.pwRegisterForm.controls.anc2nd.setValue(null);
    this.pwRegisterForm.controls.anc3rd.setValue(null);
    this.pwRegisterForm.controls.anc4th.setValue(null);
    this.actualDeliveryDate = moment(value).add(1, 'days').format('YYYY-MM-DD');
    this.Anc2ndMin = moment(value).add(1, 'days').format('YYYY-MM-DD');
    this.pwRegisterForm.get('actualDeliveryDate').reset();
    if (this.pwRegisterForm.controls['anc1st'].value != null && this.pwRegisterForm.controls['anc2nd'].value != null &&
      this.pwRegisterForm.controls['anc3rd'].value != null) {
      this.showMessage = true;
    } else {
      this.showMessage = false;
    }
  }
  anc2ndDate(value) {
    this.pwRegisterForm.controls.anc3rd.setValue(null);
    this.pwRegisterForm.controls.anc4th.setValue(null);
    this.actualDeliveryDate = moment(value).add(1, 'days').format('YYYY-MM-DD');
    this.Anc3rdMin = moment(value).add(1, 'days').format('YYYY-MM-DD');
    this.pwRegisterForm.get('actualDeliveryDate').reset();
    if (this.pwRegisterForm.controls['anc1st'].value != null && this.pwRegisterForm.controls['anc2nd'].value != null &&
      this.pwRegisterForm.controls['anc3rd'].value != null) {
      this.showMessage = true;
    } else {
      this.showMessage = false;
    }
  }
  anc3rdDate(value) {
    this.pwRegisterForm.controls.anc4th.setValue(null);
    this.actualDeliveryDate = moment(value).add(1, 'days').format('YYYY-MM-DD');
    this.Anc4thMin = moment(value).add(1, 'days').format('YYYY-MM-DD');
    this.pwRegisterForm.get('actualDeliveryDate').reset();
    if (this.pwRegisterForm.controls['anc1st'].value != null && this.pwRegisterForm.controls['anc2nd'].value != null &&
      this.pwRegisterForm.controls['anc3rd'].value != null) {
      this.showMessage = true;
    } else {
      this.showMessage = false;
    }
  }
  anc4thDate(value) {
    this.actualDeliveryDate = moment(value).add(1, 'days').format('YYYY-MM-DD');
    this.pwRegisterForm.get('actualDeliveryDate').reset();
    if (this.pwRegisterForm.controls['anc1st'].value != null && this.pwRegisterForm.controls['anc2nd'].value != null &&
      this.pwRegisterForm.controls['anc3rd'].value != null) {
      this.showMessage = true;
    } else {
      this.showMessage = false;
    }
  }

  enableActualDelivery() {
    if (this.pwRegisterForm.controls['initialWeight'].value == null || this.pwRegisterForm.controls['lastMenstrualDate'].value == null ||
      this.pwRegisterForm.controls['expectedDeliveryDate'].value == null || this.pwRegisterForm.controls['beforeDeliveryWeight'].value == null ||
      this.pwRegisterForm.controls['ancComplete'].value == 'N' || this.pwRegisterForm.controls['ancComplete'].value == null) {
      this.pwRegisterForm.get('actualDeliveryDate').clearAsyncValidators();
      this.pwRegisterForm.get('liveStill').clearAsyncValidators();
      this.pwRegisterForm.get('deliveryPlace').clearAsyncValidators();
      this.pwRegisterForm.controls['actualDeliveryDate'].disable();
      this.pwRegisterForm.controls['liveStill'].disable();
      this.pwRegisterForm.controls['deliveryPlace'].disable();
      this.pwRegisterForm.controls['actualDeliveryDate'].reset();
      this.pwRegisterForm.controls['liveStill'].reset();
      this.pwRegisterForm.controls['deliveryPlace'].reset();
    } else {
      this.pwRegisterForm.controls['actualDeliveryDate'].enable();
      this.pwRegisterForm.controls['liveStill'].enable();
      this.pwRegisterForm.controls['deliveryPlace'].enable();
      this.pwRegisterForm.get('actualDeliveryDate').setValidators(Validators.required);
      this.pwRegisterForm.get('liveStill').setValidators(Validators.required);
      this.pwRegisterForm.get('deliveryPlace').setValidators(Validators.required);
    }
  }

  enableliveStillDelivery() {
    // if (this.pwRegisterForm.controls['actualDeliveryDate'].value == null) {
    //   this.pwRegisterForm.controls['liveStill'].disable();
    //   this.pwRegisterForm.controls['deliveryPlace'].disable();
    // } else {
    //   this.pwRegisterForm.controls['liveStill'].enable();
    //   this.pwRegisterForm.controls['deliveryPlace'].enable();
    //   this.pwRegisterForm.get('liveStill').setValidators(Validators.required);
    //   this.pwRegisterForm.get('deliveryPlace').setValidators(Validators.required);
    // }
  }

  checkMotherDeath(value) {
    this.MotherDeath = value;
    if (this.pwRegisterForm.get('womenDeath').value == 'Y') {
      this.pwRegisterForm.get('deathTime').setValidators(Validators.required);
      this.pwRegisterForm.get('deathReason').setValidators(Validators.required);
    } else {
      this.pwRegisterForm.get('deathTime').clearAsyncValidators();
      this.pwRegisterForm.get('deathReason').clearAsyncValidators();
      this.pwRegisterForm.get('deathTime').reset();
      this.pwRegisterForm.get('deathReason').reset();
    }
  }

  onSave() {
    console.log(this.pwRegisterForm)
    this.pwRegisterForm.markAllAsTouched();

    if (this.pwRegisterForm.get('delivery').value == 'Y' && this.pwRegisterForm.get('actualDeliveryDate').value == null) {
      this.showError('Please fill-up Actual Date of Delivery ');
      return;
    }

    if (this.pwRegisterForm.valid) {
      if (this.data.createMode == true) {
        let Dto = {
          dataAccessDTO: this.httpService.dataAccessDTO,
          pregnantWomanRegisterDto: {
            pregnantWomanRegisterId: 0,
            familyDetailId: this.data.pregnantWomanRegisterData.familyDetailId,
            initialWeight: this.pwRegisterForm.value.initialWeight,
            lastMenstrualPeriod: this.pwRegisterForm.value.lastMenstrualDate,
            expectedDateOfDelivery: this.pwRegisterForm.value.expectedDeliveryDate,
            antenatalCheckup: this.pwRegisterForm.value.ancComplete,
            firstAncCheckup: this.pwRegisterForm.value.anc1st,
            secondAncCheckup: this.pwRegisterForm.value.anc2nd,
            thirdAncCheckup: this.pwRegisterForm.value.anc3rd,
            fourthAncCheckup: this.pwRegisterForm.value.anc4th,
            pregnancyComplication: this.pwRegisterForm.value.pregnancyComplication,
            weightBeforeDelivery: this.pwRegisterForm.value.beforeDeliveryWeight,
            delivery: this.pwRegisterForm.value.delivery,
            miscarriage: this.pwRegisterForm.value.miscarriage,
            abortion: this.pwRegisterForm.value.abortion,
            actualDateOfDelivery: this.pwRegisterForm.value.actualDeliveryDate ? this.pwRegisterForm.value.actualDeliveryDate : null,
            livebirthOrStillbirth: this.pwRegisterForm.value.liveStill ? this.pwRegisterForm.value.liveStill : null,
            placeOfDelivery: this.pwRegisterForm.value.deliveryPlace ? this.pwRegisterForm.value.deliveryPlace : null
          },
          familyDeathRegister: {
            deathStatus: this.pwRegisterForm.value.womenDeath,
            familyDeathComment: this.pwRegisterForm.value.deathReason,
            family_death_register_id: 0,
            timeOfDeath: this.pwRegisterForm.value.deathTime,
          }
        }
        console.log(Dto, 'reqAdd')
        this.http.post(`${this.httpService.baseURL}pwr/saveOrUpdatePregnantWomanDetails`, Dto).subscribe((res: any) => {
          console.log(res, 'responseAdd')
          if (res.status) {
            this.dialogRef.close();
            this.showSuccess('Success');
          } else {
            this.dialogRef.close();
            this.showError('Error');
          }
        }, error => {
          this.dialogRef.close();
          this.showError('Error')
        });
      } else {
        let Dto = {
          dataAccessDTO: this.httpService.dataAccessDTO,
          pregnantWomanRegisterDto: {
            pregnantWomanRegisterId: this.data.pregnantWomanRegisterData.pregnantWomanRegisterId,
            familyDetailId: this.data.familyDetailId,
            initialWeight: this.pwRegisterForm.value.initialWeight,
            lastMenstrualPeriod: this.pwRegisterForm.value.lastMenstrualDate,
            expectedDateOfDelivery: this.pwRegisterForm.value.expectedDeliveryDate,
            antenatalCheckup: this.pwRegisterForm.value.ancComplete,
            firstAncCheckup: this.pwRegisterForm.value.anc1st,
            secondAncCheckup: this.pwRegisterForm.value.anc2nd,
            thirdAncCheckup: this.pwRegisterForm.value.anc3rd,
            fourthAncCheckup: this.pwRegisterForm.value.anc4th,
            pregnancyComplication: this.pwRegisterForm.value.pregnancyComplication,
            weightBeforeDelivery: this.pwRegisterForm.value.beforeDeliveryWeight,
            delivery: (this.pwRegisterForm.value.actualDeliveryDate || this.pwRegisterForm.value.miscarriage || this.pwRegisterForm.value.abortion) ? this.pwRegisterForm.value.delivery : null,
            miscarriage: this.pwRegisterForm.value.miscarriage == undefined ? null : this.pwRegisterForm.value.miscarriage,
            abortion: this.pwRegisterForm.value.abortion == undefined ? null : this.pwRegisterForm.value.abortion,
            actualDateOfDelivery: this.pwRegisterForm.value.actualDeliveryDate ? this.pwRegisterForm.value.actualDeliveryDate : null,
            livebirthOrStillbirth: this.pwRegisterForm.value.liveStill ? this.pwRegisterForm.value.liveStill : null,
            placeOfDelivery: this.pwRegisterForm.value.deliveryPlace ? this.pwRegisterForm.value.deliveryPlace : null
          },
          familyDeathRegister: {
            deathStatus: this.pwRegisterForm.value.womenDeath,
            familyDeathComment: this.pwRegisterForm.value.deathReason,
            family_death_register_id: this.data.pregnantWomanRegisterData.familyDeathRegister == null
              ? 0
              : this.data.pregnantWomanRegisterData.familyDeathRegister.deathStatus == 'Y'
                ? this.data.pregnantWomanRegisterData.familyDeathRegister.family_death_register_id
                : 0,
            timeOfDeath: this.pwRegisterForm.value.deathTime,
          }
        }
        console.log(Dto, 'reqEdit')
        this.http.post(`${this.httpService.baseURL}pwr/saveOrUpdatePregnantWomanDetails`, Dto).subscribe((res: any) => {
          console.log(res, 'responseEdit')
          if (res.status) {
            this.dialogRef.close();
            this.showSuccess('Success');
          } else {
            this.dialogRef.close();
            this.showError('Error');
          }
        }, error => {
          this.dialogRef.close();
          this.showError('Error')
        });

      }
    } else {
      this.showError('Please fill-up the form correctly ');
    }


  }



  closeDialog() {
    this.dialogRef.close();
  }
  /* Show success message toaster */
  showSuccess(message) {
    this.toaster.success(message, 'Pregnant Woman Details Save', {
      timeOut: 3000,
    });
  }

  /* Show Error message toaster */
  showError(message) {
    this.toaster.error(message, 'Error', {
      timeOut: 3000,
    });
  }
}

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
  AncDate: any;
  deliveryStatusNo: boolean;
  deliveryStatusYes: boolean;
  showMessage: any;
  actualDeliveryDate: any;
  MotherDeath: any;
  miscarriage: boolean;
  abortion: boolean;

  constructor(private http: HttpClient, private httpService: HttpService, private fb: FormBuilder,
    public validationService: ValidationService, private toaster: ToastrService, private sidebarService: SidebarService,
    @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<PwViewComponent>) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    this.createForm();
    this.enableActualDelivery();
    console.log(this.data.pregnantWomanRegisterData, 'editpage');
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
      miscarriage: this.data.pregnantWomanRegisterData.miscarriage,
      abortion: this.data.pregnantWomanRegisterData.abortion,
      actualDeliveryDate: this.data.pregnantWomanRegisterData.actualDateOfDelivery,
      liveStill: this.data.pregnantWomanRegisterData.livebirthOrStillbirth,
      deliveryPlace: this.data.pregnantWomanRegisterData.placeOfDelivery
    })

    if (this.data.pregnantWomanRegisterData.antenatalCheckup == 'Y') {
      this.checkAncComplete = true;
    } else {
      this.checkAncComplete = false;
    }

    if (this.data.pregnantWomanRegisterData.actualDateOfDelivery !== null) {
      this.deliveryStatusYes = true;
      this.pwRegisterForm.controls['actualDeliveryDate'].enable();
      this.pwRegisterForm.controls['liveStill'].enable();
      this.pwRegisterForm.controls['deliveryPlace'].enable();
    }
  }

  createForm() {
    this.pwRegisterForm = this.fb.group({
      initialWeight: [null, this.weightRange],
      lastMenstrualDate: [null],
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
      miscarriage: [null],
      abortion: [null],
      actualDeliveryDate: [''],
      liveStill: [''],
      deliveryPlace: [''],
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
    this.actualDeliveryDate = moment(new Date().setDate(new Date(value).getDate() + 1)).format('YYYY-MM-DD');
    this.AncDate = moment(new Date().setDate(new Date(value).getDate() + 1)).format('YYYY-MM-DD');
    this.pwRegisterForm.get('expectedDeliveryDate').reset();
    this.pwRegisterForm.get('anc1st').reset();
    this.pwRegisterForm.get('anc2nd').reset();
    this.pwRegisterForm.get('anc3rd').reset();
    this.pwRegisterForm.get('anc4th').reset();
    this.pwRegisterForm.get('actualDeliveryDate').reset();
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
    } else if (value == 'Y') {
      this.deliveryStatusYes = true;
      this.deliveryStatusNo = false;
    } else {
      this.deliveryStatusNo = false;
      this.deliveryStatusYes = false;
    }
  }

  checkDeliveryStatusNo(value) {
    if (value == 'miscarriage') {
      this.miscarriage = true;
      this.abortion = false;
    } else if (value == 'abortion') {
      this.miscarriage = false;
      this.abortion = true;
    } else {
      this.miscarriage = false;
      this.abortion = false;
    }
  }

  anc1stDate(value) {
    this.actualDeliveryDate = value;
    this.pwRegisterForm.get('actualDeliveryDate').reset();
    if (this.pwRegisterForm.controls['anc1st'].value !== null && this.pwRegisterForm.controls['anc2nd'].value !== null &&
      this.pwRegisterForm.controls['anc3rd'].value !== null) {
      this.showMessage = true;
    } else {
      this.showMessage = false;
    }
  }
  anc2ndDate(value) {
    this.actualDeliveryDate = value;
    this.pwRegisterForm.get('actualDeliveryDate').reset();
    if (this.pwRegisterForm.controls['anc1st'].value !== null && this.pwRegisterForm.controls['anc2nd'].value !== null &&
      this.pwRegisterForm.controls['anc3rd'].value !== null) {
      this.showMessage = true;
    } else {
      this.showMessage = false;
    }
  }
  anc3rdDate(value) {
    this.actualDeliveryDate = value;
    this.pwRegisterForm.get('actualDeliveryDate').reset();
    if (this.pwRegisterForm.controls['anc1st'].value !== null && this.pwRegisterForm.controls['anc2nd'].value !== null &&
      this.pwRegisterForm.controls['anc3rd'].value !== null) {
      this.showMessage = true;
    } else {
      this.showMessage = false;
    }
  }
  anc4thDate(value) {
    this.actualDeliveryDate = value;
    this.pwRegisterForm.get('actualDeliveryDate').reset();
    if (this.pwRegisterForm.controls['anc1st'].value !== null && this.pwRegisterForm.controls['anc2nd'].value !== null &&
      this.pwRegisterForm.controls['anc3rd'].value !== null) {
      this.showMessage = true;
    } else {
      this.showMessage = false;
    }
  }

  enableActualDelivery() {
    let disable: boolean;

    if (this.pwRegisterForm.controls['initialWeight'].value == null || this.pwRegisterForm.controls['lastMenstrualDate'].value == null ||
      this.pwRegisterForm.controls['expectedDeliveryDate'].value == null || this.pwRegisterForm.controls['beforeDeliveryWeight'].value == null) {
      this.pwRegisterForm.controls['actualDeliveryDate'].disable();
      disable = true;
    } else {
      this.pwRegisterForm.controls['actualDeliveryDate'].enable();
      disable = false;
    }

    if (this.pwRegisterForm.controls['ancComplete'].value == 'N' || disable) {
      this.pwRegisterForm.controls['actualDeliveryDate'].disable();
      this.pwRegisterForm.controls['actualDeliveryDate'].reset();
      this.pwRegisterForm.controls['liveStill'].reset();
      this.pwRegisterForm.controls['deliveryPlace'].reset();
    } else if (this.pwRegisterForm.controls['ancComplete'].value == null || disable) {
      this.pwRegisterForm.controls['actualDeliveryDate'].disable();
    } else {
      this.pwRegisterForm.controls['actualDeliveryDate'].enable();
    }

    this.pwRegisterForm.controls['liveStill'].disable();
    this.pwRegisterForm.controls['deliveryPlace'].disable();
  }

  enableliveStillDelivery() {
    if (this.pwRegisterForm.controls['actualDeliveryDate'].value == null) {
      this.pwRegisterForm.controls['liveStill'].disable();
      this.pwRegisterForm.controls['deliveryPlace'].disable();
    } else {
      this.pwRegisterForm.controls['liveStill'].enable();
      this.pwRegisterForm.controls['deliveryPlace'].enable();
    }
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
    console.log(this.pwRegisterForm.value)
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
            timeOfDeath: this.pwRegisterForm.value.deathTime,
            familyDeathComment: this.pwRegisterForm.value.deathReason
          }
        }
        console.log(Dto, 'reqAdd')
        this.http.post(`${this.httpService.baseURL}pwr/saveOrUpdatePregnantWomanDetails`, Dto).subscribe((res) => {
          console.log(res, 'responseAdd')
          this.dialogRef.close();
          this.showSuccess('Success');
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
            delivery: this.pwRegisterForm.value.delivery,
            miscarriage: this.pwRegisterForm.value.miscarriage,
            abortion: this.pwRegisterForm.value.abortion,
            actualDateOfDelivery: this.pwRegisterForm.value.actualDeliveryDate ? this.pwRegisterForm.value.actualDeliveryDate : null,
            livebirthOrStillbirth: this.pwRegisterForm.value.liveStill ? this.pwRegisterForm.value.liveStill : null,
            placeOfDelivery: this.pwRegisterForm.value.deliveryPlace ? this.pwRegisterForm.value.deliveryPlace : null
          },
          familyDeathRegister: {
            deathStatus: this.pwRegisterForm.value.womenDeath,
            timeOfDeath: this.pwRegisterForm.value.deathTime,
            familyDeathComment: this.pwRegisterForm.value.deathReason
          }
        }
        console.log(Dto, 'reqEdit')
        this.http.post(`${this.httpService.baseURL}pwr/saveOrUpdatePregnantWomanDetails`, Dto).subscribe((res) => {
          console.log(res, 'responseEdit')
          this.dialogRef.close();
          this.showSuccess('Success');
        }, error => {
          this.dialogRef.close();
          this.showError('Error')
        });

      }
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

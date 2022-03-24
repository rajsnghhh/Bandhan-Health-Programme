import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
  childMuaaList: Array<any> = [];
  muacRegisterId6month: any;
  muacRegisterId12month: any;
  muacRegisterId18month: any;
  muacRegisterId24month: any;
  editMode: boolean;
  viewMode: boolean;
  today: string = new Date(new Date().setDate(new Date().getDate())).toISOString().substring(0, 10);

  constructor(public validationService: ValidationService, private fb: FormBuilder, private httpService: HttpService,
    private toaster: ToastrService, private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<AddLmChildComponent>) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    console.log(this.data)
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

  lmMuacList() {
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      childId: this.data.childId.toString()
    }
    this.http.post(`${this.httpService.baseURL}lactatingmotherregister/childWiselactatingmotherMUACList`, Dto).subscribe((res: any) => {
      this.childMuaaList = res?.responseObject;
      this.muacRegisterId6month = this.childMuaaList.find(month => month.muacForMonth == "6")?.muacRegisterId;
      this.muacRegisterId12month = this.childMuaaList.find(month => month.muacForMonth == "12")?.muacRegisterId;
      this.muacRegisterId18month = this.childMuaaList.find(month => month.muacForMonth == "18")?.muacRegisterId;
      this.muacRegisterId24month = this.childMuaaList.find(month => month.muacForMonth == "24")?.muacRegisterId;
      if (this.data.editMode == false) {
        this.childBirthForm.reset();
      } else {
        this.childBirthForm.patchValue({
          place: this.data.placeOfDelivery,
          birthWeight: this.data.birthWeight,
          primaryImmunizationUpto12Completed: this.data.primaryImmunizationUpto12Completed,
          primaryImmunizationUpto24Completed: this.data.primaryImmunizationUpto24Completed,
          ebfUpto6Complete: this.data.ebfUpto6Complete,
          ebfUpto12Complete: this.data.ebfUpto12Complete,
          ebfUpto18Complete: this.data.ebfUpto18Complete,
          ebfUpto24Complete: this.data.ebfUpto24Complete,
          height6month: this.childMuaaList.find(month => month.muacForMonth == "6")?.height,
          height12month: this.childMuaaList.find(month => month.muacForMonth == "12")?.height,
          height18month: this.childMuaaList.find(month => month.muacForMonth == "18")?.height,
          height24month: this.childMuaaList.find(month => month.muacForMonth == "24")?.height,
          weight6month: this.childMuaaList.find(month => month.muacForMonth == "6")?.weight,
          weight12month: this.childMuaaList.find(month => month.muacForMonth == "12")?.weight,
          weight18month: this.childMuaaList.find(month => month.muacForMonth == "18")?.weight,
          weight24month: this.childMuaaList.find(month => month.muacForMonth == "24")?.weight,
          muac6month: this.childMuaaList.find(month => month.muacForMonth == "6")?.muac,
          muac12month: this.childMuaaList.find(month => month.muacForMonth == "12")?.muac,
          muac18month: this.childMuaaList.find(month => month.muacForMonth == "18")?.muac,
          muac24month: this.childMuaaList.find(month => month.muacForMonth == "24")?.muac,
          firstVisitDate: this.data.firstVisitDate,
          secondVisitDate: this.data.secondVisitDate,
        })
      }
    })
  }

  disableForm() {
    let dateString = this.data.childAge;

    let y = dateString.indexOf("year");
    let year = parseInt(dateString.slice(0, y - 1));

    let m = dateString.indexOf("r");
    let m1 = dateString.indexOf("month");
    let month = parseInt(dateString.slice(m + 2, m1 - 1));

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
    }
    else if (year >= 1 && year < 2 && month <= 6) {
      this.after6m = false;
      this.after12m = false;
      this.after18m = true;
      this.after24m = true;
    }
    else if (year >= 1 && year <= 2 && month >= 6 && month <= 12) {
      this.after6m = false;
      this.after12m = false;
      this.after18m = false;
      this.after24m = true;
    }
    else if (year >= 2) {
      this.after6m = false;
      this.after12m = false;
      this.after18m = false;
      this.after24m = false;
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
      height6month: ['', this.heightRange],
      height12month: ['', this.heightRange],
      height18month: ['', this.heightRange],
      height24month: ['', this.heightRange],
      weight6month: ['', this.weightRange],
      weight12month: ['', this.weightRange],
      weight18month: ['', this.weightRange],
      weight24month: ['', this.weightRange],
      muac6month: ['', this.muacRange],
      muac12month: ['', this.muacRange],
      muac18month: ['', this.muacRange],
      muac24month: ['', this.muacRange],
      firstVisitDate: [null],
      secondVisitDate: [null],
      checkChildDeath: [null],
      deathOfChildDate: [null],
      comment: [''],
    });
  }
  get f() {
    return this.childBirthForm.controls;
  }

  checkChildDeath(value) {
    this.childDeath = value;
    if (this.childBirthForm.get('checkChildDeath').value == 'Y') {
      this.childBirthForm.get('comment').setValidators(Validators.required);
    } else {
      this.childBirthForm.get('comment').clearAsyncValidators();
    }
  }

  muacRange(controls: AbstractControl): { [key: string]: any } | null {
    if (controls.value >= 1 && controls.value <= 30 || controls.value == null) {
      return null;
    }
    return { 'notInMuacRange': true };
  }

  weightRange(controls: AbstractControl): { [key: string]: any } | null {
    if (controls.value >= 0 && controls.value <= 25 || controls.value == null) {
      return null;
    }
    return { 'notInWeightRange': true };
  }

  birthWeightRange(controls: AbstractControl): { [key: string]: any } | null {
    if (controls.value >= 0 && controls.value <= 9 || controls.value == null) {
      return null;
    }
    return { 'notInBirthWeightRange': true };
  }

  heightRange(controls: AbstractControl): { [key: string]: any } | null {
    if (controls.value >= 10 && controls.value <= 180 || controls.value == null) {
      return null;
    }
    return { 'notInHeightRange': true };
  }

  onSave() {
    if (this.childBirthForm.valid) {
      if (this.data.editMode == false) {
        let Dto = {
          dataAccessDTO: this.httpService.dataAccessDTO,
          childBasicStatusDto: {
            childId: this.data.childId.toString(),
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
            childId: this.data.childId.toString(),
            height: this.childBirthForm.value.height6month == null ? "0" : this.childBirthForm.value.height6month,
            weight: this.childBirthForm.value.weight6month == null ? "0" : this.childBirthForm.value.weight6month,
            muac: this.childBirthForm.value.muac6month == null ? "0" : this.childBirthForm.value.muac6month,
            active_flag: "A",
            muacForMonth: "6"
          },
          {
            muacRegisterId: 0,
            childId: this.data.childId.toString(),
            height: this.childBirthForm.value.height12month == null ? "0" : this.childBirthForm.value.height12month,
            weight: this.childBirthForm.value.weight12month == null ? "0" : this.childBirthForm.value.weight12month,
            muac: this.childBirthForm.value.muac12month == null ? "0" : this.childBirthForm.value.muac12month,
            active_flag: "A",
            muacForMonth: "12"
          },
          {
            muacRegisterId: 0,
            childId: this.data.childId.toString(),
            height: this.childBirthForm.value.height18month == null ? "0" : this.childBirthForm.value.height18month,
            weight: this.childBirthForm.value.weight18month == null ? "0" : this.childBirthForm.value.weight18month,
            muac: this.childBirthForm.value.muac18month == null ? "0" : this.childBirthForm.value.muac18month,
            active_flag: "A",
            muacForMonth: "18"
          },
          {
            muacRegisterId: 0,
            childId: this.data.childId.toString(),
            height: this.childBirthForm.value.height24month == null ? "0" : this.childBirthForm.value.height24month,
            weight: this.childBirthForm.value.weight24month == null ? "0" : this.childBirthForm.value.weight24month,
            muac: this.childBirthForm.value.muac24month == null ? "0" : this.childBirthForm.value.muac24month,
            active_flag: "A",
            muacForMonth: "24"
          }
          ],
          deadChildRegisterDto: {
            deathOfChildDate: this.childBirthForm.value.deathOfChildDate,
            comment: this.childBirthForm.value.comment
          }
        }
        console.log(Dto, 'reqAdd')
        this.http.post(`${this.httpService.baseURL}lactatingmotherregister/saveOrUpdateLactatingMotherData`, Dto).subscribe((res) => {
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
          childBasicStatusDto: {
            childId: this.data.childId,
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
            muacRegisterId: this.muacRegisterId6month,
            childId: this.data.childId.toString(),
            height: this.childBirthForm.value.height6month == null ? "0" : this.childBirthForm.value.height6month,
            weight: this.childBirthForm.value.weight6month == null ? "0" : this.childBirthForm.value.weight6month,
            muac: this.childBirthForm.value.muac6month == null ? "0" : this.childBirthForm.value.muac6month,
            active_flag: "A",
            muacForMonth: "6"
          },
          {
            muacRegisterId: this.muacRegisterId12month,
            childId: this.data.childId.toString(),
            height: this.childBirthForm.value.height12month == null ? "0" : this.childBirthForm.value.height12month,
            weight: this.childBirthForm.value.weight12month == null ? "0" : this.childBirthForm.value.weight12month,
            muac: this.childBirthForm.value.muac12month == null ? "0" : this.childBirthForm.value.muac12month,
            active_flag: "A",
            muacForMonth: "12"
          },
          {
            muacRegisterId: this.muacRegisterId18month,
            childId: this.data.childId.toString(),
            height: this.childBirthForm.value.height18month == null ? "0" : this.childBirthForm.value.height18month,
            weight: this.childBirthForm.value.weight18month == null ? "0" : this.childBirthForm.value.weight18month,
            muac: this.childBirthForm.value.muac18month == null ? "0" : this.childBirthForm.value.muac18month,
            active_flag: "A",
            muacForMonth: "18"
          },
          {
            muacRegisterId: this.muacRegisterId24month,
            childId: this.data.childId.toString(),
            height: this.childBirthForm.value.height24month == null ? "0" : this.childBirthForm.value.height24month,
            weight: this.childBirthForm.value.weight24month == null ? "0" : this.childBirthForm.value.weight24month,
            muac: this.childBirthForm.value.muac24month == null ? "0" : this.childBirthForm.value.muac24month,
            active_flag: "A",
            muacForMonth: "24"
          }
          ],
          deadChildRegisterDto: {
            deathOfChildDate: this.childBirthForm.value.deathOfChildDate,
            comment: this.childBirthForm.value.comment
          }
        }
        console.log(Dto, 'reqEdit')
        this.http.post(`${this.httpService.baseURL}lactatingmotherregister/saveOrUpdateLactatingMotherData`, Dto).subscribe((res) => {
          console.log(res, 'responseedit')
          this.dialogRef.close();
          this.showSuccess('Success');
        }, error => {
          this.dialogRef.close();
          this.showError('Error')
        }
        );

      }
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

  showSuccess(message) {
    this.toaster.success(message, 'Child MUAC Save', {
      timeOut: 3000,
    });
  }

  showError(message) {
    this.toaster.error(message, 'Error', {
      timeOut: 3000,
    });
  }
}

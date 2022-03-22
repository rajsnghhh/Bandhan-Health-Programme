import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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


  constructor(public validationService: ValidationService, private fb: FormBuilder, private httpService: HttpService,
    private toaster: ToastrService, private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<AddLmChildComponent>) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    console.log(this.data)
    this.panelOpenState = false;
    this.createForm();
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
        muac: this.data.muac,
        height: this.data.height,
        weight: this.data.weight,
        firstVisitDate: this.data.firstVisitDate,
        secondVisitDate: this.data.secondVisitDate,
      })
    }
    this.disableForm();
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
      birthWeight: [''],
      primaryImmunizationUpto12Completed: [null],
      primaryImmunizationUpto24Completed: [null],
      ebfUpto6Complete: [null],
      ebfUpto12Complete: [null],
      ebfUpto18Complete: [null],
      ebfUpto24Complete: [null],
      height: [''],
      weight: [''],
      muac: [''],
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
  }
  onSave() {
    console.log(this.childBirthForm.value);
    if (this.data.muacRegisterId == null) {
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

        muacDataDto: {
          muacRegisterId: 0,
          muacCampId: null,
          childId: this.data.childId.toString(),
          height: this.childBirthForm.value.height,
          weight: this.childBirthForm.value.weight,
          muac: this.childBirthForm.value.muac,
          active_flag: "A"
        },
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

        muacDataDto: {
          muacRegisterId: this.data.muacRegisterId,
          muacCampId: null,
          childId: this.data.childId,
          height: this.childBirthForm.value.height,
          weight: this.childBirthForm.value.weight,
          muac: this.childBirthForm.value.muac,
          active_flag: "A"
        },
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
      });
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
}

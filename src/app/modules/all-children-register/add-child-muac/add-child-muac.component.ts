import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../../core/http/http.service';
import { MuacRegisterService } from '../../muac-register/muac-register.service';
import { ValidationService } from '../../shared/services/validation.service';
import { SidebarService } from '../../shared/sidebar/sidebar.service';

@Component({
  selector: 'app-add-child-muac',
  templateUrl: './add-child-muac.component.html',
  styleUrls: ['./add-child-muac.component.css']
})
export class AddChildMuacComponent implements OnInit {
  muacForm: FormGroup;
  editMode: boolean;
  muacCampList: Array<any> = [];
  campDate: boolean;
  childMuac: Array<any> = [];
  campNotPresent: boolean;
  minMuacRecordDate: string;
  maxMuacRecordDate: string;
  today: string = new Date(new Date().setDate(new Date().getDate())).toISOString().substring(0, 10);
  muacCampStartDate: string;
  muacCampEndDate: string;
  childDob: string;


  constructor(private fb: FormBuilder, public validationService: ValidationService,
    private httpService: HttpService, private http: HttpClient, private toaster: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<AddChildMuacComponent>,
    private sidebarService: SidebarService, private muacService: MuacRegisterService,) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    this.childDob = this.data.childDob;
    this.minMuacRecordDate = this.childDob;
    this.maxMuacRecordDate = this.today;
    this.createForm();
    if (this.data.editMode === true) {
      this.muacForm.get('muacCampNo').enable();
      this.muacForm.reset();
    } else {
      this.muacForm.get('muacCampNo').disable();
      this.muacForm.patchValue({
        muacDate: (this.data?.muacRecordDate),
        muacCampNo: (this.data?.muacCampNumber),
        height: (this.data.height),
        weight: (this.data.weight),
        muac: (this.data.muac)
      })
    }

    let obj = {
      activeStatus: 'A',
      dataAccessDTO: this.httpService.dataAccessDTO,
      id: this.sidebarService.branchId
    }
    this.muacService.muacCampList(obj).subscribe((response: any) => {
      this.muacCampList = response.responseObject.muaccampDetailList;
      console.log(this.muacCampList);
    })

    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      childId: this.data.childId
    }
    this.http.post(`${this.httpService.baseURL}muaccamp/viewMuacRegistersOfAChild`, Dto).subscribe((res: any) => {
      this.childMuac = res.responseObject;
    })
  }

  createForm() {
    this.muacForm = this.fb.group({
      muacDate: ['', Validators.required],
      muacCampNo: [null],
      height: ['', this.heightRange],
      weight: ['', this.weightRange],
      muac: ['', [Validators.required, this.muacRange]],
    });
  }
  get f() {
    return this.muacForm.controls;
  }

  campNo(Id) {
    this.muacForm.controls.muacDate.setValue('');
    this.muacCampStartDate = this.muacCampList.find(muacCampId => muacCampId.muacCampId == Id)?.startDate;
    this.muacCampEndDate = this.muacCampList.find(muacCampId => muacCampId.muacCampId == Id)?.endDate;
    this.minMuacRecordDate = (this.muacCampStartDate > this.childDob) ? this.muacCampStartDate : this.childDob;
    this.maxMuacRecordDate = (this.muacCampEndDate > this.today) ? this.today : this.muacCampEndDate;

    let campNo = this.muacCampList.find(muacCampId => muacCampId.muacCampId == Id)?.campNumber.slice(-4);
    this.campNotPresent = this.childMuac.find(campNumber => campNumber.muacCampDto.muacCampNumber == campNo)?.muacCampDto.muacCampNumber ? false : true;
    this.campDate = (this.muacCampList.find(muacCampId => muacCampId.muacCampId == Id)?.startDate >
      moment(new Date()).format('YYYY-MM-DD')) ? false : true;
  }

  muacRange(controls: AbstractControl): { [key: string]: any } | null {
    if (controls.value >= 1 && controls.value <= 30) {
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

  heightRange(controls: AbstractControl): { [key: string]: any } | null {
    if (controls.value >= 10 && controls.value <= 180 || controls.value == null) {
      return null;
    }
    return { 'notInHeightRange': true };
  }

  onAddEdit() {
    this.muacForm.markAllAsTouched();
    console.log(this.muacForm)
    if (this.data.editMode === true && this.muacForm.valid) {
      let addDto = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        muacDataDto: {
          muacRegisterId: 0,
          muacCampId: this.muacForm.value.muacCampNo,
          childId: this.data.childId,
          height: this.muacForm.value.height,
          weight: this.muacForm.value.weight,
          muac: this.muacForm.value.muac,
          muacRecordDate: this.muacForm.value.muacDate,
          active_flag: "A"
        }
      }

      console.log(addDto);
      if (this.campDate && this.campNotPresent || this.muacForm.value.muacCampNo == null) {
        this.http.post(`${this.httpService.baseURL}acr/muac/saveOrUpdate`, addDto).subscribe((res) => {
          this.dialogRef.close();
          this.showSuccess('Success');
        }, error => {
          this.dialogRef.close();
          this.showError('Error')
        })
      } else {
        this.showError('Data already exis for this MUAC Camp No');
      }
    } else {
      let editDto = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        muacDataDto: {
          muacRegisterId: this.data.muacRegisterId,
          muacCampId: this.muacForm.value.muacCampNo,
          childId: this.data.childId,
          height: this.muacForm.value.height,
          weight: this.muacForm.value.weight,
          muac: this.muacForm.value.muac,
          muacRecordDate: this.muacForm.value.muacDate,
          active_flag: "A"
        }
      }

      console.log(editDto);

      if (this.muacForm.valid) {
        this.http.post(`${this.httpService.baseURL}acr/muac/saveOrUpdate`, editDto).subscribe((res) => {
          this.dialogRef.close();
          this.showSuccess('Success');
        }, error => {
          this.dialogRef.close();
          this.showError('Error')
        })
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

  restrictTypeOfDate() {
    return false;
  }

}

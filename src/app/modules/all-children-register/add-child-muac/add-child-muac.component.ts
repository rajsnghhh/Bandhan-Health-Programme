import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../../core/http/http.service';
import { ValidationService } from '../../shared/services/validation.service';
import { AcrService } from '../acr.service';

@Component({
  selector: 'app-add-child-muac',
  templateUrl: './add-child-muac.component.html',
  styleUrls: ['./add-child-muac.component.css']
})
export class AddChildMuacComponent implements OnInit {
  muacForm: FormGroup;
  editMode: boolean;

  constructor(private fb: FormBuilder, public validationService: ValidationService, public acrService: AcrService,
    private httpService: HttpService, private http: HttpClient, private toaster: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<AddChildMuacComponent>) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    this.editMode = this.acrService.editMode;
    this.createForm();
    if (this.editMode === true) {
      this.muacForm.reset();
    } else {
      this.muacForm.patchValue({
        muacCampNo: (this.data?.muacCampDto?.muacCampNumber),
        height: (this.data.height),
        weight: (this.data.weight),
        muac: (this.data.muac)
      })
    }
  }
  createForm() {
    this.muacForm = this.fb.group({
      muacCampNo: [''],
      height: ['', this.heightRange],
      weight: ['', this.weightRange],
      muac: ['', [Validators.required, this.muacRange]],
    });
  }
  get f() {
    return this.muacForm.controls;
  }

  muacRange(controls: AbstractControl): { [key: string]: any } | null {
    if (controls.value >= 1 && controls.value <= 30) {
      return null;
    }
    return { 'notInRange': true };
  }

  weightRange(controls: AbstractControl): { [key: string]: any } | null {
    if (controls.value >= 1 && controls.value <= 25 || controls.value == null) {
      return null;
    }
    return { 'notInRange': true };
  }

  heightRange(controls: AbstractControl): { [key: string]: any } | null {
    if (controls.value >= 10 && controls.value <= 180 || controls.value == null) {
      return null;
    }
    return { 'notInRange': true };
  }

  onAddEdit() {
    this.muacForm.markAllAsTouched();
    if (this.editMode === true && this.muacForm.valid) {
      let addDto = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        muacDataDto: {
          muacRegisterId: 0,
          muacCampId: null,
          childId: this.data.childId,
          height: this.muacForm.value.height,
          weight: this.muacForm.value.weight,
          muac: this.muacForm.value.muac,
          active_flag: "A"
        }
      }
      this.http.post(`${this.httpService.baseURL}acr/muac/saveOrUpdate`, addDto).subscribe((res) => {
        this.dialogRef.close();
        this.showSuccess('Success');
      })
    } else {
      let editDto = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        muacDataDto: {
          muacRegisterId: this.data.muacRegisterId,
          muacCampId: this.data?.muacCampDto?.muacCampId,
          childId: this.data.childId,
          height: this.muacForm.value.height,
          weight: this.muacForm.value.weight,
          muac: this.muacForm.value.muac,
          active_flag: "A"
        }
      }
      if (this.muacForm.valid) {
        this.http.post(`${this.httpService.baseURL}acr/muac/saveOrUpdate`, editDto).subscribe((res) => {
          this.dialogRef.close();
          this.showSuccess('Success');
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
}

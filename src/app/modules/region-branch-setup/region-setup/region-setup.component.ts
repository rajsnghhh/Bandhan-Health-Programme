import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../../core/http/http.service';
import { ValidationService } from '../../shared/services/validation.service';

@Component({
  selector: 'app-region-setup',
  templateUrl: './region-setup.component.html',
  styleUrls: ['./region-setup.component.css']
})
export class RegionSetupComponent implements OnInit {
  regionForm: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder, private http: HttpClient, private toaster: ToastrService,
    private httpService: HttpService, public validationService: ValidationService,
    @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<RegionSetupComponent>) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    this.createForm();
    if (this.data.editMode == false) {
      this.regionForm.reset();
    } else {
      this.regionForm.patchValue({
        regionName: this.data.regionName,
      })
    }
  }

  createForm() {
    this.regionForm = this.fb.group({
      regionName: ['', Validators.required],
    });
  }
  get f() {
    return this.regionForm.controls;
  }

  onSave() {
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      regionMasterId: this.data.editMode == false ? "0" : this.data.regionId,
      regionName: this.validationService.camelize(this.regionForm.value.regionName.trim())
    }
    console.log(Dto);
    if (this.regionForm.valid) {
      this.http.post(`${this.httpService.baseURL}region/saveOrUpdate`, Dto).subscribe((res: any) => {
        console.log(res);
        if (res.status) {
          this.dialogRef.close();
          this.data.editMode == false ? this.showSuccess('Region Created') : this.showSuccess('Region Updated');
        } else {
          this.showError(res.message);
        }
      });
    }
  }

  showSuccess(message) {
    this.toaster.success(message, 'Success', {
      timeOut: 3000,
    });
  }

  /* Show Error message toaster */
  showError(message) {
    this.toaster.error(message, 'Error', {
      timeOut: 3000,
    });
  }
  closeDialog() {
    this.dialogRef.close();
  }
}

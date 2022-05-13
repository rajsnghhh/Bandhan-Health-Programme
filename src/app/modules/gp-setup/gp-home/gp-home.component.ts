import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { BaselineSurveyService } from '../../baseline-survey/baseline-survey.service';
import { HttpService } from '../../core/http/http.service';
import { ConfirmationDialogService } from '../../shared/confirmation-dialog/confirmation-dialog.service';
import { GpSetupFormComponent } from '../gp-setup-form/gp-setup-form.component';

@Component({
  selector: 'app-gp-home',
  templateUrl: './gp-home.component.html',
  styleUrls: ['./gp-home.component.css']
})
export class GpHomeComponent implements OnInit {
  stateSelectForm: FormGroup;

  constructor(private fb: FormBuilder, private httpService: HttpService,
    private http: HttpClient, private baselineService: BaselineSurveyService, private toaster: ToastrService,
    private confirmationDialogService: ConfirmationDialogService, public dialog: MatDialog,) { }

  ngOnInit(): void {
    this.createForm();
  }

  openCreateBlock() {
    const dialogRef = this.dialog.open(GpSetupFormComponent, {
      width: '600px',
      height: '350px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  openEditBlock() {
    const dialogRef = this.dialog.open(GpSetupFormComponent, {
      width: '530px',
      height: '350px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  createForm() {
    this.stateSelectForm = this.fb.group({
      state: ['', Validators.required],
      district: ['', Validators.required],
      block: ['', Validators.required],
    });
  }
  get f() {
    return this.stateSelectForm.controls;
  }

  changeState(value) {

  }
  changeDistrict(value) {

  }
  changeBlock(value) {

  }

  onDelete() {
    this.confirmationDialogService.confirm('', 'Do you want to delete ?').then(() => {
      // this.http.post(`${this.httpService.baseURL}acr/muac/saveOrUpdate`, Dto).subscribe((res) => {

      // })
    }).catch(() => '');
  }

}

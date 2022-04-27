import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { BaselineSurveyService } from '../../baseline-survey/baseline-survey.service';
import { HttpService } from '../../core/http/http.service';
import { ConfirmationDialogService } from '../../shared/confirmation-dialog/confirmation-dialog.service';
import { BlockSetupFormComponent } from '../block-setup-form/block-setup-form.component';

@Component({
  selector: 'app-block-home',
  templateUrl: './block-home.component.html',
  styleUrls: ['./block-home.component.css']
})
export class BlockHomeComponent implements OnInit {
  stateSelectForm: FormGroup;

  constructor(private fb: FormBuilder, private httpService: HttpService,
    private http: HttpClient, private baselineService: BaselineSurveyService, private toaster: ToastrService,
    private confirmationDialogService: ConfirmationDialogService, public dialog: MatDialog,) { }

  ngOnInit(): void {
    this.createForm();
  }

  openCreateBlock() {
    const dialogRef = this.dialog.open(BlockSetupFormComponent, {
      width: '500px',
      height: '350px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  openEditBlock() {
    const dialogRef = this.dialog.open(BlockSetupFormComponent, {
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
    });
  }
  get f() {
    return this.stateSelectForm.controls;
  }

  changeState(value) {

  }
  changeDistrict(value) {

  }

  onDelete() {
    this.confirmationDialogService.confirm('', 'Do you want to delete ?').then(() => {
      // this.http.post(`${this.httpService.baseURL}acr/muac/saveOrUpdate`, Dto).subscribe((res) => {

      // })
    }).catch(() => '');
  }
}

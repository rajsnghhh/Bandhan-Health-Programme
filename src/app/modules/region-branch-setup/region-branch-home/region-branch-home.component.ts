import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { BaselineSurveyService } from '../../baseline-survey/baseline-survey.service';
import { HttpService } from '../../core/http/http.service';
import { ConfirmationDialogService } from '../../shared/confirmation-dialog/confirmation-dialog.service';
import { RegionSetupComponent } from '../region-setup/region-setup.component';

@Component({
  selector: 'app-region-branch-home',
  templateUrl: './region-branch-home.component.html',
  styleUrls: ['./region-branch-home.component.css']
})
export class RegionBranchHomeComponent implements OnInit {
  stateSelectForm: FormGroup;

  constructor(private fb: FormBuilder, private httpService: HttpService,
    private http: HttpClient, private baselineService: BaselineSurveyService, private toaster: ToastrService,
    private confirmationDialogService: ConfirmationDialogService, public dialog: MatDialog,) { }

  ngOnInit(): void {
    this.createForm();
  }

  openCreateRegion() {
    const dialogRef = this.dialog.open(RegionSetupComponent, {
      width: '500px',
      height: '280px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  openCreateBranch() {

  }

  openEditRegion() {

  }

  createForm() {
    this.stateSelectForm = this.fb.group({
      state: ['', Validators.required],
    });
  }
  get f() {
    return this.stateSelectForm.controls;
  }

  changeState(value) {

  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../core/http/http.service';
import { SidebarService } from '../shared/sidebar/sidebar.service';
import { SsService } from './ss.service';

@Component({
  selector: 'app-ss-setup',
  templateUrl: './ss-setup.component.html',
  styleUrls: ['./ss-setup.component.css']
})
export class SsSetupComponent implements OnInit {
  ssForm: FormGroup;

  constructor(private fb: FormBuilder, private httpService: HttpService, private http: HttpClient,
    private villageService: SsService, private sidebarService: SidebarService) { }

  ngOnInit(): void {
    this.createForm();

  }


  createForm() {
    this.ssForm = this.fb.group({
      region: ['', Validators.required],
      branch: ['', Validators.required],
      // block: ['', Validators.required],
      // gp: ['', Validators.required]
    });
  }

  get f() {
    return this.ssForm.controls;
  }

  changeRegion(value) {

  }

  changeBranch(value) {

  }

}

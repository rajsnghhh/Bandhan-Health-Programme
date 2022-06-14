import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../../core/http/http.service';

@Component({
  selector: 'app-beneficiary-info',
  templateUrl: './beneficiary-info.component.html',
  styleUrls: ['./beneficiary-info.component.css']
})
export class BeneficiaryInfoComponent implements OnInit {
  locationForm: FormGroup;
  projectList: Array<any> = [];
  stateList: Array<any> = [];
  stateWiseDistrictList: Array<any> = [];
  blockList: Array<any> = [];
  gpList: Array<any> = [];
  regionList: Array<any> = [];
  selectFilter: boolean = false;
  stateWiseFilter: boolean = false;
  regionWiseFilter: boolean = false;

  constructor(private fb: FormBuilder, private httpService: HttpService,
    private http: HttpClient, private toaster: ToastrService,) { }

  ngOnInit(): void {
    this.createForm();
    console.log(this.locationForm.value.project == '')

    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
    }
    this.http.post(`${this.httpService.baseURL}report/getAllProject`, Dto).subscribe((res: any) => {
      this.projectList = res.responseObject.projectList;
    });
  }
  createForm() {
    this.locationForm = this.fb.group({
      project: [''],
      stateOrRegion: [''],
      state: [''],
      district: [''],
      block: [''],
      gp: [''],
      region: ['']
    });
  }

  get f() {
    return this.locationForm.controls;
  }

  changeProject(projectId) {
    if (projectId != '') {
      this.selectFilter = true;
    } else {
      this.selectFilter = false;
      this.stateWiseFilter = false;
      this.regionWiseFilter = false;
      this.locationForm.controls.state.setValue('');
      this.locationForm.controls.district.setValue('');
      this.locationForm.controls.block.setValue('');
      this.locationForm.controls.gp.setValue('');
      this.locationForm.controls.region.setValue('');
      this.locationForm.controls.stateOrRegion.setValue('');
    }

  }

  checkStateOrRegion(value) {
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
    }
    if (value == 'stateWise') {
      this.stateWiseFilter = true;
      this.regionWiseFilter = false;
      this.http.post(`${this.httpService.baseURL}state/getListOfAllStates`, Dto).subscribe((res: any) => {
        this.stateList = res.responseObject.stateList;
      });
      this.regionList = [];
      this.locationForm.controls.region.setValue('');
      this.locationForm.controls['district'].disable();
      this.locationForm.controls['block'].disable();
      this.locationForm.controls['gp'].disable();
    } else {
      this.stateWiseFilter = false;
      this.regionWiseFilter = true;
      this.http.post(`${this.httpService.baseURL}branch/getListOfRegionsOfUser`, Dto).subscribe((res: any) => {
        this.regionList = res.responseObject;
      });
      this.stateList = [];
      this.locationForm.controls.state.setValue('');
      this.locationForm.controls.district.setValue('');
      this.locationForm.controls.block.setValue('');
      this.locationForm.controls.gp.setValue('');
    }
  }

  changeState(value) {
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      stateId: value
    }
    this.http.post(`${this.httpService.baseURL}district/getListOfDistrictAndBlock`, Dto).subscribe((res: any) => {
      this.stateWiseDistrictList = res.responseObject?.stateWiseDistrictList;
    });
    this.locationForm.controls.district.setValue('');
    this.locationForm.controls.block.setValue('');
    this.locationForm.controls.gp.setValue('');
    if (!this.locationForm.value.state) {
      this.locationForm.controls['district'].disable();
      this.locationForm.controls['block'].disable();
      this.locationForm.controls['gp'].disable();
      this.stateWiseDistrictList = [];
      this.blockList = [];
      this.gpList = [];
    } else {
      this.locationForm.controls['district'].enable();
      this.locationForm.controls['block'].disable();
      this.locationForm.controls['gp'].disable();
    }
  }

  changeDistrict(value) {
    this.blockList = this.stateWiseDistrictList.find(item => item.districtMasterId == value)?.blockList;
    this.locationForm.controls.block.setValue('');
    this.locationForm.controls.gp.setValue('');
    if (!this.locationForm.value.district) {
      this.locationForm.controls['district'].enable();
      this.locationForm.controls['block'].disable();
      this.locationForm.controls['gp'].disable();
      this.blockList = [];
      this.gpList = [];
    } else {
      this.locationForm.controls['district'].enable();
      this.locationForm.controls['block'].enable();
      this.locationForm.controls['gp'].disable();
    }
  }

  changeBlock(blockId) {
    this.gpList = this.blockList.find(gp => gp.blockMasterId == blockId)?.gpDtoList;
    this.locationForm.controls.gp.setValue('');
    if (!this.locationForm.value.block) {
      this.locationForm.controls['district'].enable();
      this.locationForm.controls['block'].enable();
      this.locationForm.controls['gp'].disable();
      this.gpList = [];
    } else {
      this.locationForm.controls['district'].enable();
      this.locationForm.controls['block'].enable();
      this.locationForm.controls['gp'].enable();
    }
  }

  changeGp(gpId) {
  }

  changeRegion(regionId) {

  }

}

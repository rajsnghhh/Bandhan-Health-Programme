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
  projectWiseBeneficiaryList: Array<any> = [];
  Dto = {
    dataAccessDTO: this.httpService.dataAccessDTO,
  };
  loader: boolean = true;
  tableHeadName: any;

  constructor(private fb: FormBuilder, private httpService: HttpService,
    private http: HttpClient, private toaster: ToastrService,) { }

  ngOnInit(): void {
    this.createForm();

    this.http.post(`${this.httpService.baseURL}report/getAllProject`, this.Dto).subscribe((res: any) => {
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
    if (projectId != '' && projectId != 'all') {
      this.selectFilter = true;
      this.tableHeadName = "Project";
    } else {
      this.selectFilter = false;
      this.tableHeadName = "";
    }
    this.stateWiseFilter = false;
    this.regionWiseFilter = false;
    this.locationForm.controls.state.setValue('');
    this.locationForm.controls.district.setValue('');
    this.locationForm.controls.block.setValue('');
    this.locationForm.controls.gp.setValue('');
    this.locationForm.controls.region.setValue('');
    this.locationForm.controls.stateOrRegion.setValue('');

    if (this.projectWiseBeneficiaryList.length == 0) {
      this.loader = false;
      this.http.post(`${this.httpService.baseURL}report/getBeneficiaryInfoProject`, this.Dto).subscribe((res: any) => {
        this.projectWiseBeneficiaryList = res.responseObject.projectWiseBeneficiaryList;
        this.loader = true;
      }, error => {
        this.loader = true;
      });
    }

  }

  checkStateOrRegion(value) {
    if (value == 'stateWise') {
      this.stateWiseFilter = true;
      this.regionWiseFilter = false;
      this.http.post(`${this.httpService.baseURL}state/getListOfAllStates`, this.Dto).subscribe((res: any) => {
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
      this.http.post(`${this.httpService.baseURL}branch/getListOfRegionsOfUser`, this.Dto).subscribe((res: any) => {
        this.regionList = res.responseObject;
      });
      this.stateList = [];
      this.locationForm.controls.state.setValue('');
      this.locationForm.controls.district.setValue('');
      this.locationForm.controls.block.setValue('');
      this.locationForm.controls.gp.setValue('');
    }
  }

  changeState(stateId) {
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      stateId: stateId
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

  generateReport() {
    if (this.stateWiseFilter == true) {
      this.tableHeadName = this.locationForm.get('state').value ? this.locationForm.get('district').value
        ? this.locationForm.get('block').value
          ? this.locationForm.get('gp').value
            ? "Village" : `GP/Muni` : "Block" : "District" : "State"
      let Dto1 = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        projectMasterId: this.locationForm.get('project').value,
        stateMasterId: this.locationForm.get('state').value ? this.locationForm.get('state').value : "",
        districtMasterId: this.locationForm.get('district').value ? this.locationForm.get('district').value : "",
        blockMasterId: this.locationForm.get('block').value ? this.locationForm.get('block').value : "",
        gpMuncipalId: this.locationForm.get('gp').value ? this.locationForm.get('gp').value : ""
      }
      console.log(Dto1, 'stateWise')
      this.loader = false;
      this.http.post(`${this.httpService.baseURL}report/getBeneficiaryInfoStateWise`, Dto1).subscribe((res: any) => {
        this.projectWiseBeneficiaryList = res.responseObject.projectWiseBeneficiaryList;
        this.loader = true;
      }, error => {
        this.loader = true;
      });
    }
    else if (this.regionWiseFilter = true) {
      this.tableHeadName = this.locationForm.get('region').value ? "Branch" : "Region"
      let Dto1 = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        projectMasterId: this.locationForm.get('project').value,
        regionMasterId: this.locationForm.get('region').value ? this.locationForm.get('region').value : ""
      }
      console.log(Dto1, 'regionWise')
      this.loader = false;
      this.http.post(`${this.httpService.baseURL}report/getBeneficiaryInfoRegionWise`, Dto1).subscribe((res: any) => {
        this.projectWiseBeneficiaryList = res.responseObject.projectWiseBeneficiaryList;
        this.loader = true;
      }, error => {
        this.loader = true;
      });
    }
  }

}

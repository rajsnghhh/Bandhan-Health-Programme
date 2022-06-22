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
    if (projectId != '') {
      this.selectFilter = true;
    } else {
      this.selectFilter = false;
    }
    this.stateWiseFilter = false;
    this.regionWiseFilter = false;
    this.locationForm.controls.state.setValue('');
    this.locationForm.controls.district.setValue('');
    this.locationForm.controls.block.setValue('');
    this.locationForm.controls.gp.setValue('');
    this.locationForm.controls.region.setValue('');
    this.locationForm.controls.stateOrRegion.setValue('');

    if (projectId != '') {
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
    let Dto1 = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      projectMasterId: this.locationForm.get('project').value
    }
    console.log(Dto1)
    if (value == 'stateWise') {
      this.stateWiseFilter = true;
      this.regionWiseFilter = false;
      this.http.post(`${this.httpService.baseURL}state/getListOfAllStates`, this.Dto).subscribe((res: any) => {
        this.stateList = res.responseObject.stateList;
      });
      this.loader = false;
      this.http.post(`${this.httpService.baseURL}report/getBeneficiaryInfoState`, Dto1).subscribe((res: any) => {
        this.projectWiseBeneficiaryList = res.responseObject.projectWiseBeneficiaryList;
        this.loader = true;
      }, error => {
        this.loader = true;
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
      this.loader = false;
      this.http.post(`${this.httpService.baseURL}report/getBeneficiaryInfoRegion`, Dto1).subscribe((res: any) => {
        this.projectWiseBeneficiaryList = res.responseObject.projectWiseBeneficiaryList;
        this.loader = true;
      }, error => {
        this.loader = true;
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
    let Dto1 = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      projectMasterId: this.locationForm.get('project').value,
      stateMasterId: stateId
    }
    console.log(Dto1, 'state')
    if (stateId != '') {
      this.loader = false;
      this.http.post(`${this.httpService.baseURL}report/getBeneficiaryInfoDistrict`, Dto1).subscribe((res: any) => {
        this.projectWiseBeneficiaryList = res.responseObject.projectWiseBeneficiaryList;
        this.loader = true;
      }, error => {
        this.loader = true;
      });
    }
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
    let Dto1 = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      projectMasterId: this.locationForm.get('project').value,
      stateMasterId: this.locationForm.get('state').value,
      districtMasterId: value
    }
    console.log(Dto1, 'district')
    if (value != '') {
      this.loader = false;
      this.http.post(`${this.httpService.baseURL}report/getBeneficiaryInfoBlock`, Dto1).subscribe((res: any) => {
        this.projectWiseBeneficiaryList = res.responseObject.projectWiseBeneficiaryList;
        this.loader = true;
      }, error => {
        this.loader = true;
      });
    }
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
    let Dto1 = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      projectMasterId: this.locationForm.get('project').value,
      stateMasterId: this.locationForm.get('state').value,
      districtMasterId: this.locationForm.get('district').value,
      blockMasterId: blockId
    }
    console.log(Dto1, 'block')
    if (blockId != '') {
      this.loader = false;
      this.http.post(`${this.httpService.baseURL}report/getBeneficiaryInfoGp`, Dto1).subscribe((res: any) => {
        this.projectWiseBeneficiaryList = res.responseObject.projectWiseBeneficiaryList;
        this.loader = true;
      }, error => {
        this.loader = true;
      });
    }
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
    let Dto1 = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      projectMasterId: this.locationForm.get('project').value,
      stateMasterId: this.locationForm.get('state').value,
      districtMasterId: this.locationForm.get('district').value,
      blockMasterId: this.locationForm.get('district').value,
      gpMuncipalId: gpId
    }
    console.log(Dto1, 'gp')
    if (gpId != '') {
      this.loader = false;
      this.http.post(`${this.httpService.baseURL}report/getBeneficiaryInfoVillage`, Dto1).subscribe((res: any) => {
        this.projectWiseBeneficiaryList = res.responseObject.projectWiseBeneficiaryList;
        this.loader = true;
      }, error => {
        this.loader = true;
      });
    }
  }

  changeRegion(regionId) {
    let Dto1 = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      projectMasterId: this.locationForm.get('project').value,
      regionMasterId: regionId
    }
    if (regionId != '') {
      this.loader = false;
      this.http.post(`${this.httpService.baseURL}report/getBeneficiaryInfoBranch`, Dto1).subscribe((res: any) => {
        this.projectWiseBeneficiaryList = res.responseObject.projectWiseBeneficiaryList;
        this.loader = true;
      }, error => {
        this.loader = true;
      });
    }
  }

}

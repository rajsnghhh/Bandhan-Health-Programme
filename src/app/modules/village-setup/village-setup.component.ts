import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../core/http/http.service';
import { VillageSetupService } from './village-setup.service';

@Component({
  selector: 'app-village-setup',
  templateUrl: './village-setup.component.html',
  styleUrls: ['./village-setup.component.css']
})
export class VillageSetupComponent implements OnInit {
  villageForm: FormGroup;
  stateList: Array<any> = [];
  districtList: Array<any> = [];
  blockList: Array<any> = [];

  constructor(private fb: FormBuilder, private httpService: HttpService, private http: HttpClient,
    private villageService: VillageSetupService) { }

  ngOnInit(): void {
    this.createForm();

    // Api call for viewing state list
    let obj = {
      dataAccessDTO: this.httpService.dataAccessDTO
    }

    this.villageService.getStateList(obj).subscribe((res) => {
      this.stateList = res.responseObject.stateList;
      console.log(this.stateList);
    })

  }

  createForm() {
    this.villageForm = this.fb.group({
      state: ['', Validators.required],
      district: ['', Validators.required],
      block: ['', Validators.required],
      gp: ['', Validators.required]
    });
  }

  get f() {
    return this.villageForm.controls;
  }

  changeState(stateId) {

    let obj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      stateId: stateId
    }

    this.villageService.getDistrictAndBlockList(obj).subscribe((res) => {
      this.districtList = res.responseObject.stateWiseDistrictList;
      console.log(this.districtList);
    })

    // this.villageForm.controls.gp.setValue('');
    // this.villageForm.controls.gram.setValue('');
  }

  changeDistrict(districtId) {
    console.log(districtId);
    this.blockList = this.districtList.find(block => block.districtMasterId == districtId)?.blockList;
    console.log(this.blockList);
  }

  changeBlock(value) {

  }

  changeGp(value) {

  }


}

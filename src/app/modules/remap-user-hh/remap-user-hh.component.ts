import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../core/http/http.service';
import { RemapUserHhService } from './remap-user-hh.service';

@Component({
  selector: 'app-remap-user-hh',
  templateUrl: './remap-user-hh.component.html',
  styleUrls: ['./remap-user-hh.component.css']
})
export class RemapUserHhComponent implements OnInit {
  remapUserHhForm: FormGroup;
  regionList: Array<any> = [];
  branchList: Array<any> = [];
  hcoList: Array<any> = [];
  hcoHHList: Array<any> = [];
  loader: boolean = true;


  constructor(private fb: FormBuilder, private httpService: HttpService, private remapUserHHService: RemapUserHhService,
    private toaster: ToastrService) { }

  ngOnInit(): void {
    this.createForm();

    let obj = { dataAccessDTO: this.httpService.dataAccessDTO }
    this.remapUserHHService.listOfRegionsOfUser(obj).subscribe((res) => {
      this.regionList = res.responseObject;
      console.log(this.regionList);
    });
  }

  createForm() {
    this.remapUserHhForm = this.fb.group({
      region: ['', Validators.required],
      branch: ['', Validators.required],
      hco: ['', Validators.required]

    })
  }

  get f() {
    return this.remapUserHhForm.controls;
  }

  changeRegion(regionId) {
    console.log(regionId);

    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      regionId: regionId,
    };
    this.remapUserHHService.listOfBranchesOfARegion(req).subscribe((res) => {
      this.branchList = res.responseObject;
      console.log(this.branchList, 'this.branchList');

    }, (error) => {
      this.branchList = null;
    }
    );
    // this.branchVillageForm.controls.branch.setValue('');
    // this.mappedVillageList = [];
    // this.checkUnmapDataPushPop.villageIdList = [];
    // if (this.branchVillageForm.value.region == '') {
    //   this.branchVillageForm.controls.branch.setValue('');
    //   this.mappedVillageList = [];
    //   this.checkUnmapDataPushPop.villageIdList = [];
    // }
  }


  changeBranch(branchId) {

    console.log(branchId);

    let Dto = { dataAccessDTO: this.httpService.dataAccessDTO, branchId: branchId }

    this.remapUserHHService.hcoListOfBranch(Dto).subscribe((res: any) => {
      this.hcoList = res.responseObject;
      console.log(this.hcoList, 'hcoList');
    });


    // if (branch) {
    //   this.locationForm.controls.fromDate.setValue('');
    //   this.locationForm.controls.toDate.setValue('');
    //   this.darList = [];
    //   this.darViewFamilyList = [];
    // }

    // if (this.locationForm.value.branch == '') {
    //   this.locationForm.controls.hco.setValue('');
    //   this.locationForm.controls.fromDate.setValue('');
    //   this.locationForm.controls.toDate.setValue('');
    //   this.darList = [];
    //   this.darViewFamilyList = [];
    //   this.hcoList = [];
    //   this.locationForm.controls.fromDate.setValue('');
    //   this.locationForm.controls.toDate.setValue('');
    //   this.showError('No Data Found');
    // }

    // if (this.locationForm.value.hco == '') {
    //   this.locationForm.controls.fromDate.setValue('');
    //   this.locationForm.controls.toDate.setValue('');
    //   this.darList = [];
    //   this.darViewFamilyList = [];
    // }

  }

  changeHco(hcoUserId) {
    console.log(hcoUserId);
    let Dto = { dataAccessDTO: this.httpService.dataAccessDTO, userId: hcoUserId }
    this.loader = false;

    this.remapUserHHService.viewUsersMappedHHDetails(Dto).subscribe((res: any) => {
      this.hcoHHList = res.responseObject;
      console.log(this.hcoHHList);
      if (this.hcoHHList == null) {
        this.showError('No Data Found');
      }
      this.loader = true;
    }, error => {
      this.showError('Error');
      this.loader = true;
    })

  }

  showSuccess(message) {
    this.toaster.success(message, 'Success', {
      timeOut: 3000,
    });
  }

  showError(message) {
    this.toaster.error(message, 'Error', {
      timeOut: 3000,
    });
  }

}

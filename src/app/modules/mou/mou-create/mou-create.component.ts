import { Component, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { HttpService } from '../../core/http/http.service';
import { Donor, DonorMasterViewDTO } from '../../core/models/donor.model';
import { ValidationService } from '../../shared/services/validation.service';
import { MouService } from '../mou.service';

@Component({
  selector: 'app-mou-create',
  templateUrl: './mou-create.component.html',
  styleUrls: ['./mou-create.component.css'],
})
export class MouCreateComponent implements OnInit, OnDestroy {
  dropdownSettings: IDropdownSettings;
  donorList: any;
  MouFormData: UntypedFormGroup;
  selectedItems: Donor[] = [];
  editDataSub: Subscription;
  editMode: boolean;
  receivedUserData: any;

  constructor(
    public mouService: MouService,
    private router: ActivatedRoute,
    private route: Router,
    private fb: UntypedFormBuilder,
    public validationService: ValidationService,
    private httpService: HttpService,
    private toastr: ToastrService
  ) {}
 
  ngOnInit(): void {
    this.createForm();
    const donorPostBody = new DonorMasterViewDTO(
      'Y',
      this.httpService.dataAccessDTO
    );

    this.httpService
      .postRequest(`donor/view`, donorPostBody)
      .subscribe((data: any) => {
        this.donorList = data.responseObject;
        console.log(this.donorList);
      });

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'donorMasterId',
      textField: 'donorMasterName',
      selectAllText: 'Select All',
      unSelectAllText: 'Unselect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };

    this.router.params.subscribe((data) => {
      console.log(data);
      if (data.mouMasterId) {
        this.editMode = true;
        this.editDataSub = this.mouService.editMouData.subscribe((data) => {
          console.log(data);
          this.receivedUserData = data;
          if (this.receivedUserData) {
            this.MouFormData.patchValue({
              mouName: this.receivedUserData.mouName,
            });
            this.MouFormData.patchValue({
              mouNumber: this.receivedUserData.mouNumber,
            });
            this.MouFormData.patchValue({
              mouStartDate: this.receivedUserData.mouStartDate,
            });
            this.MouFormData.patchValue({
              mouEndDate: this.receivedUserData.mouEndDate,
            });
            this.selectedItems = this.receivedUserData.donorList;
            this.MouFormData.patchValue({
              donorList: this.selectedItems,
            });
          }
        });
      }
    });
  }

  createForm() {
    this.MouFormData = this.fb.group({
      mouName: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ]),
      ],
      mouNumber: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ]),
      ],
      mouStartDate: ['', Validators.required],
      mouEndDate: ['', Validators.required],
      donorList: ['', Validators.required],
      amount: [0],
      mouMasterId: [0],
      status: ['N'],
    });
  }

  get f() {
    return this.MouFormData.controls;
  }

  onItemSelect(item: Donor) {
    this.selectedItems.push(item);
    this.MouFormData.patchValue({ donorList: this.selectedItems });
  }
  onSelectAll(items: Donor[]) {
    this.selectedItems = items;
    this.MouFormData.patchValue({ donorList: this.selectedItems });
  }
  onItemDeSelect(item: Donor) {
    console.log(item);
    const index: number = this.selectedItems.findIndex(
      (x) => x.donorMasterId == item.donorMasterId
    );
    if (index !== -1) {
      this.selectedItems.splice(index, 1);
    }
    this.MouFormData.patchValue({ donorList: this.selectedItems });
  }
  onItemDeSelectAll(items: Donor[]) {
    this.selectedItems = items;
    this.MouFormData.patchValue({ donorList: this.selectedItems });
  }

  saveMou() {
    if (this.MouFormData.valid) {
      let saveObj = this.MouFormData.value;
      console.log(saveObj);
      saveObj.mouName = this.validationService.firstCaps(
        saveObj.mouName.trim()
      );

      const postBody = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        moUMasterDTO: saveObj,
      };
      console.log(postBody);
      this.httpService
        .postRequest(`mou/saveOrUpdate`, postBody)
        .subscribe((response) => {
          console.log(response);
          if (response.status) {
            this.showSuccess(response.message);
            this.selectedItems = [];
            this.MouFormData.patchValue({ donorList: this.selectedItems });
            this.MouFormData.reset();
            this.route.navigate([`/mou/create`]);
          } else {
            this.showError(response.message);
          }
        
        });
    }
  }

  ngOnDestroy(): void {
    if (this.editMode) {
      this.editDataSub.unsubscribe();
    }
  
  }

  showSuccess(message) {
    this.toastr.success(message, 'Mou Save', {
      timeOut: 3000,
    });
  }

  showError(message) {
    this.toastr.error(message, 'Mou Save', {
      timeOut: 3000,
    });
  }
}

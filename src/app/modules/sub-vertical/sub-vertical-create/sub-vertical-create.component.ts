import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../core/http/http.service';
import { VerticalMasterSaveDTO, VerticalMasterViewDTO } from '../../core/models/verticalMasterDTO.model';
import { SubVerticalMasterSaveDTO } from '../../core/models/subverticalMasterDTO.model';
import { ValidationService } from '../../shared/services/validation.service';
import { SubVerticalService } from '../sub-vertical.service';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sub-vertical-create',
  templateUrl: './sub-vertical-create.component.html',
  styleUrls: ['./sub-vertical-create.component.css']
})
export class SubVerticalCreateComponent implements OnInit, OnDestroy {

  activeVerticals: VerticalMasterSaveDTO[] = [];
  editDataSub: Subscription;

  constructor(public subVerticalService: SubVerticalService, private route: ActivatedRoute, private httpService: HttpService,
    public validationService: ValidationService, private toastr: ToastrService, private router: Router, private activatedRoute: ActivatedRoute) { }
  saveObj = new SubVerticalMasterSaveDTO('N', '', 0, '',
    new VerticalMasterSaveDTO(0, '', '', 'Y'));
  receivedUserData: any;
  editMode: boolean;


  ngOnInit(): void {
    console.log(this.saveObj)
    const vertcialPostBody: VerticalMasterViewDTO = {
      activeStatus: 'Y',
      dataAccessDTO: this.httpService.dataAccessDTO
    }


    this.route.params.subscribe((data) => {
      console.log(data);
      if (data.subVerticalMasterId) {
        this.editMode = true;
        this.editDataSub = this.subVerticalService.editVerticalData.subscribe(data => {

          console.log(data);
          this.receivedUserData = data;

          if (this.receivedUserData) {
            this.saveObj.status = this.receivedUserData.status;
            this.saveObj.subVerticalMasterId = this.receivedUserData.subVerticalMasterId;
            this.saveObj.subVerticalName = this.receivedUserData.subVerticalName;
            this.saveObj.subVerticalCode = this.receivedUserData.subVerticalCode;
            this.saveObj.verticalMasterDataDTO.verticalMasterId = this.receivedUserData.verticalMasterDataDTO.verticalMasterId;
          }
        })

      }
    })


    this.httpService.postRequest(`vertical/view`, vertcialPostBody).subscribe((data: any) => {
      // this.subVerticalService.activeSubVerticals = data.responseObject;
      this.activeVerticals = data.responseObject;
      console.log(this.activeVerticals);
    });



  }


  saveSubVertical(subVerticalForm: NgForm) {

    this.saveObj.subVerticalName = this.validationService.firstCaps(this.saveObj.subVerticalName.trim())

    this.saveObj.verticalMasterDataDTO.verticalCode = this.activeVerticals.find(item =>
      item.verticalMasterId == this.saveObj.verticalMasterDataDTO.verticalMasterId).verticalCode;

    this.saveObj.verticalMasterDataDTO.verticalName = this.activeVerticals.find(item =>
      item.verticalMasterId == this.saveObj.verticalMasterDataDTO.verticalMasterId).verticalName;


    const postBody = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      subVerticalMasterDTO: this.saveObj
    }

    console.log(postBody);
    this.httpService.postRequest(`subvertical/saveOrUpdate`, postBody).subscribe(response => {
      console.log(response)
      if (response.status) {
        this.showSuccess(response.message);
        this.saveObj = new SubVerticalMasterSaveDTO('N', '', 0, '',
          new VerticalMasterSaveDTO(0, '', '', 'Y'));
      }

      else {
        this.showError(response.message);
      }

    });

  }

  ngOnDestroy(): void {
    if (this.editMode)
      this.editDataSub.unsubscribe()

  }


  showSuccess(message) {
    this.toastr.success(message, 'Project Save', {
      timeOut: 3000,
    });
  }

  showError(message) {
    this.toastr.error(message, 'Project Save', {
      timeOut: 3000,
    });
  }
}
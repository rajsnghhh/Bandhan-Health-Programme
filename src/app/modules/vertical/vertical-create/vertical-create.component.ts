import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../../core/http/http.service';
import { VerticalMasterSaveDTO } from '../../core/models/verticalMasterDTO.model';
import { ValidationService } from '../../shared/services/validation.service';
import { VerticalService } from '../vertical.service';

@Component({
  selector: 'app-vertical-create',
  templateUrl: './vertical-create.component.html',
  styleUrls: ['./vertical-create.component.css']
})
export class VerticalCreateComponent implements OnInit, OnChanges {

  @Input() item: VerticalMasterSaveDTO
  constructor(public verticalService: VerticalService, private httpService: HttpService,
    public validationService: ValidationService, private router: Router, private toastr: ToastrService) { }
  saveObj = new VerticalMasterSaveDTO(0, '', '', 'N');

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    // console.log(this.item);
    if (this.item) {
      this.saveObj.verticalMasterId = this.item.verticalMasterId
      this.saveObj.verticalName = this.item.verticalName;
      this.saveObj.verticalCode = this.item.verticalCode;
      this.saveObj.status = this.item.status;
    }

  }

  saveVertical(verticalForm: NgForm): void {

    this.saveObj.verticalName = this.validationService.firstCaps(this.saveObj.verticalName.trim())
    const postBody = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      verticalMasterDataDTO: this.saveObj
    }

    console.log(this.saveObj)
    this.httpService.postRequest(`vertical/saveOrUpdate`, postBody).subscribe(response => {
      console.log(response)
      if (response.status) {
        this.showSuccess(response.message);
        let currentUrl = this.router.url;
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate([currentUrl]);
        });
      }

      else {
        this.showError(response.message);
      }

    },

      error => {
        console.log(error)
      })


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

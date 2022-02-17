import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ValidationService } from '../../shared/services/validation.service';
import { NgForm } from '@angular/forms';
import { HttpService } from '../../core/http/http.service'
import { Donor } from '../../core/models/donor.model';
import { ActivatedRoute, Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-donor-create',
  templateUrl: './donor-create.component.html',
  styleUrls: ['./donor-create.component.css']
})
export class DonorCreateComponent implements OnInit, OnChanges {

  @Input() item: Donor;
  saveObj = new Donor(0, '', 'N')
  constructor(public validationService: ValidationService, private router: Router, private route: ActivatedRoute,
    private httpService: HttpService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if (this.item) {
      this.saveObj.donorMasterName = this.item.donorMasterName;
      this.saveObj.donorMasterId = this.item.donorMasterId;
      this.saveObj.status = this.item.status;
    }

  }

  saveDonor(formValue: NgForm): void {

    this.saveObj.donorMasterName = this.validationService.firstCaps(this.saveObj.donorMasterName.trim())
    const postBody = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      donorMasterDTO: this.saveObj
    }

    console.log(postBody);

    this.httpService.postRequest(`donor/saveOrUpdate`, postBody).subscribe(response => {
      console.log(response);
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
    });
  }

  showSuccess(message) {
    this.toastr.success(message, 'Donor Save', {
      timeOut: 3000,
    });
  }

  showError(message) {
    this.toastr.error(message, 'Donor Save', {
      timeOut: 3000,
    });
  }

}

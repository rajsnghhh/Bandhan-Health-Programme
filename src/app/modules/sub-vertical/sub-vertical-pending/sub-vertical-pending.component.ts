import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../core/http/http.service';
import { SubVerticalMasterSaveDTO } from '../../core/models/subverticalMasterDTO.model';
import { VerticalMasterSaveDTO } from '../../core/models/verticalMasterDTO.model';
import { ValidationService } from '../../shared/services/validation.service';
import { SubVerticalService } from '../sub-vertical.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-sub-vertical-pending',
  templateUrl: './sub-vertical-pending.component.html',
  styleUrls: ['./sub-vertical-pending.component.css']
})
export class SubVerticalPendingComponent implements OnInit {

  constructor(private httpService: HttpService, 
    public validationService: ValidationService, 
    private router: Router, public subVerticalService: SubVerticalService, private toastr: ToastrService) { }

  page = 1;
  pageSize = 4;

  ngOnInit(): void {
    const postBody = {
      activeStatus: 'N',
      dataAccessDTO: this.httpService.dataAccessDTO
    }

    this.httpService.postRequest(`subvertical/view`, postBody).subscribe((data: any) => {
      this.subVerticalService.pendingSubVerticals = data.responseObject;

      console.log(this.subVerticalService.pendingSubVerticals);
    });

  }

  approveSubVertical(item) {
    console.log(item);
    item.status = 'Y'
    const postBody = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      subVerticalMasterDTO: item
    }

    this.httpService.postRequest(`subvertical/saveOrUpdate`, postBody).subscribe(response => {
      console.log(response)
      if (response.status) {
        let currentUrl = this.router.url;
        this.showSuccess(response.message);
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate([currentUrl]);
        });

      }

      else {
        this.showError('Error');
      }

    });

  }

  showSuccess(message) {
    this.toastr.success(message, 'Sub-Vertical Pending', {
      timeOut: 3000,
    });
  }

  showError(message) {
    this.toastr.error(message, 'Sub-Vertical Pending', {
      timeOut: 3000,
    });
  }

}

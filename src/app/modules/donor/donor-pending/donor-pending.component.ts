import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../../core/http/http.service';
import { DonorService } from '../donor.service';

@Component({
  selector: 'app-donor-pending',
  templateUrl: './donor-pending.component.html',
  styleUrls: ['./donor-pending.component.css']
})
export class DonorPendingComponent implements OnInit {

  // pendingDonors: Donor[]
  constructor(private httpService: HttpService, public donorService: DonorService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    const postBody = {
      activeStatus: 'N',
      dataAccessDTO: this.httpService.dataAccessDTO
    }

    setTimeout(() => {
      this.httpService.postRequest(`donor/view`, postBody).subscribe((data: any) => {
        this.donorService.pendingDonors = data.responseObject;
        console.log(this.donorService.pendingDonors);
      });
    }, 500)


  }

  approveDonor(item) {
    console.log(item)
    item.status = 'Y'
    const postBody = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      donorMasterDTO: item
    }
    this.httpService.postRequest(`donor/saveOrUpdate`, postBody).subscribe(response => {
      console.log(response);
      if (response.status) {
        this.showSuccess(response.message);
        let currentUrl = this.router.url;
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate([currentUrl]);
        });
      }


    });
  }


  showSuccess(message) {
    this.toastr.success(message, 'Donor Pending', {
      timeOut: 3000,
    });
  }

  showError(message) {
    this.toastr.error(message, 'Donor Pending', {
      timeOut: 3000,
    });
  }

}

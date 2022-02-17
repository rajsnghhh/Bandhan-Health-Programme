import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../../core/http/http.service';
import { VerticalService } from '../vertical.service';

@Component({
  selector: 'app-vertical-pending',
  templateUrl: './vertical-pending.component.html',
  styleUrls: ['./vertical-pending.component.css']
})
export class VerticalPendingComponent implements OnInit {

  constructor(private httpService: HttpService, public verticalService: VerticalService, private toastr: ToastrService, private router: Router) { }
  page = 1;
  pageSize = 4;
  ngOnInit(): void {

    const postViewBody = {
      activeStatus: 'N',
      dataAccessDTO: this.httpService.dataAccessDTO
    }

    setTimeout(() => {
      this.httpService.postRequest(`vertical/view`, postViewBody).subscribe((data: any) => {
        this.verticalService.pendingVerticals = data.responseObject;

        console.log(this.verticalService.pendingVerticals);
      });
    }, 500)

  }

  approveVertical(item) {

    console.log(item);
    item.status = 'Y'
    const approvePostBody = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      verticalMasterDataDTO: item
    }
    this.httpService.postRequest(`vertical/saveOrUpdate`, approvePostBody).subscribe(response => {
      console.log(response)
      if (response.status) {
        this.showSuccess(response.message)
        let currentUrl = this.router.url;
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate([currentUrl]);
        });
      }

      else {
        this.showError(response.message)
      }

    },

      error => {
        console.log(error)
      })
  }

  showSuccess(message) {
    this.toastr.success(message, 'Project Pending', {
      timeOut: 3000,
    });
  }

  showError(message) {
    this.toastr.error(message, 'Project Pending', {
      timeOut: 3000,
    });
  }

}

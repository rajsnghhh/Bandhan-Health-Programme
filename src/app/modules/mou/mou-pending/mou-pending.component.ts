import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../../core/http/http.service';
import { MouService } from '../mou.service';

@Component({
  selector: 'app-mou-pending',
  templateUrl: './mou-pending.component.html',
  styleUrls: ['./mou-pending.component.css'],
})
export class MouPendingComponent implements OnInit {
  mouSearch: string;
  page = 1;
  pageSize = 4;

  constructor(
    public mouService: MouService,
    private httpService: HttpService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const postBody = {
      activeStatus: 'N',
      dataAccessDTO: this.httpService.dataAccessDTO,
    };

    this.httpService
      .postRequest(`mou/view`, postBody)
      .subscribe((data: any) => {
        this.mouService.pendingMou = data.responseObject;

        console.log(data.responseObject);
      });
  }

  p(event) {}

  approveMou(item) {
    console.log(item);
    item.status = 'APO';

    const postBody = {
      dataAccessDTO: this.httpService.dataAccessDTOO,
      moUMasterDTO: item,
    };
    console.log(postBody);
    this.httpService
      .postRequest(`mou/saveOrUpdate`, postBody)
      .subscribe((response) => {
        console.log(response);
        if (response.status) {
          let currentUrl = this.router.url;
          this.showSuccess(response.message);
          this.router
            .navigateByUrl('/', { skipLocationChange: true })
            .then(() => {
              this.router.navigate([currentUrl]);
            });
        } else {
          this.showError('Error');
        }
      });
  }

  showSuccess(message) {
    this.toastr.success(message, 'Mou Pending', {
      timeOut: 3000,
    });
  }

  showError(message) {
    this.toastr.error(message, 'Mou Pending', {
      timeOut: 3000,
    });
  }
}

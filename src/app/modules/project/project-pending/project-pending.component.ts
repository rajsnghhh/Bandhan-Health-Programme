import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../../core/http/http.service';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-pending',
  templateUrl: './project-pending.component.html',
  styleUrls: ['./project-pending.component.css']
})
export class ProjectPendingComponent implements OnInit {

  constructor(public projectService: ProjectService, private router: Router, private httpService: HttpService, private toastr: ToastrService) { }
  page = 1;
  pageSize = 4;

  ngOnInit(): void {

    const postBody = {
      activeStatus: 'N',
      dataAccessDTO: this.httpService.dataAccessDTO
    }

    this.httpService.postRequest(`project/view`, postBody).subscribe((data: any) => {
      this.projectService.pendingProjects = data.responseObject;

      console.log(data.responseObject);
    });
  }

  approveProject(item) {
    console.log(item);
    item.status = 'Y'
    const postBody = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      projectMasterDTO: item
    }

    this.httpService.postRequest(`project/saveOrUpdate`, postBody).subscribe(response => {
      console.log(response);
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

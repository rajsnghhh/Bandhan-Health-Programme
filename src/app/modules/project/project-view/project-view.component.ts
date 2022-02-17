
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../core/http/http.service';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent implements OnInit {
  projectSearch: String;
  page = 1;
  pageSize = 4;

  constructor(public projectService: ProjectService, private httpService: HttpService) { }

  ngOnInit(): void {
    const postBody = {
      activeStatus: 'Y',
      dataAccessDTO: this.httpService.dataAccessDTO
    }

    this.httpService.postRequest(`project/view`, postBody).subscribe((data: any) => {
      this.projectService.activeProjects = data.responseObject;

      console.log(data.responseObject);
    });

  }

  setData(item) {
    this.projectService.setData(item);
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../core/http/http.service';
import { MouService } from '../mou.service';

@Component({
  selector: 'app-mou-view',
  templateUrl: './mou-view.component.html',
  styleUrls: ['./mou-view.component.css']
})
export class MouViewComponent implements OnInit {
  mouSearch: String;
  page = 1;
  pageSize = 4;

  constructor(public mouService: MouService, private httpService: HttpService) { }

  ngOnInit(): void {
    const postBody = {
      activeStatus: 'Y',
      dataAccessDTO: this.httpService.dataAccessDTO
    }

    this.httpService.postRequest(`mou/view`, postBody).subscribe((data: any) => {
      this.mouService.activeMou = data.responseObject;

      console.log(data.responseObject);
    });

  }

  setData(item) {
    console.log(item);
    this.mouService.setData(item);

  }

}

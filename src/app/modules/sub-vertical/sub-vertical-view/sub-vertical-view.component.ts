import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../core/http/http.service';
import { SubVerticalService } from '../sub-vertical.service';

@Component({
  selector: 'app-sub-vertical-view',
  templateUrl: './sub-vertical-view.component.html',
  styleUrls: ['./sub-vertical-view.component.css']
})
export class SubVerticalViewComponent implements OnInit {
  subVerticalSearch: String;

  constructor(public subVerticalService: SubVerticalService, private httpService: HttpService) { }
  page = 1;
  pageSize = 4;

  ngOnInit(): void {
    const postBody = {
      activeStatus: 'Y',
      dataAccessDTO: this.httpService.dataAccessDTO
    }

    this.httpService.postRequest(`subvertical/view`, postBody).subscribe((data: any) => {
      this.subVerticalService.activeSubVerticals = data.responseObject;

      console.log(this.subVerticalService.activeSubVerticals);
    });
   
  }

  setData(item) {
    // let sendData = (<HTMLInputElement>document.getElementById("sendData")).value;
    this.subVerticalService.setData(item);
  }


}




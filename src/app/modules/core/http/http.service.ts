import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { SidebarService } from '../../shared/sidebar/sidebar.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseURL = environment.apiUrl;
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Basic dXNlcjE6c2VjcmV0MQ=='

  })
  testUrl = `http://192.168.149.221:8085/`;
  dataAccessDTO = {
    userId: this.sidebarService.userId,
    userName: this.sidebarService.loginId,
  }

  dataAccessDTOO = {
    userId: 5,
    userName: 'BK000005'
  }

  constructor(private http: HttpClient, private sidebarService: SidebarService) { }

  postRequest(url, body): Observable<any> {
    return this.http.post(this.testUrl + url, body, { headers: this.headers })
  }

  getChildrenRegister(obj): any {
    return this.http.post(`${this.baseURL}acr/view`, obj)
  }

  getLactatingMotherRegister(obj): any {
    return this.http.post(`${this.baseURL}lactatingmotherregister/getVillageWiseChildDetails`, obj)
  }
}

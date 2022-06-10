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

  dataAccessDTO = {
    userId: this.sidebarService.userId,
    userName: this.sidebarService.loginId,
  }

  constructor(private http: HttpClient, private sidebarService: SidebarService) { }

  postRequest(url, body): Observable<any> {
    return this.http.post(this.baseURL + url, body, { headers: this.headers })
  }

  getChildrenRegister(obj): any {
    return this.http.post(`${this.baseURL}acr/view`, obj)
  }

  getLactatingMotherRegister(obj): any {
    return this.http.post(`${this.baseURL}lactatingmotherregister/getVillageWiseChildDetails`, obj)
  }

  getPregnantWomenList(obj): any {
    return this.http.post(`${this.baseURL}pwr/getVillageWisePregnantWomanDetails`, obj)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChildrenRegisterService {
  
  public sendData = new BehaviorSubject<any>('');
  editChildData = this.sendData.asObservable();

  baseURL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  viewExistingFamilyLists(obj): any {
    return this.http.post(`${this.baseURL}baselinesurvey/view`, obj)
  }

  viewExistingFamilyDetails(obj): any {
    return this.http.post(`${this.baseURL}familydetail/view`, obj)
  }

  saveChild(obj) : any {
    return this.http.post(`${this.baseURL}childdetail/saveOrUpdate`, obj)
  }

  childStatus(obj) : any {
    return this.http.post(`${this.baseURL}familydetail/childstatus`, obj)
  }

  editChild(value) {
    this.sendData.next(value);
  }

}

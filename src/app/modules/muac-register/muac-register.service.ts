import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MuacRegisterService {

  constructor(private http: HttpClient) { }

  muacCampList(obj): any {
    return this.http.post('http://192.168.153.56:6181/bhp/api/v1/muaccamp/branchWiseList', obj)
  }

  saveMuac(obj): any {
    return this.http.post('http://192.168.153.56:6181/bhp/api/v1/muaccamp/saveOrUpdate', obj)
  }

  deleteMuac(obj): any {
    return this.http.post('http://192.168.153.56:6181/bhp/api/v1/muaccamp/delete', obj)

  }
}

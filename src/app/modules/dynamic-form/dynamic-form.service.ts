import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DynamicFormService {

  public sendData = new BehaviorSubject<any>('');
  editFormData = this.sendData.asObservable();

  baseURL = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getFormUi(obj): any {
    return this.http.post(`${this.baseURL}form/getFormUi`, obj);
  }

  saveDynamicForm(obj): any {
    return this.http.post(`${this.baseURL}form/saveFormUi`, obj);
  }

  setData(value) {
    this.sendData.next(value);
  }

}

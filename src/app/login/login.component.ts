import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  show: boolean = false;
  @Input('parentData') loginValue: boolean;

  dataAccessDTO = {
    deviceType: "W",
    loginId: "BK000003",
    password: "1234"
  }

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [null],
      password: ['aaa']
    });

  }
  password() {
    this.show = !this.show;
  }
  login() {

    this.http.post('http://192.168.153.56:6181/bhp/api/v1/user/login', this.dataAccessDTO).subscribe((res) => {
      console.log(res);
      this.router.navigate(['./Baseline-Survey/create']);
    })
  }

}

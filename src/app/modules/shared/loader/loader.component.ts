import { Component, OnInit } from '@angular/core';
import { ValidationService } from '../services/validation.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  // abc: any;
  // count: any;

  constructor() { }

  ngOnInit(): void {
    // this.setIntrvl();
  }

  // startCount() {
  //   this.count = this.count - 1;
  //   console.log('Count is ' + this.count);
  //   if (this.count === 0) {
  //     clearInterval(this.abc);
  //   }
  // }

  // setIntrvl() {
  //   this.abc = setInterval(() => this.startCount(), 1000);
  // }

}

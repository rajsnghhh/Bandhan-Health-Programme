import { Component } from '@angular/core';
import { ValidationService } from './modules/shared/services/validation.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bhp-web';
  fullscreenData: boolean;
  loginValue: boolean = false;

  constructor(public validationService: ValidationService) { }

  fullscreenMethod(data) {
    this.fullscreenData = data;
    this.validationService.val = this.fullscreenData;
  }

}

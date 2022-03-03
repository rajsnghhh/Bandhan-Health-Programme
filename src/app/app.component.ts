import { Component } from '@angular/core';
import { LoginService } from './login/login.service';
import { User } from './login/user';
import { ValidationService } from './modules/shared/services/validation.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bhp-web';
  fullscreenData: boolean;
  user: User;
  constructor(public validationService: ValidationService, private accountService: LoginService) {
    this.accountService.user.subscribe((x) => { this.user = x; });
    // console.log(this.user, 'appComponent')
  }

  fullscreenMethod(data) {
    this.fullscreenData = data;
    this.validationService.val = this.fullscreenData;
  }

  logout() {
    if (confirm('Are you sure, you want to Logout ?')) {
      this.accountService.logout();
    }
  }

}

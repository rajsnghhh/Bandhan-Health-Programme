import { Component } from '@angular/core';
import { LoginService } from './login/login.service';
import { User } from './login/user';
import { ConfirmationDialogService } from './modules/shared/confirmation-dialog/confirmation-dialog.service';
import { ValidationService } from './modules/shared/services/validation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bhp-web';
  fullscreenData: boolean;
  user: User;

  constructor(public validationService: ValidationService, private accountService: LoginService, private confirmationDialogService: ConfirmationDialogService) {
    this.accountService.user.subscribe((x) => { this.user = x; });
    console.log(this.user, 'appComponent')
  }

  fullscreenMethod(data) {
    this.fullscreenData = data;
    this.validationService.val = this.fullscreenData;
  }

  logout() {

    this.confirmationDialogService.confirm('', 'Are you sure you want to log out ?')
      .then(() => this.accountService.logout()
      )

      .catch(() => '');
      
  }

}

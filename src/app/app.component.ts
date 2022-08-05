import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChangePasswordComponent } from './login/change-password/change-password.component';
import { LoginService } from './login/login.service';
import { User } from './login/user';
import { BaselineSurveyService } from './modules/baseline-survey/baseline-survey.service';
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

  constructor(public validationService: ValidationService, private accountService: LoginService,
    private confirmationDialogService: ConfirmationDialogService, private baselineService: BaselineSurveyService,
    public dialog: MatDialog,
  ) {
    this.accountService.user.subscribe((x) => { this.user = x; });
    console.log(this.user, 'appComponent')
  }

  fullscreenMethod(data) {
    this.fullscreenData = data;
    this.validationService.val = this.fullscreenData;
  }

  openChangePassword() {
    const dialogRef = this.dialog.open(ChangePasswordComponent, {
      width: '500px',
      height: '450px',
      data: {
        userId: this.user.responseObject.userdetailDTO.userId
      }
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  logout() {

    this.confirmationDialogService.confirm('', 'Are you sure you want to log out ?')
      .then(() => {
        this.accountService.logout();
        this.baselineService.timeToTentativeEndDate = '';
      }
      )

      .catch(() => '');

  }

}

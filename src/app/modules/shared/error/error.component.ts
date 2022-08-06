import { Component, OnInit } from '@angular/core';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor(private confirmationDialogService: ConfirmationDialogService) { }

  ngOnInit(): void {
    this.confirmationDialogService.confirm('', 'You are not authorized to use this function. Please contact your supervisor if you need access.')
      .then(() => history.go(-2)
      )
      .catch(() => history.go(-2));
  }

}



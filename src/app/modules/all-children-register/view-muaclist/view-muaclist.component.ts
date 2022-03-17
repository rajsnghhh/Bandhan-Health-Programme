import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../../core/http/http.service';
import { ConfirmationDialogService } from '../../shared/confirmation-dialog/confirmation-dialog.service';
import { SidebarService } from '../../shared/sidebar/sidebar.service';
import { AcrService } from '../acr.service';
import { AddChildMuacComponent } from '../add-child-muac/add-child-muac.component';

@Component({
  selector: 'app-view-muaclist',
  templateUrl: './view-muaclist.component.html',
  styleUrls: ['./view-muaclist.component.css']
})
export class ViewMuaclistComponent implements OnInit {
  childMuac: Array<any> = [];
  childId: any;
  regionBranchHide: boolean;

  constructor(@Optional() public dialogRef: MatDialogRef<ViewMuaclistComponent>, public dialog: MatDialog,
    public acrService: AcrService, @Inject(MAT_DIALOG_DATA) public data: any, private httpService: HttpService,
    private http: HttpClient, private toaster: ToastrService, private sidebarService: SidebarService,
    private confirmationDialogService: ConfirmationDialogService,) { }

  ngOnInit(): void {
    this.childId = this.data.childId;
    this.viewMuacChildList();
    this.regionBranchHide = this.sidebarService.regionBranchHide;
  }

  viewMuacChildList() {
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      childId: this.data.childId
    }
    this.http.post(`${this.httpService.baseURL}muaccamp/viewMuacRegistersOfAChild`, Dto).subscribe((res: any) => {
      this.childMuac = res.responseObject;
    })
  }

  onEdit(index) {
    this.acrService.editMode = false;
    const dialogRef = this.dialog.open(AddChildMuacComponent, {
      width: '500px',
      height: '450px',
      data: {
        muacRegisterId: this.childMuac[index].muacRegisterId,
        childId: this.childId,
        muacCampNumber: this.childMuac[index].muacCampDto.muacCampNumber,
        height: this.childMuac[index].height,
        weight: this.childMuac[index].weight,
        muac: this.childMuac[index].muac
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.viewMuacChildList();
    });
  }
  onDelete(index) {
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      muacDataDto: {
        muacRegisterId: this.childMuac[index].muacRegisterId,
        muacCampId: null,
        childId: this.data.childId,
        height: this.childMuac[index].height,
        weight: this.childMuac[index].weight,
        muac: this.childMuac[index].muac,
        active_flag: "D"
      }
    }

    this.confirmationDialogService.confirm('', 'Do you want to delete ?').then(() => {
      this.http.post(`${this.httpService.baseURL}acr/muac/saveOrUpdate`, Dto).subscribe((res) => {
        this.viewMuacChildList();
        this.showSuccess('Delete');
      })
    }).catch(() => '');
  }

  closeDialog() {
    this.dialogRef.close();
  }

  showSuccess(message) {
    this.toaster.success(message, 'Child MUAC delete', {
      timeOut: 3000,
    });
  }
}

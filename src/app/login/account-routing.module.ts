import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login.component';
import { ResetComponent } from './reset/reset.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'reset', component: ResetComponent },
      { path: 'changePassword', component: ChangePasswordComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }

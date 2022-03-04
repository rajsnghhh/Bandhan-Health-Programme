import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './login/auth.guard';
import { RoleAcessResolver } from './role-access/role-access-resolver.service';
import { RoleAccessComponent } from './role-access/role-access.component';


const routes: Routes = [
  { path: '', loadChildren: () => import('./login/account.module').then(m => m.AccountModule) },
  { path: 'donor', loadChildren: () => import('./modules/donor/donor.module').then(m => m.DonorModule), canActivate: [AuthGuard] },
  { path: 'role-access', component: RoleAccessComponent, resolve: { roleAcess: RoleAcessResolver }, canActivate: [AuthGuard] },
  { path: 'vertical', loadChildren: () => import('./modules/vertical/vertical.module').then(m => m.VerticalModule), canActivate: [AuthGuard] },
  { path: 'sub-vertical', loadChildren: () => import('./modules/sub-vertical/sub-vertical.module').then(m => m.SubVerticalModule), canActivate: [AuthGuard] },
  { path: 'project', loadChildren: () => import('./modules/project/project.module').then(m => m.ProjectModule), canActivate: [AuthGuard] },
  { path: 'mou', loadChildren: () => import('./modules/mou/mou.module').then(m => m.MouModule), canActivate: [AuthGuard] },
  { path: 'dynamic-form', loadChildren: () => import('./modules/dynamic-form/dynamic-form.module').then(m => m.DynamicFormModule), canActivate: [AuthGuard] },
  { path: 'Baseline-Survey', loadChildren: () => import('./modules/baseline-survey/baseline-survey.module').then(m => m.BaselineSurveyModule), canActivate: [AuthGuard] },
  { path: 'central-register', loadChildren: () => import('./modules/central-register/central-register.module').then(m => m.CentralRegisterModule), canActivate: [AuthGuard] },
  { path: 'children-register', loadChildren: () => import('./modules/children-register/children-register.module').then(m => m.ChildrenRegisterModule), canActivate: [AuthGuard] },
  { path: 'family-info', loadChildren: () => import('./modules/family-info/family-info.module').then(m => m.FamilyInfoModule), canActivate: [AuthGuard] },
  { path: 'muac-register', loadChildren: () => import('./modules/muac-register/muac-register.module').then(m => m.MuacRegisterModule), canActivate: [AuthGuard] },
  { path: 'core', loadChildren: () => import('./modules/core/core.module').then(m => m.CoreModule), canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

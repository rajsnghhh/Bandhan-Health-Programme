import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './login/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./login/account.module').then(m => m.AccountModule) },
  { path: 'donor', loadChildren: () => import('./modules/donor/donor.module').then(m => m.DonorModule), canActivate: [AuthGuard] },
  { path: 'user', loadChildren: () => import('./modules/admin-user/admin-user.module').then(m => m.AdminUserModule), canActivate: [AuthGuard] },
  { path: 'user-hh-ss-remap', loadChildren: () => import('./modules/user-hh-ss-remap/user-hh-ss-remap.module').then(m => m.UserHhSsRemapModule), canActivate: [AuthGuard] },
  { path: 'role-access', loadChildren: () => import('./modules/role-access/role-access.module').then(m => m.RoleAccessModule), canActivate: [AuthGuard] },
  { path: 'vertical', loadChildren: () => import('./modules/vertical/vertical.module').then(m => m.VerticalModule), canActivate: [AuthGuard] },
  { path: 'sub-vertical', loadChildren: () => import('./modules/sub-vertical/sub-vertical.module').then(m => m.SubVerticalModule), canActivate: [AuthGuard] },
  { path: 'project', loadChildren: () => import('./modules/project/project.module').then(m => m.ProjectModule), canActivate: [AuthGuard] },
  { path: 'mou', loadChildren: () => import('./modules/mou/mou.module').then(m => m.MouModule), canActivate: [AuthGuard] },
  { path: 'dynamic-form', loadChildren: () => import('./modules/dynamic-form/dynamic-form.module').then(m => m.DynamicFormModule), canActivate: [AuthGuard] },
  { path: 'region-branch', loadChildren: () => import('./modules/region-branch-setup/region-branch-setup.module').then(m => m.RegionBranchSetupModule), canActivate: [AuthGuard] },
  { path: 'block', loadChildren: () => import('./modules/block-setup/block-setup.module').then(m => m.BlockSetupModule), canActivate: [AuthGuard] },
  { path: 'gp', loadChildren: () => import('./modules/gp-setup/gp-setup.module').then(m => m.GpSetupModule), canActivate: [AuthGuard] },
  { path: 'Baseline-Survey', loadChildren: () => import('./modules/baseline-survey/baseline-survey.module').then(m => m.BaselineSurveyModule), canActivate: [AuthGuard] },
  { path: 'central-register', loadChildren: () => import('./modules/central-register/central-register.module').then(m => m.CentralRegisterModule), canActivate: [AuthGuard] },
  { path: 'children-register', loadChildren: () => import('./modules/children-register/children-register.module').then(m => m.ChildrenRegisterModule), canActivate: [AuthGuard] },
  { path: 'family-info', loadChildren: () => import('./modules/family-info/family-info.module').then(m => m.FamilyInfoModule), canActivate: [AuthGuard] },
  { path: 'muac-register', loadChildren: () => import('./modules/muac-register/muac-register.module').then(m => m.MuacRegisterModule), canActivate: [AuthGuard] },
  { path: 'core', loadChildren: () => import('./modules/core/core.module').then(m => m.CoreModule), canActivate: [AuthGuard] },
  { path: 'pem-register', loadChildren: () => import('./modules/pem-register/pem-register.module').then(m => m.PemRegisterModule), canActivate: [AuthGuard] },
  { path: 'acr', loadChildren: () => import('./modules/all-children-register/all-child-register.module').then(m => m.AllChildRegisterModule), canActivate: [AuthGuard] },
  { path: 'lmr', loadChildren: () => import('./modules/lactating-mother-register/lm-register.module').then(m => m.LmRegisterModule), canActivate: [AuthGuard] },
  { path: 'pw-register', loadChildren: () => import('./modules/pregnant-women-register/pw-register.module').then(m => m.PwRegisterModule), canActivate: [AuthGuard] },
  { path: 'daily-activity-register', loadChildren: () => import('./modules/daily-activity-register/daily-activity-register.module').then(m => m.DailyActivityRegisterModule), canActivate: [AuthGuard] },
  { path: 'village-setup', loadChildren: () => import('./modules/village-setup/village-setup.module').then(m => m.VillageSetupModule), canActivate: [AuthGuard] },
  { path: 'ss-setup', loadChildren: () => import('./modules/ss-setup/ss-setup.module').then(m => m.SsSetupModule), canActivate: [AuthGuard] },
  { path: 'privacy_policy', loadChildren: () => import('./modules/shared/privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyModule), canActivate: [AuthGuard] },
  { path: 'branch-villageMap', loadChildren: () => import('./modules/branch-village-map/branch-village-map.module').then(m => m.BranchVillageMapModule), canActivate: [AuthGuard] },
  { path: 'district-setup', loadChildren: () => import('./modules/district-setup/district-setup.module').then(m => m.DistrictSetupModule) },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

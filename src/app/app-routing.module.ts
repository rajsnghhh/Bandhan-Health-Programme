import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RoleAcessResolver } from './role-access/role-access-resolver.service';
import { RoleAccessComponent } from './role-access/role-access.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'donor', loadChildren: () => import('./modules/donor/donor.module').then(m => m.DonorModule) },
  { path: 'role-access', component: RoleAccessComponent, resolve: { roleAcess: RoleAcessResolver } },
  { path: 'vertical', loadChildren: () => import('./modules/vertical/vertical.module').then(m => m.VerticalModule) },
  { path: 'sub-vertical', loadChildren: () => import('./modules/sub-vertical/sub-vertical.module').then(m => m.SubVerticalModule) },
  { path: 'project', loadChildren: () => import('./modules/project/project.module').then(m => m.ProjectModule) },
  { path: 'mou', loadChildren: () => import('./modules/mou/mou.module').then(m => m.MouModule) },
  { path: 'dynamic-form', loadChildren: () => import('./modules/dynamic-form/dynamic-form.module').then(m => m.DynamicFormModule) },
  { path: 'Baseline-Survey', loadChildren: () => import('./modules/baseline-survey/baseline-survey.module').then(m => m.BaselineSurveyModule) },
  { path: 'central-register', loadChildren: () => import('./modules/central-register/central-register.module').then(m => m.CentralRegisterModule) },
  { path: 'children-register', loadChildren: () => import('./modules/children-register/children-register.module').then(m => m.ChildrenRegisterModule) },
  { path: 'family-info', loadChildren: () => import('./modules/family-info/family-info.module').then(m => m.FamilyInfoModule) },
  { path: 'muac-register', loadChildren: () => import('./modules/muac-register/muac-register.module').then(m => m.MuacRegisterModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

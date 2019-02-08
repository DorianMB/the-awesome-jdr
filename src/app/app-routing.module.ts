import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {AuthGuardService} from './services/auth-guard.service';
import {PersoListComponent} from './perso-list/perso-list.component';
import {PersoFormComponent} from './perso-list/perso-form/perso-form.component';
import {SinglePersoComponent} from './perso-list/single-perso/single-perso.component';
import {PersoEditComponent} from './perso-list/perso-edit/perso-edit.component';

const routes: Routes = [
  {path: 'auth/signup', component: SignupComponent},
  {path: 'auth/signin', component: SigninComponent},
  {path: 'persos', component: PersoListComponent},
  {path: 'persos/new', canActivate: [AuthGuardService], component: PersoFormComponent},
  {path: 'persos/view/:id', canActivate: [AuthGuardService], component: SinglePersoComponent},
  {path: 'persos/edit/:id', canActivate: [AuthGuardService], component: PersoEditComponent},
  {path: '', redirectTo: 'persos', pathMatch: 'full'},
  {path: '**', redirectTo: 'persos'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

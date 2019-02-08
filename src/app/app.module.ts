import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthService} from './services/auth.service';
import {AuthGuardService} from './services/auth-guard.service';
import {PersosService} from './services/perso.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { PersoListComponent } from './perso-list/perso-list.component';
import { SinglePersoComponent } from './perso-list/single-perso/single-perso.component';
import { PersoFormComponent } from './perso-list/perso-form/perso-form.component';
import { PersoEditComponent } from './perso-list/perso-edit/perso-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    SigninComponent,
    PersoListComponent,
    SinglePersoComponent,
    PersoFormComponent,
    PersoEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    PersosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

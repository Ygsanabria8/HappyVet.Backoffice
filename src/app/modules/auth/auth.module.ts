import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AuthComponent } from './auth.component';


@NgModule({
  declarations: [
    AuthComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }


import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module'

import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    LoginRoutingModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: []
})
export class LoginModule { }

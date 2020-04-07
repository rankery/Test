import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './scenes/login/login.module';
import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    LoginModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./material-module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {authInterceptorProviders} from "./helper/auth-interceptor.service";
import {authErrorInterceptorProvider} from "./helper/error-interceptor.service";
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    RouterOutlet,
    AppRoutingModule
  ],
  // providers: [authInterceptorProviders, authErrorInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';

import '@angular/common/locales/global/pl';
import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './core/navigation/navigation.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreHttpModule } from './core/core-http/core-http.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [AppComponent, NavigationComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    CoreHttpModule,
    NgxSpinnerModule,
    StoreModule.forRoot({}),
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

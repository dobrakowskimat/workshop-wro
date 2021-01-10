import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';

import '@angular/common/locales/global/pl';
import { HttpClientModule } from '@angular/common/http';
import { BooksListComponent } from './main/books-list/books-list.component';

@NgModule({
  declarations: [AppComponent, BooksListComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

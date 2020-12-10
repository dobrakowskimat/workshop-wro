import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';

import '@angular/common/locales/global/pl';
import { HttpClientModule } from '@angular/common/http';
import { BookslistComponent } from './main/books/bookslist/bookslist.component';
import { BookComponent } from './main/books/book/book.component';

@NgModule({
  declarations: [AppComponent, BookslistComponent, BookComponent],
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

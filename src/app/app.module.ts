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
import { BookDetailsComponent } from './main/books/book-details/book-details.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { CommonModule } from '@angular/common';
import { EditBookComponent } from './main/books/edit-book/edit-book.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BookslistComponent,
    BookComponent,
    BookDetailsComponent,
    NavigationComponent,
    EditBookComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

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
import { NavigationComponent } from './main/navigation/navigation.component';
import { ShoppingCartComponent } from './main/shopping-cart/shopping-cart.component';
import { ShoppingCartBookComponent } from './main/shopping-cart-book/shopping-cart-book.component';

@NgModule({
  declarations: [AppComponent, BookslistComponent, BookComponent, BookDetailsComponent, NavigationComponent, ShoppingCartComponent, ShoppingCartBookComponent],
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

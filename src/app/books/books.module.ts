import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookslistComponent } from './bookslist/bookslist.component';
import { BookComponent } from './book/book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditBookComponent } from './edit-book/edit-book.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { BooksRoutingModule } from './books-routing.module';
import { AddBookComponent } from './add-book/add-book.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    BookslistComponent,
    BookComponent,
    BookDetailsComponent,
    EditBookComponent,
    AddBookComponent,
    ShoppingCartComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FlexLayoutModule,
    MatButtonModule,
    BooksRoutingModule,
  ],
})
export class BooksModule {}

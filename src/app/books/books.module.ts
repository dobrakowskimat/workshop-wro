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
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [BookslistComponent, BookComponent, BookDetailsComponent, EditBookComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FlexLayoutModule,
    MatButtonModule,
    BooksRoutingModule,
    StoreModule.forFeature('books', {}),
  ],
})
export class BooksModule {}

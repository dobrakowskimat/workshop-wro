import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookslistComponent } from './bookslist/bookslist.component';
import { BookComponent } from './book/book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { EditBookComponent } from './edit-book/edit-book.component';



@NgModule({
  declarations: [BookslistComponent, BookComponent, BookDetailsComponent, EditBookComponent],
  imports: [
    CommonModule
  ]
})
export class BooksModule { }

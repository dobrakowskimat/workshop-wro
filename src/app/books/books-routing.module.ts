import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookslistComponent } from './bookslist/bookslist.component';
import { EditBookComponent } from './edit-book/edit-book.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'book-list',
    pathMatch: 'full',
  },
  {
    path: 'book-list',
    component: BookslistComponent,
  },
  {
    path: 'book/add',
    component: AddBookComponent,
  },
  {
    path: 'book/:id',
    component: BookDetailsComponent,
  },
  {
    path: 'book/:id/edit',
    component: EditBookComponent,
  },
  {
    path: 'shopping-cart',
    redirectTo: 'book-list',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}

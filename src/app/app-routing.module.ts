import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookDetailsComponent } from './main/books/book-details/book-details.component';
import { BookslistComponent } from './main/books/bookslist/bookslist.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'book-list',
  pathMatch: 'full',
},
{
  path:'book-list',
  component: BookslistComponent
},
{
  path: 'book/:id',
  component: BookDetailsComponent,
},
{
  path:'shopping-cart',
  redirectTo: 'book-list'

},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'book',
    loadChildren: () => import('./books/books.module').then((m) => m.BooksModule)
  },
  {
  path: '',
  redirectTo: 'book-list',
  pathMatch: 'full',
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

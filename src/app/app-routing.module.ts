import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'book',
    loadChildren: () => import('./books/books.module').then((m) => m.BooksModule),
  },
  {
    path: '',
    redirectTo: 'book',
    pathMatch: 'full',
  },
  {
    path: 'shopping-cart',
    redirectTo: 'book',
  },
  { path: '**', redirectTo: 'book' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

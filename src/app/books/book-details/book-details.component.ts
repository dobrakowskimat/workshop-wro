import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { BooksService } from 'src/app/services/books.service';
import { Book } from '../shared/models/book.model';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  bookId$: Observable<string>;
  book$: Observable<Book>;

  constructor(
    private activeRoute: ActivatedRoute,
    private readonly booksService: BooksService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.bookId$ = this.activeRoute.paramMap.pipe(
      map((params) => params.get('id'))
    );
    this.book$ = this.bookId$.pipe(
      switchMap((id) => this.booksService.getBook(id))
    );
  }

  addToShoppingCard(selectedBook: Book) {
    //   this.selectedBookToShoppingCard.emit(selectedBook)
  }

  deleteBook(bookId: string) {
    this.booksService.deleteBook(bookId).subscribe((res) => {
      console.log('Book succesfully removed');
      this.router.navigate(['/book/book-list']);
    });
  }
}

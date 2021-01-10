import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { BooksService } from 'src/app/services/books.service';
import { Book } from '../shared/models/book.model';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit, OnChanges {

  @Input() bookId: number | null;
  // @Input() set bookId(value: number) {
  //   this.book$ = this.bookService.getBookById(value);
  // }

  book$: Observable<Book>;

  constructor(private bookService: BooksService) { }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.bookId) {
      this.book$ = this.bookService.getBookById(changes.bookId.currentValue as number)
    }
  }

  ngOnInit(): void {
  }

}

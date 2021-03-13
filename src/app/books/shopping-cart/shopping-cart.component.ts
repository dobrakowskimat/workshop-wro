import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { BooksService } from 'src/app/services/books.service';
import { Book } from '../shared/models/book.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  shoppingCart: Book[] = [];
  subscription: Subscription;

  // output zawsze przed konstruktorem i inne property i inputy itp. itd.
  @Output() bookRemoved = new EventEmitter<Book>();

  constructor(private booksService: BooksService) {
    this.subscription = this.booksService.onAddBookToBucket$.subscribe(
      (book) => {
        this.shoppingCart.push(book);
      }
    );
  }

  ngOnInit(): void {}

  bookRemovedFromShoppingCart(book: Book) {
    this.bookRemoved.emit(book);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

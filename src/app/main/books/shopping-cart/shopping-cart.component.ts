import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../shared/models/book.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  @Input() selectedBook: Book;

  constructor() { }

  ngOnInit(): void {
  }

}

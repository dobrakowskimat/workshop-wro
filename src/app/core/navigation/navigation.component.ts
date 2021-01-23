import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/main/books/shared/models/book.model';
import { View } from '../../main/books/shared/enums';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Input() selectedRoute: View;
  @Output() routeSelected = new EventEmitter<View>();
  @Output() bookEdited = new EventEmitter<Book>();
  view = View;

  constructor() { }

  ngOnInit(): void {
  }

  selectView(view : View) {
    this.routeSelected.emit(view);
  }

  clearEditedBook() {
    this.bookEdited.emit(null);
  }
}

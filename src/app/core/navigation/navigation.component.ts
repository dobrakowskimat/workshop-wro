import { Component, Input, OnInit, Output } from '@angular/core';
import { View } from 'src/app/main/books/shared/enums';
import { EventEmitter } from 'protractor';
import { BookDetailsComponent } from 'src/app/main/books/book-details/book-details.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  @Input() view: View;
  @Output() viewSelected = new EventEmitter<View>();
  View = View;

  constructor() {}

  ngOnInit(): void {}

  navigate(view: View){
    switch (view) {
      case View.AddBook:
        this.viewSelected.emit(view)

        break;

      default:
        this.viewSelected.emit(View.BookDetails);
    }
    //this.viewSelected.emit(View)
  }
}

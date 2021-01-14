import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { View } from '../../main/books/shared/enums';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Input() selectedRoute: View;
  @Output() routeSelected = new EventEmitter<View>();
  view = View;

  constructor() { }

  ngOnInit(): void {
  }

  selectView(view : View) {
    this.routeSelected.emit(view)
  }
}

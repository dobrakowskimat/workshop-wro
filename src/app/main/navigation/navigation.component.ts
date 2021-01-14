import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { View } from '../books/shared/enums';

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

  selectView(selectedRoute: View){
    this.routeSelected.emit(selectedRoute);
  }
}

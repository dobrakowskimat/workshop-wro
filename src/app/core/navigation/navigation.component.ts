import { Component, Input, OnInit } from '@angular/core';
import { View } from 'src/app/main/books/shared/enums';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  @Input() view: View;
  View = View;

  constructor() {}

  ngOnInit(): void {}
}

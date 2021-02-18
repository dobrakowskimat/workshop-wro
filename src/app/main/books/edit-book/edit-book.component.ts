import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {
  name: FormControl;


  constructor() { }

  ngOnInit(): void {
    this.name = new FormControl('dowolne');
  }

}

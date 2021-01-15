import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss'],
})
export class EditBookComponent implements OnInit {
  bookForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      title: this.fb.control('', [Validators.required]),
      subtitle: this.fb.control(''),
      originallyPublishedYear: this.fb.control(''),
      seriesTitle: this.fb.control(''),
      pageCount: this.fb.control(''),
      description: this.fb.control(''),
      price: this.fb.control(''),
      publishDate: this.fb.control(''),
    });
  }

  onSubmit() {
    if (this.bookForm.invalid) {
      console.log('invalid');
    }
    console.log(JSON.stringify(this.bookForm.value));
  }
}

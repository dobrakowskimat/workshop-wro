import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { rangeValidator } from 'src/app/main/validators/range-validator';
import { BooksService } from 'src/app/services/books.service';
import { BookPayload } from '../shared/models/book.model';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss'],
})
export class AddBookComponent implements OnInit {
  bookForm: FormGroup;
  subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private booksService: BooksService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      title: this.fb.control('', [Validators.required]),
      subtitle: this.fb.control(''),
      originallyPublishedYear: this.fb.control('', rangeValidator(0, 2021)),
      seriesTitle: this.fb.control(''),
      pageCount: this.fb.control(''),
      description: this.fb.control(''),
      price: this.fb.control(''),
      publishDate: this.fb.control(''),
      authorFullName: this.fb.control(''),
    });
  }

  onSubmit() {
    if (this.bookForm.invalid) {
      console.log('Form invalid');
    }

    this.booksService
      .addBook(this.bookForm.value as BookPayload)
      .subscribe((book) => {
        console.log('Book successfully added');
        this.router.navigate(['/book/book/' + book.id]);
      });
  }
}

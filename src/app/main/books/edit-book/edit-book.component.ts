import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book, BookPayload } from '../shared/models/book.model';
import { Subscription } from 'rxjs';
import { BooksService } from 'src/app/services/books.service';
import { rangeValidator } from '../shared/validators/range-validator';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss'],
})
export class EditBookComponent implements OnInit {
  bookForm: FormGroup;
  subscription = new Subscription();
  @Input() selectedBook: Book;

  constructor(private fb: FormBuilder, private booksService: BooksService) {}

  ngOnInit(): void {
    if (this.selectedBook != null) {
      this.bookForm = this.fb.group({
        title: this.fb.control(this.selectedBook.title, [Validators.required]),
        subtitle: this.fb.control(this.selectedBook.subtitle),
        originallyPublishedYear: this.fb.control(this.selectedBook.originallyPublishedYear, rangeValidator(0, 2021)),
        seriesTitle: this.fb.control(this.selectedBook.seriesTitle),
        pageCount: this.fb.control(this.selectedBook.pageCount),
        description: this.fb.control(this.selectedBook.description),
        publishDate: this.fb.control(this.selectedBook.originallyPublishedYear),
      });
    } else {
      this.bookForm = this.fb.group({
        title: this.fb.control('', [Validators.required]),
        subtitle: this.fb.control(''),
        originallyPublishedYear: this.fb.control('', rangeValidator(0, 2021)),
        seriesTitle: this.fb.control(''),
        pageCount: this.fb.control(''),
        description: this.fb.control(''),
        publishDate: this.fb.control(''),
      });
    }
  }

  onSubmit() {
    if (this.bookForm.invalid) {
      console.log('invalid');
    }
    // if (this.selectedBook != null) {
    //   this.editBook(this.bookForm.value);
    // }
    console.log(JSON.stringify(this.bookForm.value));
  }

  editBook(book: BookPayload) {
    this.subscription.add(this.booksService.editBook(book).subscribe(() => console.log('Book successfully updated')));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

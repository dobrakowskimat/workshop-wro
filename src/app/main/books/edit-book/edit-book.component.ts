import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book, BookPayload } from '../shared/models/book.model';
import { Observable, Subscription } from 'rxjs';
import { BooksService } from 'src/app/services/books.service';
import { rangeValidator } from '../shared/validators/range-validator';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss'],
})
export class EditBookComponent implements OnInit {
  bookForm: FormGroup;
  subscription = new Subscription();
  editedBook$: Observable<Book>;

  constructor(private activedRoute: ActivatedRoute, private fb: FormBuilder, private booksService: BooksService) {}

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      title: this.fb.control('', [Validators.required]),
      subtitle: this.fb.control(''),
      originallyPublishedYear: this.fb.control('', rangeValidator(0, 2021)),
      seriesTitle: this.fb.control(''),
      pageCount: this.fb.control(''),
      description: this.fb.control(''),
    });
    this.editedBook$ = this.activedRoute.paramMap.pipe(
      switchMap((params) => {
        console.log(params.get('id'));
        return this.booksService.getBook(params.get('id'));
      }),
    );
    this.subscription.add(
      this.editedBook$.subscribe((editedBook) => {
        if (editedBook !== undefined) {
          this.bookForm.patchValue({
            title: editedBook.title,
            subtitle: editedBook.subtitle,
            originallyPublishedYear: editedBook.originallyPublishedYear,
            seriesTitle: editedBook.seriesTitle,
            pageCount: editedBook.pageCount,
            description: editedBook.description,
          });
          this.bookForm.updateValueAndValidity();
        }
      }),
    );
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

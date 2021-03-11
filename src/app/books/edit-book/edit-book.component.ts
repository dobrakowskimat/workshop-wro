import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { rangeValidator } from 'src/app/main/validators/range-validator';
import { BooksService } from 'src/app/services/books.service';
import { Book, BookPayload } from '../shared/models/book.model';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss'],
})
export class EditBookComponent implements OnInit {
  bookForm: FormGroup;
  subscription = new Subscription();
  editedBook$: Observable<Book>;
  editedBookId: string;

  constructor(
    private activedRoute: ActivatedRoute,
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

    this.editedBook$ = this.activedRoute.paramMap.pipe(
      switchMap((params) => {
        this.editedBookId = params.get('id');
        return this.booksService.getBook(this.editedBookId);
      })
    );

    this.subscription.add(
      this.editedBook$.subscribe((editedBook) => {
        if (editedBook !== undefined) {
          const orgPubDate = editedBook
            ? new Date(editedBook.publishDate).toISOString().substring(0, 10)
            : '';

          this.bookForm.patchValue({
            title: editedBook.title,
            subtitle: editedBook.subtitle,
            originallyPublishedYear: editedBook.originallyPublishedYear,
            seriesTitle: editedBook.seriesTitle,
            pageCount: editedBook.pageCount,
            description: editedBook.description,
            price: editedBook.price,
            publishDate: orgPubDate,
            authorFullName: editedBook.authorFullName,
          });
        }
      })
    );
  }

  onSubmit() {
    if (this.bookForm.invalid) {
      console.log('Form invalid');
    }

    this.subscription.add(
      this.booksService
        .editBook(this.editedBookId, this.bookForm.value)
        .subscribe((book) => {
          console.log('Book successfully updated');
          this.router.navigate(['/book/book/' + this.editedBookId]);
        })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

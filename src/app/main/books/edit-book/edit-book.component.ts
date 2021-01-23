import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BooksService } from 'src/app/services/books.service';
import { Book, BookPayload } from '../shared/models/book.model';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {

  bookForm: FormGroup;
  @Input() editedBook: Book;

  constructor(private fb: FormBuilder, private booksService: BooksService) { }

  ngOnInit(): void {
    const orgPubDate = this.editedBook ? new Date(this.editedBook.publishDate).toISOString().substring(0, 10) : "";

    this.bookForm = this.fb.group({
      title: this.fb.control(this.editedBook ? this.editedBook.title : "", Validators.required),
      subtitle: this.fb.control(this.editedBook ? this.editedBook.subtitle : ""),
      originallyPublishedYear: this.fb.control(this.editedBook ? this.editedBook.originallyPublishedYear : ""),
      seriesTitle: this.fb.control(this.editedBook ? this.editedBook.seriesTitle : ""),
      pageCount: this.fb.control(this.editedBook ? this.editedBook.pageCount : ""),
      description: this.fb.control(this.editedBook ? this.editedBook.description : ""),
      price: this.fb.control(this.editedBook ? this.editedBook.price : ""),
      publishDate: this.fb.control(orgPubDate),
      authorFullName: this.fb.control(this.editedBook ? this.editedBook.authorFullName : ""),
    });
  }

  onSubmit() {
    console.log()
    if(this.editedBook == null) {
      this.booksService.addBook(this.bookForm.value as BookPayload).subscribe(book => console.log(book));
    }
    else {
      this.booksService.editBook(this.bookForm.value as BookPayload, this.editedBook.id).subscribe(book => console.log(book));
    }
  }
}

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Book, BookPayload } from '../main/books/shared/models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private httpClient: HttpClient) {}

  apiUrl: string = environment.apiUrl;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.apiUrl}/books`);
  }

  getBook(bookId : string): Observable<Book> {
    return this.httpClient.get<Book>(`${this.apiUrl}/books/${bookId}`);
  }

  addBook(book: BookPayload): Observable<BookPayload> {
    return this.httpClient.post<BookPayload>(`${this.apiUrl}/books`, book, this.httpOptions)
  }

  editBook(book: BookPayload, bookId : string): Observable<BookPayload> {
    return this.httpClient.put<BookPayload>(`${this.apiUrl}/books/${bookId}`, book, this.httpOptions);
  }

  deleteBook(bookId : string): Observable<any> {
    return this.httpClient.delete<Book>(`${this.apiUrl}/books/${bookId}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book, BookPayload } from '../main/books/shared/models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private httpClient: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`/books`);
  }
  getBook(id: string): Observable<Book> {
    return this.httpClient.get<Book>(`${this.apiUrl}/books/${id}`);
  }

  addBook(book: BookPayload): Observable<Book> {
    return this.httpClient.post<Book>(`/books`, book);
  }

  editBook(book: BookPayload): Observable<Book> {
    return this.httpClient.put<Book>(`books`, book);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book, BookPayload } from '../main/books/shared/models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private httpClient: HttpClient) {}

  apiUrl: string = environment.apiUrl;

  getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.apiUrl}/books`);
  }

  addBook(book: BookPayload): Observable<Book> {
    return this.httpClient.post<Book>(`${this.apiUrl}/books`, book);
  }

  editBook(book: BookPayload): Observable<Book> {
    return this.httpClient.put<Book>(`${this.apiUrl}books`, book);
  }
}

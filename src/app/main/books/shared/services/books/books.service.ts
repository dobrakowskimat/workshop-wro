import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Book, BookPayload } from '../../models/book.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  urlBooks = environment.apiUrl + 'books';

  constructor(private readonly http: HttpClient) {}

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(this.urlBooks);
  }

  get(id: string): Observable<Book> {
    return this.http.get<Book>(`${this.urlBooks}/${id}`);
  }

  create(book: BookPayload): Observable<BookPayload> {
    return this.http.post<Book>(this.urlBooks, book);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.urlBooks}/${id}`);
  }
}

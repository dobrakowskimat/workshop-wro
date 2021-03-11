import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class LanguageInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const modifiedRequest = req.clone({
      headers: this.addLanguageHeader(req.headers),
    });
    return next.handle(modifiedRequest);
  }

  private addLanguageHeader(headers: HttpHeaders): HttpHeaders {
    console.log(headers.keys());
    if (!headers.has('Accept-Language')) {
      headers = headers
        .set('Accept-Language', 'pl-PL')
        .set('Additional-Header', 'Additional Value');
    }

    if (!headers.has('Additional-Header-2')) {
      headers = headers.set('Additional-Header-2', 'Additional Value 2');
    }

    return headers;
  }
}

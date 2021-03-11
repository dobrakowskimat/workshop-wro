import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class ApiUrlInterceptor implements HttpInterceptor{
  private apiUrl = environment.apiUrl;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modifiedRequest = req.clone({url: this.prepareUrl(req.url)});
    return next.handle(modifiedRequest);
  }

  private isAbsoluteUrl(url: string): boolean {
    const absolutePattern = /^https?:\/\//i;
    return absolutePattern.test(url);
  }

  private prepareUrl(url: string): string {
    url = this.isAbsoluteUrl(url) ? url : this.apiUrl + '/' + url;
    return url.replace(/([^:]\/)\/+/g, '$1');
  }

}

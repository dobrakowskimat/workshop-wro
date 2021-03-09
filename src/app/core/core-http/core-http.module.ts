import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiUrlInterceptor } from './interceptors/api-url.interceptor';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { LogResponseInterceptor } from './interceptors/log-response.interceptor';
import { LangInterceptor } from './interceptors/lang-interceptor';

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiUrlInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LogResponseInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LangInterceptor,
      multi: true
    }
  ],
})
export class CoreHttpModule {}

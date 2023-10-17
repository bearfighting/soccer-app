import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroements';

@Injectable()
export class AccessInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {
        'x-rapidapi-host': environment.apiHost,
        'x-rapidapi-key': environment.apiKey
      }
    })
    return next.handle(request);
  }
}

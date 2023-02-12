import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Request Interceptor', request);

    const upRequest = request.clone({
      headers: new HttpHeaders({"token": "Glxyemsh fha8dofa98fadsyfar09q2duu0"})
    })
    
    return next.handle(upRequest);
  }
}

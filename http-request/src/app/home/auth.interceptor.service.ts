import { Injectable } from '@angular/core';
import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log('Request is on its Way...');
    // console.log(req.url);
    const modifiedRequest = req.clone({
      headers: req.headers.append('Auth', 'xyz')
    });
    // return next.handle(req); // this is must
    return next.handle(modifiedRequest);
      // .pipe(tap(event => {
      // if (event.type === HttpEventType.Response) {
      //   console.log('Response arrived, body data');
      //   console.log(event.body);
      // }
    // }
    // )
    // );
  }
}

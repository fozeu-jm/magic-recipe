import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { take } from 'rxjs/operators';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
    token: String;
    constructor(private authService: AuthService ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        let modRequest = req.clone();
        this.authService.user.pipe(take(1)).subscribe(
            (user) => {
                if (user) {
                    modRequest = req.clone({ params: new HttpParams().set('auth', user.token.valueOf()) });
                }
            }
        );
        return next.handle(modRequest);
    }

}
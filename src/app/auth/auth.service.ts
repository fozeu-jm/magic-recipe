import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, Subject, BehaviorSubject } from 'rxjs';
import { User } from './user.model';

export interface AuthResponseData {
    kind?: String;
    idToken: String;
    email: String;
    refreshToken: String;
    expiresIn: String;
    localId: String;
    registered: Boolean;
}


@Injectable({
    providedIn: 'root'
})
export class AuthService {

    user = new BehaviorSubject<User>(null);

    constructor(private http: HttpClient) { }

    signup(email: String, password: String) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCyBh6qoPdTTSDairU-nSwusJJHbUR5Xow',
            {
                email: email,
                password: password,
                returnSecureToken: true
            })
            .pipe(catchError(this.handleError), tap(
                (result) => {
                    this.handleAuthentication(result.email, result.localId, result.idToken, +result.expiresIn);
                }));
    }

    login(email: String, password: String) {
        return this.http.post<AuthResponseData>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCyBh6qoPdTTSDairU-nSwusJJHbUR5Xow",
            {
                email: email,
                password: password,
                returnSecureToken: true
            }).pipe(catchError(this.handleError), tap(
                (result) => {
                    this.handleAuthentication(result.email, result.localId, result.idToken, +result.expiresIn);
                }));
    }

    private handleAuthentication(email: String, localId:String, token: String, expiresIn: number) {
        const expirationDate = new Date(new Date().getTime() + +expiresIn * 1000);
        const user = new User(email, localId, token, expirationDate);
        this.user.next(user);
    }

    private handleError(errorResponse: HttpErrorResponse) {
        let errorMessage = "An unknown error occurred!";
        if (!errorResponse.error || !errorResponse.error.error) {
            return throwError(errorMessage);
        }
        switch (errorResponse.error.error.message) {
            case "EMAIL_EXISTS":
                errorMessage = "This email already exists";
                break;
            case "EMAIL_NOT_FOUND":
            case "INVALID_PASSWORD":
                errorMessage = "Wrong email or password";
                break;
        }
        return throwError(errorMessage);
    }
}
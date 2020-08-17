import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface AuthResponseData{
    kind: String;
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
export class AuthService{

    constructor(private http: HttpClient){}

    signup(email:String, password:String){
       return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCyBh6qoPdTTSDairU-nSwusJJHbUR5Xow',
        {email: email,
        password: password,
        returnSecureToken: true}); 
    }
}
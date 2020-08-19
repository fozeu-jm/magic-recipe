import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData } from './auth.service';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { error } from 'protractor';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent {
    loginMode: Boolean = true;
    isLoading: Boolean = false;
    error: String = null;

    constructor(private authService: AuthService, private router: Router) {

    }

    onSwitchMode() {
        this.loginMode = !this.loginMode;
    }

    onCloseModal(){
        this.error = null;
    }

    onSubmit(form: NgForm) {
        if (!form.valid) {
            return;
        }
        let authObs: Observable<AuthResponseData>;

        this.isLoading = true;
        if (this.loginMode) {
            authObs = this.authService.login(form.value.email, form.value.password);
        } else {
            authObs = this.authService.signup(form.value.email, form.value.password);
        }

        authObs.subscribe(
            (response) => {
                this.isLoading = false;
                this.router.navigate(['/recipes']);
            },
            (errorMessage) => {
               // console.log(errorMessage);
                this.error = errorMessage;
                this.isLoading = false;
            }
        );

        form.reset();
    }
}
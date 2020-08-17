import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent {
    loginMode: Boolean = true;

    constructor(private authService: AuthService) {

    }

    onSwitchMode() {
        this.loginMode = !this.loginMode;
    }

    onSubmit(form: NgForm) {
        if (!form.valid) {
            return;
        }

        if (this.loginMode) {

        } else {
            this.authService.signup(form.value.email, form.value.password).subscribe(
                (response) => {
                    console.log(response);
                },
                (error) => {
                    console.log(error);
                }
            );
        }
        form.reset();
    }
}
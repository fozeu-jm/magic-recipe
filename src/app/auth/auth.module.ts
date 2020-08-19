import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    declarations: [AuthComponent],
    imports: [RouterModule, SharedModule, FormsModule, CommonModule, ReactiveFormsModule],
    exports: [AuthComponent]
})
export class AuthModule { }
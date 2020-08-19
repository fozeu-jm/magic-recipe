import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const routes: Routes = [
    { path: '', component: AuthComponent }
]
@NgModule({
    declarations: [AuthComponent],
    imports: [RouterModule.forChild(routes), SharedModule, FormsModule, CommonModule, ReactiveFormsModule],
    exports: [AuthComponent]
})
export class AuthModule { }
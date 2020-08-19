import { NgModule } from '@angular/core';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { AlertComponent } from './alert/alert.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DropDownDirectiveDirective } from './drop-down-directive.directive';
import { ActiveRecipeDirectiveDirective } from './active-recipe-directive.directive';

@NgModule({
    declarations: [
        LoadingSpinnerComponent,
        AlertComponent,
        DropDownDirectiveDirective,
        ActiveRecipeDirectiveDirective
    ],
    imports: [RouterModule, CommonModule, ReactiveFormsModule],
    exports: [
        LoadingSpinnerComponent,
        AlertComponent,
        DropDownDirectiveDirective,
        ActiveRecipeDirectiveDirective
    ]

})
export class SharedModule {

}
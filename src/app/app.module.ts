import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListService } from './shopping-list/ShoppingListService.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeService } from './recipes/RecipeService.service';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth/auth.service';
import { AuthInterceptorService } from './auth/auth.interceptor.service';
import { RecipesModule } from './recipes/recipe.module';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RecipesModule,
    SharedModule
  ],
  providers: [ShoppingListService,RecipeService,AuthService,{provide:HTTP_INTERCEPTORS, useClass:AuthInterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

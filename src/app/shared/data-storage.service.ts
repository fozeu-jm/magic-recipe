import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecipeService } from '../recipes/RecipeService.service';
import { Recipe } from '../recipes/recipe.model';
import { map, tap, take } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
    token: String;

    constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) { }

    storeRecipe() {
        const recipes = this.recipeService.getRecipes();
        this.http.put('https://recipe-book-7eb1b.firebaseio.com/recipes.json', recipes)
            .subscribe(
                (response) => {
                    console.log(response);
                });
    }

    fetchRecipes() {
        this.recipeService.setIsLoading(true);
        return this.http.get<Recipe[]>('https://recipe-book-7eb1b.firebaseio.com/recipes.json')
            .pipe(map(recipes => {
                return recipes.map(
                    (recipe: Recipe) => {
                        return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] }
                    }
                )
            }), tap((recipes) => {
                this.recipeService.setRecipes(recipes);
                this.recipeService.setIsLoading(false);
            }));
    }
}
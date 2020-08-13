import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/RecipeService.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable({providedIn:'root'})
export class DataStorageService {
    constructor(private http: HttpClient,private recipeService: RecipeService){}

    storeRecipe(){
        const recipes = this.recipeService.getRecipes();
        this.http.put('https://recipe-book-7eb1b.firebaseio.com/recipes.json', recipes)
        .subscribe(
            (response)=>{
                console.log(response);
        });
    }

    fetchRecipes(){
        this.http.get<Recipe[]>('https://recipe-book-7eb1b.firebaseio.com/recipes.json')
        .subscribe((response)=>{
            this.recipeService.setRecipes(response);
        });
    }
}
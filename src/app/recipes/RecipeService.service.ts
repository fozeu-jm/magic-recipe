import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe("A Test recipe 5","This is simply a test", "https://www.seriouseats.com/2019/07/20190618-grilled-turkish-chicken-wings-vicky-wasik-13-1500x1125.jpg",
        [ new Ingredient("Meat", 5), new Ingredient("French fries", 20) ]),
        new Recipe("Double Cheese Burger","The Double Cheeseburger features two 100% pure beef burger patties seasoned with just a pinch of salt and pepper", "http://www.pngall.com/wp-content/uploads/2016/05/Burger-Free-Download-PNG.png",[
            new Ingredient("Buns",2), new Ingredient("Meat", 1)
        ])
      ];  

    getRecipes(){
        //slice return copy of recipes array since arrays are referenced types in JS
        return this.recipes.slice();
    }
}
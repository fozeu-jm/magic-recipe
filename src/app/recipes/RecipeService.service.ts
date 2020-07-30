import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/ShoppingListService.service';

//decorator that makes it possible to inject a service into this service
@Injectable()
export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe("Fried Chicken","Delicious chicken fries !", "https://www.seriouseats.com/2019/07/20190618-grilled-turkish-chicken-wings-vicky-wasik-13-1500x1125.jpg",
        [ new Ingredient("Meat", 5), new Ingredient("French fries", 20) ]),
        new Recipe("Double Cheese Burger","The Double features two 100% pure", "http://www.pngall.com/wp-content/uploads/2016/05/Burger-Free-Download-PNG.png",[
            new Ingredient("Buns",2), new Ingredient("Meat", 1)
        ])
      ];  

      constructor(private shoppingListService: ShoppingListService){

      }

    getRecipes(){
        //slice return copy of recipes array since arrays are referenced types in JS
        return this.recipes.slice();
    }


    //What a short name !  XD
    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }
}
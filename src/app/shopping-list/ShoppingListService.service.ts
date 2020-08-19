import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingListService {

    ingredientsChanged = new Subject<Ingredient[]>();

    shoppingItemSelected = new Subject<Number>();

    private ingredients: Ingredient[] = [
        new Ingredient("Apples", 5),
        new Ingredient("Tomatoes", 10)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    getItemByIndex(index: number) {
        return this.ingredients[index];
    }

    deleteItem(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}
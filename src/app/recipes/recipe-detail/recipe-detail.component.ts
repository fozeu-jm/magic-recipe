import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/ShoppingListService.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
 @Input() recipe : Recipe;

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit(): void {
  }

  addToShoppingList(){
    this.shoppingListService.IngredientToShoppingList(this.recipe.ingredients);
  }

}

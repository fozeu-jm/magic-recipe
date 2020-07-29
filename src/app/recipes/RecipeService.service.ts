import { Recipe } from './recipe.model';

export class RecipeService{
    private recipes: Recipe[] = [
        new Recipe("A Test recipe 5","This is simply a test", "https://www.seriouseats.com/2019/07/20190618-grilled-turkish-chicken-wings-vicky-wasik-13-1500x1125.jpg"),
        new Recipe("Another nice recipe","This is simply a test", "https://www.seriouseats.com/2019/07/20190618-grilled-turkish-chicken-wings-vicky-wasik-13-1500x1125.jpg")
      ];  

    getRecipes(){
        //slice return copy of recipes array since arrays are referenced types in JS
        return this.recipes.slice();
    }
}
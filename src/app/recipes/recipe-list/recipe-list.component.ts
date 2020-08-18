import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../RecipeService.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;
  isLoading: boolean = false;

  constructor(private recipeService: RecipeService,private route : ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.subscription = this.recipeService.recipesChanged.subscribe(
      (recipes:Recipe[])=>{
        this.recipes = recipes;
        console.log(recipes);
    });
    if(this.recipeService.getRecipes().length !== 0){
      this.recipes = this.recipeService.getRecipes();
    }

    this.recipeService.isLoading.subscribe((state:boolean)=>{
      this.isLoading = state;
    });
  }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo:this.route});
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}

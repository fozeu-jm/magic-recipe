import { Component, OnInit } from '@angular/core';
import { RecipeService } from './RecipeService.service';
import { DataStorageService } from '../shared/data-storage.service';
import { error } from 'protractor';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  constructor(private dataStorage: DataStorageService, private recipeService: RecipeService) { }

  ngOnInit(): void {
    if (this.recipeService.getRecipes().length === 0) {
      this.dataStorage.fetchRecipes().subscribe(() => {
      }, (error) => {
        console.log(error);
      });
    }
  }

}

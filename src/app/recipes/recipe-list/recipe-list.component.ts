import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../recipe'
import {RecipeService} from "../recipe.service";


@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] = [];

  @Output() recipeSelected = new EventEmitter<Recipe>()
  // recipe = new Recipe('Dummy', 'Dummy', 'http://vignette4.wikia.nocookie.net/scribblenauts/images/4/42/Crash_Test_Dummy.png/revision/latest?cb=20130309213400');
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
   onSelected(recipe: Recipe){
     this.recipeSelected.emit(recipe);
   }
}

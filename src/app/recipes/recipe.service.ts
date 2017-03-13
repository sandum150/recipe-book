import { Injectable } from '@angular/core';
import {Recipe} from "./recipe";
import {Ingredient} from "../shared/ingredient";

@Injectable()
export class RecipeService {
  private recipes : Recipe[] = [
    new Recipe('Dummy', 'Dummy', 'http://vignette4.wikia.nocookie.net/scribblenauts/images/4/42/Crash_Test_Dummy.png/revision/latest?cb=20130309213400', [
        new Ingredient('French fries', 2),
        new Ingredient('Pork meat', 1)
    ]),
    new Recipe('Salad caesar', 'description of this salad, yeah', 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR__XY8pwqqYgwrttStIS3GbOth1QtP0HzGLs4RUgqquC9287tPNA', [
        new Ingredient('Cheese', 100),
        new Ingredient('Patrunjel', 1),
        new Ingredient('Patlajele', 2),

    ]),
    new Recipe('Salad', 'Some description', 'http://www.wholeliving.com/sites/files/wholeliving.com/ecl/images/content/pub/ms_living/2008Q4/mld104019_1208_lob_salad_xl.jpg', [])
  ];
  constructor() { }

  getRecipes(){
    return this.recipes;
  }
}

import {RouterModule, Routes}   from '@angular/router';
import {RecipesComponent} from "./recipes/recipes.component";
import {RECIPE_ROUTES} from "./recipes/recipes.routes";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";

export const APP_ROUTES_PROVIDERS: Routes = [
    RouterModule.forRoot([
        {
            path: '',
            redirectTo: '/recipes',
            pathMatch: 'full'
        },
        {
            path: 'recipes',
            component: RecipesComponent,
            children: RECIPE_ROUTES
        },
        {
            path: 'shopping-list',
            component: ShoppingListComponent
        }
    ])
];

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeItemComponent } from './recipes/recipes-list/recipe-item/recipe-item.component';
import { ShopingEditComponent } from './shopping-list/shoping-edit/shoping-edit.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';



@NgModule({
  declarations: [
    ShoppingListComponent,
    RecipeItemComponent,
    ShopingEditComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipeDetailComponent
  ],
  exports: [
    ShoppingListComponent,
    RecipesComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }

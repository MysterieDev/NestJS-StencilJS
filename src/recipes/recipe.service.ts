import { CreateRecipeDto, UpdateRecipeDto } from './Recipe.dto';
import { Recipe } from './recipe.model';
import { Injectable, NotFoundException } from "@nestjs/common";


@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [];

    insertRecipe(recipe: CreateRecipeDto){
        this.recipes.push(recipe);
        return recipe;
    }

    getAllRecipes(){
        return [...this.recipes.map(rec => {return {...rec}})]
    }

    getSingleRecipe(id): Recipe[] | NotFoundException{
        const recipe = this.recipes.filter( recipe => recipe.id === id);
        if(recipe.length == 1 ) return recipe; else throw new NotFoundException("couldn't find Recipe")
    }

    updateRecipe(id: string, updatedRecipe: UpdateRecipeDto){
      if(this.getSingleRecipe(id)){
        this.recipes = this.recipes.map(recipe => recipe.id === id ? {...recipe, ...updatedRecipe} : recipe  );
      }
    }

    deleteSingleRecipe(id){
      if(this.getSingleRecipe(id)){
      this.recipes = this.recipes.filter( rec => rec.id !== id)
      }
    }
}
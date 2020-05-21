import { CreateRecipeDto } from './createRecipe.dto';
import { Recipe } from './recipe.model';
import { Injectable } from "@nestjs/common";


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

    getSingleRecipe(id){
        return this.recipes.filter( recipe => recipe.id === id);
    }

    deleteSingleRecipe(id){
        this.recipes = this.recipes.filter( rec => rec.id !== id)
    }
}
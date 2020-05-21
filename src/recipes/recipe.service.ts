import { Recipe } from './recipe.model';
import { Injectable } from "@nestjs/common";


@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [];

    insertRecipe(id: string, title: string, desc: string, rating: number){
        const newRecipe = new Recipe(id, title, desc, rating);
        this.recipes.push(newRecipe);
    }

    getAllRecipes(){
        return [...this.recipes.map(rec => {return {...rec}})]
    }

    getSingleRecipe(id){
        return this.recipes.filter( recipe => recipe.id === id);
    }
}
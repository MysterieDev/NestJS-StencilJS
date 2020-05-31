import { CreateRecipeDto, UpdateRecipeDto } from './models/Recipe.dto';
import { Recipe } from './models/recipe.model';
import { Injectable, NotFoundException, Inject } from "@nestjs/common";
import { Model } from 'mongoose';


@Injectable()
export class RecipeService {

    constructor(@Inject("RECIPE_MODEL") private recipeModel: Model<Recipe>){}

    insertRecipe(recipe: CreateRecipeDto){
        const newRecipe = new this.recipeModel(recipe);
        return newRecipe.save();
    }

    getAllRecipes(){
        return this.recipeModel.find().exec();
    }

    getSingleRecipe(id){
        return this.recipeModel.findOne({ _id: id }).exec().then(res => res).catch(err =>{ throw new NotFoundException});
    }

    updateRecipe(id: string, updatedRecipe: UpdateRecipeDto){
      return this.recipeModel.updateOne({_id: id}, {...updatedRecipe}).then(res => res).catch(err =>{ throw new NotFoundException});;
    }

    deleteSingleRecipe(id){
    return this.recipeModel.findOneAndRemove({_id: id}).catch(err => {throw new NotFoundException})
    } 
}
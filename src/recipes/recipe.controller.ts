import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Controller('recipes')
export class RecipeController {
    constructor(private readonly recipeSvc: RecipeService){}

    @Post()
    addRecipe(@Body("title") recipeTitle: string, @Body("desc") recipeDesc: string, @Body("rating") recipeRating: number){
        const generateId = uuidv4();
        this.recipeSvc.insertRecipe(generateId, recipeTitle, recipeDesc, recipeRating);
        return {id: generateId}
    }

    @Get()
    getAllRecipes(): Recipe[]{
      return  this.recipeSvc.getAllRecipes();
    }

    @Get("recipe/:id")
    getProduct(@Param("id") id: string): Recipe[] {
        return this.recipeSvc.getSingleRecipe(id)
    }
}
import { CreateRecipeDto } from './createRecipe.dto';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { ApiBody, ApiResponse, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

@Controller('recipes')
export class RecipeController {
    constructor(private readonly recipeSvc: RecipeService){}

    @Post()
    @ApiTags("recipes")
    @ApiBody({type: CreateRecipeDto})
    @ApiCreatedResponse({ status: 201, description: 'The record has been successfully created.', type: Recipe})
    addRecipe( @Body() createRecipeDto: CreateRecipeDto){
        const generateId = uuidv4();
        createRecipeDto.id = generateId;
        this.recipeSvc.insertRecipe(createRecipeDto);
        return {id: generateId}
    }

    @Get()
    @ApiTags("recipes")
    @ApiResponse({ status: 200, description: 'Successfull'})
    getAllRecipes(): Recipe[]{
      return  this.recipeSvc.getAllRecipes();
    }

    @Get("recipe/:id")
    @ApiTags("recipes")
    getRecipe(@Param("id") id: string): Recipe[] {
        return this.recipeSvc.getSingleRecipe(id)
    }

    @Get("recipe/delete/:id")
    @ApiTags("recipes")
    @ApiResponse({ status: 204, description: 'Deleted'})
    deleteRecipe(@Param("id") id:string): void{
        return this.recipeSvc.deleteSingleRecipe(id);
    }

}
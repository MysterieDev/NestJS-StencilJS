import { NotFoundException, Patch } from '@nestjs/common';
import { CreateRecipeDto } from './models/Recipe.dto';
import { RecipeDocument } from './models/recipe.model';
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
    @ApiCreatedResponse({ status: 201, description: 'The record has been successfully created.', type: CreateRecipeDto})
    async addRecipe( @Body() createRecipeDto: CreateRecipeDto){
        this.recipeSvc.insertRecipe(createRecipeDto);
    }

    @Patch("update/:id")
    @ApiTags("recipes")
    @ApiBody({type: CreateRecipeDto})
    @ApiResponse({ status: 200, description: 'The record has been successfully updated.', type: CreateRecipeDto})
    async updateRecipe(@Body() createRecipeDto: Partial<CreateRecipeDto>, @Param("id") id: string){
        return this.recipeSvc.updateRecipe(id, createRecipeDto)
    } 

    @Get()
    @ApiTags("recipes")
    @ApiResponse({ status: 200, description: 'Successfull'})
    async getAllRecipes(): Promise<RecipeDocument[]>{
      return  this.recipeSvc.getAllRecipes();
    }

    @Get(":id")
    @ApiTags("recipes")
    async getRecipe(@Param("id") id: string) {
        return this.recipeSvc.getSingleRecipe(id)
    }

    @Get("delete/:id")
    @ApiTags("recipes")
    @ApiResponse({ status: 204, description: 'Deleted'})
    deleteRecipe(@Param("id") id:string){
        return this.recipeSvc.deleteSingleRecipe(id);
    } 
 
}
import { RecipeService } from './../recipes/recipe.service';
import { Controller, Get, Render } from '@nestjs/common';

@Controller('site')
export class SiteController {

    constructor(private readonly recipeSvc: RecipeService){}
    @Get()
    @Render('index.hbs')
    root() {
      return { message: 'Hello world!' };
    }

    @Get('recipes/home')
    @Render('recipes/home.hbs')
    async recipesOverview(){
    const allRecipes = await this.recipeSvc.getAllRecipes()
    return { recipes: allRecipes }
    }
}

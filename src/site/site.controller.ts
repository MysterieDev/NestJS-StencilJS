import { RecipeService } from './../recipes/recipe.service';
import { Controller, Get, Render } from '@nestjs/common';

@Controller('site')
export class SiteController {

    constructor(){}
    @Get()
    @Render('index.hbs')
    root() {
      return { message: 'Hello world!' };
    }

    @Get('recipes/home')
    @Render('recipes/home.hbs')
    async recipesOverview(){
    return { recipes: [{name: "recipe1", description: "lisa", rating: 2},{name: "recipe1", desc: "lisa", rating: 2}] }
    }
}

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
    return { recipes: [{name: "recipe1", description: "loremip", rating: 2},{name: "recipe1", description: "loremi", rating: 2}] }
    }
}

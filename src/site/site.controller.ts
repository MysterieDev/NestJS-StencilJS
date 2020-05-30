import { Controller, Get, Render } from '@nestjs/common';

@Controller('site')
export class SiteController {

    constructor(){}
    @Get()
    @Render('index.hbs')
    root() {
      return { message: 'Hello world!' };
    }
}

import { RecipeModule } from './recipes/recipe.module';
import { Module } from '@nestjs/common';
import { SiteController } from './site/site.controller';

@Module({
  imports: [RecipeModule],
  controllers: [SiteController],
  providers: [],
})
export class AppModule {}

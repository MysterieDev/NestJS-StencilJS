import { RecipeModule } from './recipes/recipe.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [RecipeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

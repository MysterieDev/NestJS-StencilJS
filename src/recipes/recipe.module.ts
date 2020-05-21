import { recipesProviders } from './recipes.providers';
import { DatabaseModule } from './../database.module';
import { RecipeService } from './recipe.service';
import { RecipeController } from './recipe.controller';
import { Module } from "@nestjs/common";

@Module({
    imports: [DatabaseModule],
    controllers: [RecipeController],
    providers: [RecipeService,
    ...recipesProviders]
})

export class RecipeModule{}
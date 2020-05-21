import { RecipeSchema } from './models/recipe.model';
import { Connection } from 'mongoose';

export const recipesProviders = [
  {
    provide: 'RECIPE_MODEL',
    useFactory: (connection: Connection) => connection.model('Recipe', RecipeSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
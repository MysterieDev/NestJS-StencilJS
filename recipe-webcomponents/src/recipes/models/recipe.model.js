import * as mongoose from "mongoose";
export const RecipeSchema = new mongoose.Schema({
    name: String,
    description: String,
    rating: Number,
});

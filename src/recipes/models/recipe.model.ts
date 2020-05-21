import * as mongoose from "mongoose";

export const RecipeSchema = new mongoose.Schema({
name: String,
description: String,
rating: Number,
})

export interface RecipeDocument extends mongoose.Document{
    readonly name: string;
    readonly description: string;
    readonly rating: number;
  }
import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';
import { Recipe } from "../../../../src/recipes/models/recipe.model";

@Component({
  tag: 'recipe-card',
  styleUrl: 'recipe-card.css',
  shadow: false,
})
export class RecipeCard implements ComponentInterface {
 @Prop() recipe: Recipe
  render() {
    return (
      <Host>

         <h2>Name: {this.recipe.name}</h2>
         <p> desc: {this.recipe.description}</p>
         <small>rating: {this.recipe.rating}</small>
      </Host>
    );
  }

}

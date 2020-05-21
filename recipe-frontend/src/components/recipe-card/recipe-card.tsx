import { Component, ComponentInterface, Host, h, State } from '@stencil/core';
import { getAllRecipes } from '../../utils/content-api';
import { Recipe } from "../../utils/interfaces";

@Component({
  tag: 'recipe-card',
  styleUrl: 'recipe-card.css',
  shadow: false,
})
export class RecipeCard implements ComponentInterface {
  @State() recipes;
   componentWillLoad(){
    return getAllRecipes().then(
      (data: Recipe[]) => {
      this.recipes = data
      });
  }

  

  render() {
    return (
      <Host>
        { this.recipes ? (
        this.recipes.map(element => 
        <h4>Name: {element.name}</h4>
        )
        ): (
        <h2>No Recipes Found</h2>
        )}
      </Host>
    );
  }

}

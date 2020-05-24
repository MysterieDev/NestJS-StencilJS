import { Component, ComponentInterface, Host, h, State, Method } from '@stencil/core';
import { getAllRecipes } from '../../utils/content-api';
import { Recipe } from "../../utils/interfaces";

@Component({
  tag: 'recipe-list',
  styleUrl: 'recipe-list.css',
  shadow: false,
})
export class RecipeList implements ComponentInterface {

  @State() recipes;
   componentWillLoad(){
     this.fetchRecipes();
  }

  @Method()
  fetchRecipes(){
      return getAllRecipes().then(
        (data: Recipe[]) => {
        this.recipes = data
        });
    }

  render() {
    return (
      <Host>
        { this.recipes ? (
        this.recipes.map(recipe => 
        <recipe-card recipe={recipe}></recipe-card>
        )
        ): (
        <h2>No Recipes Found</h2>
        )}
      </Host>
    );
  }

}

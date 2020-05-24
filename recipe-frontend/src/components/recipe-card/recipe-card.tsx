import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';
import { Recipe } from '../../utils/interfaces';

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
       <div>
          <hr>
        <h4>Name: {this.recipe.name}</h4>
        <p>Description: {this.recipe.description} </p>
        <small>Rating: {this.recipe.rating}</small>
        </hr>
        </div>
      </Host>
    );
  }

}

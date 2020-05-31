import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';
import { Recipe } from '../../utils/interfaces';
@Component({
  tag: 'recipe-card',
  styleUrl: 'recipe-card.css',
  shadow: true,
})
export class RecipeCard implements ComponentInterface {

  @Prop() recipe: Recipe;

  render() {
    return (
      <Host>
Test
      </Host>
    );
  }

}

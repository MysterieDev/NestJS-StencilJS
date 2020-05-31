import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'recipe-card',
  styleUrl: 'recipe-card.css',
  shadow: false,
})
export class RecipeCard implements ComponentInterface {


  render() {
    return (
      <Host>
     <h1> <slot></slot></h1>
      </Host>
    );
  }

}

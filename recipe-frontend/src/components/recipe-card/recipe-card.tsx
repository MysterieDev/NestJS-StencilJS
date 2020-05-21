import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'recipe-card',
  styleUrl: 'recipe-card.css',
  shadow: true,
})
export class RecipeCard implements ComponentInterface {

  componentWillLoad(){
    fetch('http://localhost:3000/recipes')
    .then
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}

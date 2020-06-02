import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'recipe-card',
  styleUrl: 'recipe-card.css',
  shadow: false,
})
export class RecipeCard implements ComponentInterface {

  @Prop() recipeName: string


  render() {
    return (
      <Host>
     <h1> <slot></slot></h1>
     <p> {this.recipeName}</p>
      </Host>
    );
  }

}

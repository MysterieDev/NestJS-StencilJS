import { Component, h, Listen, Element } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: false
})
export class AppHome {
  @Element() el: HTMLElement

  
  @Listen("recipeAddRequest")
  processAddRequest(e: Event){   
    e.stopPropagation();
    this.el.querySelector<HTMLRecipeListElement>("recipe-list").fetchRecipes()
  }

  render() {
    return (
      <div class='app-home'>
        <recipe-list></recipe-list>
        <recipe-add-form></recipe-add-form>
        <p>
          Welcome to the Stencil App Starter.
          You can use this starter to build entire apps all with
          web components using Stencil!
          Check out our docs on <a href='https://stenciljs.com'>stenciljs.com</a> to get started.
        </p>

        <stencil-route-link url='/profile/stencil'>
          <button>
            Profile page
          </button>
        </stencil-route-link>
      </div>
    );
  }
}

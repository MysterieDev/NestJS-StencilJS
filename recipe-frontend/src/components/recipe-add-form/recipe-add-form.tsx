import { Component, ComponentInterface, Host, h, State, Event, EventEmitter } from '@stencil/core';
import { CreateRecipeDto } from '../../../../src/recipes/models/Recipe.dto';
import { addRecipe } from '../../utils/content-api';

@Component({
  tag: 'recipe-add-form',
  styleUrl: 'recipe-add-form.css',
  shadow: false,
})
export class RecipeAddForm implements ComponentInterface {

  @State() recipeObject: CreateRecipeDto;
  @Event({bubbles: true}) recipeAddRequest: EventEmitter


  componentWillLoad(){
    this.emptyObject();
  }

  updateValue(propName: string, event: InputEvent){
    const inputValue = event.target as HTMLInputElement
    this.recipeObject[propName] = inputValue.value;
  }

  emptyObject(){
    this.recipeObject = {
      name: "",
      description: "",
      rating: 0
    }
  }
  
  addRecipeRequest(){
    addRecipe(this.recipeObject).then(_=> this.recipeAddRequest.emit());
  }

  render() {
    return (
      <Host>
        <label>Name</label><br/>
        <input onInput={(e: InputEvent) => this.updateValue("name", e)} type="text" value={this.recipeObject.name}/><br/>
        <label>description</label><br/>
        <input onInput={(e: InputEvent) => this.updateValue("description", e)} type="text" value={this.recipeObject.description} /><br/>
        <label>rating</label><br/>
        <input onInput={(e: InputEvent) => this.updateValue("rating", e)} type="number" min="0" value={this.recipeObject.rating} /><br/>
        <button onClick={ _=> this.addRecipeRequest()} >Add Recipe</button>
      </Host>
    );
  }

}

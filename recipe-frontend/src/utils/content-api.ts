import { CreateRecipeDto, UpdateRecipeDto } from './../../../src/recipes/models/Recipe.dto';
const url = "http://localhost:3000/";


export function getAllRecipes(){
    return fetch(url+"recipes", {
        method: 'GET',
        mode: 'cors'}).then(res => res.json()).catch(err=>console.log(err))
}

export function addRecipe(recipe: CreateRecipeDto){
    return fetch(url+"recipes", {
        method: 'POST',
        mode: 'cors',
    headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(recipe) // body data type must match "Content-Type" header
    }).then(res => console.log("CREATED: "+ res.status)
    )
    .catch(err=>console.log(err))
}

export function getOneRecipe(id: string){
    return fetch(url+`recipes/${id}`, {
        method: 'GET',
        mode: 'cors'
    }).then(res => res.json())
    .catch(err=>console.log(err));
}

export function updateRecipe(id: string, recipeUpdate: UpdateRecipeDto){
    return fetch(url+`recipes/update/${id}`, {
        method: 'PATCH',
        mode: 'cors',
        headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(recipeUpdate) // body data type must match "Content-Type" header
    }).then(res => res.json())
    .catch(err=>console.log(err))
}

export function deleteRecipe(id: string){
    return fetch(url+`recipes/delete/${id}`, {mode: 'cors'}).then(res => console.log(res))
    .catch(err=>console.log(err));
}
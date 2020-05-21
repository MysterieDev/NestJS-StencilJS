const url = "http://localhost:3000/";


export function getAllRecipes(){
    return fetch(url+"recipes", {mode: 'cors'}).then(res => res.json())
}



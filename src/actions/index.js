const BASE_URL = 'http://localhost:3000/api/v1'

export function fetchCocktails(){
  const cocktails = fetch(`${BASE_URL}/cocktails`).then(res => res.json())

  return {
    type: 'FETCH_COCKTAILS',
    payload: cocktails
  }
}

export function updateCurrentCocktail(id){
    return {
    type: 'UPDATE_CURRENT_COCKTAIL',
    payload: id
  }
}

export function createCocktail(params){
  const cocktail = fetch(`${BASE_URL}/cocktails`,
    {method: 'POST',
    body: JSON.stringify(params),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }});

  return {
    type: 'CREATE_COCKTAIL',
    payload: params.cocktail
  }
}

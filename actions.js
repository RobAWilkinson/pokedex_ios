export const SELECT_POKEMON = 'SELECT POKEMON'
export const VIEW_ALL = 'VIEW_ALL';
export const REQUEST_POKEDEX = 'REQUEST_POKEDEX'
export const RECEIVE_POKEDEX = 'RECEIVE_POKEDEX'
export const REQUEST_POKEMON = 'REQUEST_POKEMON'
export const RECEIVE_POKEMON = 'RECEIVE_POKEMON'

export function selectPokemon(selectedPokemonNum){
  return { type: SELECT_POKEMON, selectedPokemonNum}
}
export function viewAll(){
  return { type: VIEW_ALL }
}
export function requestPokedex(){
  return { type: REQUEST_POKEDEX }
}
export function receivePokedex(pokemon){
  return { type: RECEIVE_POKEDEX, pokemon }
}
export function requestPokemon(id){
  return {type: REQUEST_POKEMON, id}
}
export function receivePokemon(data){
  return { type: RECEIVE_POKEMON, data}
}
export function fetchPokedex() {
  return function(dispatch) {
    dispatch(requestPokedex());
    return fetch("http://pokeapi.co/api/v1/pokedex/1/")
      .then(response => 
          response.json())
      .then(json => {
        console.log(json);
          return dispatch(receivePokedex(json))
      })
  }
}
export function fetchPokemon(id) {
  return function(dispatch) {
    dispatch(selectPokemon(id))
    dispatch(requestPokemon(id));
    return fetch(`http://pokeapi.co/api/v1/pokemon/${id}/`
      ).then(response => response.json())
      .then(function(json) {
          dispatch(receivePokemon(json))
      })
      .catch(error =>
          console.warn(error)
          )
  }
}

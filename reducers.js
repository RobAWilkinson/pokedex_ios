import { SELECT_POKEMON, VIEW_ALL, REQUEST_POKEDEX, RECEIVE_POKEDEX, REQUEST_POKEMON, RECEIVE_POKEMON } from './actions.js';
import { combineReducers } from 'redux'
function selectedPokemonNum(state = 1, action){
  switch(action.type){
    case SELECT_POKEMON:
      return action.selectedPokemonNum;
    default:
      return state;
  }
}

function pokemon(state = { isFetching: false, data: {}}, action){
  switch(action.type) {
    case REQUEST_POKEMON: 
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_POKEMON:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.data
      });
    default:
      return state;
  }
}
function pokedex(state = { isFetching: false, pokemon: []}, action){
  switch(action.type){
    case REQUEST_POKEDEX: 
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_POKEDEX:
      return Object.assign({}, state, {
        isFetching: false,
        pokemon: action.pokemon.pokemon
      });
    default:
      return state;
  }

  
}
export default combineReducers({
  pokedex,
  pokemon,
  selectedPokemonNum
});

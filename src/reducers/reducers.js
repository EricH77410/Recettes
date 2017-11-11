import { combineReducers } from 'redux';
import RecipesReducer from './reducer_recipes';
import ActiveRecetteReducer from './reducer_activeRecette'

const rootReducer = combineReducers({
  recettes: RecipesReducer,
  activeRecette: ActiveRecetteReducer
})


export default rootReducer;

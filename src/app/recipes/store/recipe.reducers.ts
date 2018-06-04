import { Recipe } from "../recipe.model";
import { Ingredient } from "../../shared/ingredient.model";

export interface FeatureState {
  recipes: State
}

export interface State {
  recipes: Recipe[];
}

const initialState: State = {
  recipes: [
    new Recipe('A Test Recipe',
      'This is a test',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Oreo-Two-Cookies.jpg/1200px-Oreo-Two-Cookies.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]),
    new Recipe('Another Test Recipe',
      'This is a test',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Oreo-Two-Cookies.jpg/1200px-Oreo-Two-Cookies.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)])
  ]
};

export function recipeReducer(state = initialState, action) {
  return state;
}
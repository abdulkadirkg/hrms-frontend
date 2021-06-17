// all states
import { combineReducers } from "redux";
import favoriteReducer from "./reducers/favoriteReducer";

const rootReducer = combineReducers({
    favorites: favoriteReducer // name changed 
})

export default rootReducer;
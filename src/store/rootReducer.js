// all states
import { combineReducers } from "redux";
import favoriteReducer from "./reducers/favoriteReducer";
import jobAdvertisementReducer from "./reducers/jobAdvertisementReducer";

const rootReducer = combineReducers({
    favorites: favoriteReducer, // name changed 
    advertisements : jobAdvertisementReducer
})

export default rootReducer;
// all states
import { combineReducers } from "redux";
import favoriteReducer from "./reducers/favoriteReducer";
import jobAdvertisementReducer from "./reducers/jobAdvertisementReducer";
import cityReducer from "./reducers/cityReducer"

const rootReducer = combineReducers({
    favorites: favoriteReducer, // name changed 
    advertisements : jobAdvertisementReducer,
    allCities : cityReducer
})

export default rootReducer;
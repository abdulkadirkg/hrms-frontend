// all states
import { combineReducers } from "redux";
import favoriteReducer from "./reducers/favoriteReducer";
import jobAdvertisementReducer from "./reducers/jobAdvertisementReducer";
import cityReducer from "./reducers/cityReducer"
import jobTypeReducer from "./reducers/jobTypeReducer";
import positionReducer from "./reducers/positionReduces";

const rootReducer = combineReducers({
    favorites: favoriteReducer, // name changed 
    advertisements: jobAdvertisementReducer,
    allCities: cityReducer,
    jobTypes: jobTypeReducer,
    positions: positionReducer
})

export default rootReducer;
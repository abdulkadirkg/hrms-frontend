import CityService from "../../services/cityService";
export const FETCH_CITIES_PENDING = "FETCH_CITIES_PENDING";
export const FETCH_CITIES_SUCCESS = "FETCH_CITIES_SUCCESS";
export const FETCH_CITIES_ERROR = "FETCH_CITIES_ERROR";

export function fetchCitiesPending() {
    return {
        type: FETCH_CITIES_PENDING
    }
}
export function fetchCitiesSuccess(cities) {
    return {
        type: FETCH_CITIES_SUCCESS,
        payload: cities
    }
}
export function fetchCitiesError(error) {
    return {
        type: FETCH_CITIES_ERROR,
        payload: error
    }
}

//-------

export const _fetchCities = () => {
    return async dispatch => {
        let cityService = new CityService();
        dispatch(fetchCitiesPending());
        await cityService.getCities().then(response => {
            dispatch(fetchCitiesSuccess(response.data.data))
        }).catch(error => {
            dispatch(fetchCitiesError(error.message))
        })
    }
}
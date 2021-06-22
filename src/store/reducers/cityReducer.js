import { FETCH_CITIES_PENDING, FETCH_CITIES_SUCCESS, FETCH_CITIES_ERROR } from "../actions/cityActions"
import { cities } from "../initialValues/cities"

const initialState = {
    cities,
    pending: false,
    error: null
}

export default function cityReducer(state = initialState, { type, payload }) {
    switch (type) {
        case FETCH_CITIES_PENDING:
            return {
                ...state,
                pending: true,
                error: null
            }
        case FETCH_CITIES_SUCCESS:
            return {
                ...state,
                cities: payload,
                pending: false,
                error: null
            }
        case FETCH_CITIES_ERROR:
            return {
                ...state,
                pending: false,
                error: payload
            }
        default:
            return state;
    }
}
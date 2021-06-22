import { FETCH_ADVERTISEMENTS_PENDING, FETCH_ADVERTISEMENTS_SUCCESS, FETCH_ADVERTISEMENTS_ERROR } from "../actions/jobAdvertisementActions"
import { jobAdvertisements } from "../initialValues/jobAdvertisements"

const initialState = {
    advertisements: jobAdvertisements,
    pending: false,
    error: null
}

export default function jobAdvertisementReducer(state = initialState, { type, payload }) {
    switch (type) {
        case FETCH_ADVERTISEMENTS_PENDING:
            return {
                ...state,
                pending: true,
                error: null
            }
        case FETCH_ADVERTISEMENTS_SUCCESS:
            return {
                ...state,
                advertisements: payload,
                pending: false,
                error: null
            }
        case FETCH_ADVERTISEMENTS_ERROR:
            return {
                ...state,
                pending: false,
                error: payload
            }
        default:
            return state;
    }
}
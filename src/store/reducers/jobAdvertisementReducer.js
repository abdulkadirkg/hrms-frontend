import { SET_ADVERTISEMENTS, GET_ADVERTISEMENTS } from "../actions/jobAdvertisementActions"
import { jobAdvertisements } from "../initialValues/jobAdvertisements"

const initialState = {
    jobAdvertisements: jobAdvertisements
}

export default function jobAdvertisementReducer(state = initialState, { type, payload }) {
    switch (type) {
        case SET_ADVERTISEMENTS:
            return {
                ...state,
                jobAdvertisements: payload
            }
        case GET_ADVERTISEMENTS:
            return {
                ...state,
                jobAdvertisements: state.jobAdvertisements
            }
        default:
            return state;
    }
}
import { FETCH_JOBTYPES_PENDING, FETCH_JOBTYPES_SUCCESS, FETCH_JOBTYPES_ERROR } from "../actions/jobTypeActions"
import { jobTypes } from "../initialValues/jobTypes"

const initialState = {
    jobTypes: jobTypes,
    pending: false,
    error: null
}

export default function jobTypeReducer(state = initialState, { type, payload }) {
    switch (type) {
        case FETCH_JOBTYPES_PENDING:
            return {
                ...state,
                pending: true,
                error: null
            }
        case FETCH_JOBTYPES_SUCCESS:
            return {
                ...state,
                jobTypes: payload,
                pending: false,
                error: null
            }
        case FETCH_JOBTYPES_ERROR:
            return {
                ...state,
                pending: false,
                error: payload
            }
        default:
            return state;
    }
}
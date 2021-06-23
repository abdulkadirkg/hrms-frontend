import { FETCH_POSITIONS_PENDING, FETCH_POSITIONS_SUCCESS, FETCH_POSITIONS_ERROR } from "../actions/positionActions"
import { positions } from "../initialValues/positions"

const initialState = {
    positions: positions,
    pending: false,
    error: null
}

export default function positionReducer(state = initialState, { type, payload }) {
    switch (type) {
        case FETCH_POSITIONS_PENDING:
            return {
                ...state,
                pending: true,
                error: null
            }
        case FETCH_POSITIONS_SUCCESS:
            return {
                ...state,
                positions: payload,
                pending: false,
                error: null
            }
        case FETCH_POSITIONS_ERROR:
            return {
                ...state,
                pending: false,
                error: payload
            }
        default:
            return state;
    }
}
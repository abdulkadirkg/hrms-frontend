import PositionService from "../../services/positionService";

export const FETCH_POSITIONS_PENDING = "FETCH_POSITIONS_PENDING";
export const FETCH_POSITIONS_SUCCESS = "FETCH_POSITIONS_SUCCESS";
export const FETCH_POSITIONS_ERROR = "FETCH_POSITIONS_ERROR";

export function fetchPositionsPending() {
    return {
        type: FETCH_POSITIONS_PENDING
    }
}
export function fetchPositionsSuccess(position) {
    return {
        type: FETCH_POSITIONS_SUCCESS,
        payload: position
    }
}
export function fetchPositionsError(error) {
    return {
        type: FETCH_POSITIONS_ERROR,
        payload: error
    }
}

//-------

export const _fetchPositions = () => {
    return async dispatch => {
        let positionsService = new PositionService();
        dispatch(fetchPositionsPending());
        await positionsService.getPositions().then(response => {
            dispatch(fetchPositionsSuccess(response.data.data))
        }).catch(error => {
            dispatch(fetchPositionsError(error.message))
        })
    }
}
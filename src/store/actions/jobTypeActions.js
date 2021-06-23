import JobTypeService from "../../services/jobTypeService";
export const FETCH_JOBTYPES_PENDING = "FETCH_JOBTYPES_PENDING";
export const FETCH_JOBTYPES_SUCCESS = "FETCH_JOBTYPES_SUCCESS";
export const FETCH_JOBTYPES_ERROR = "FETCH_JOBTYPES_ERROR";

export function fetchJobTypesPending() {
    return {
        type: FETCH_JOBTYPES_PENDING
    }
}
export function fetchJobTypesSuccess(jobTypes) {
    return {
        type: FETCH_JOBTYPES_SUCCESS,
        payload: jobTypes
    }
}
export function fetchJobTypesError(error) {
    return {
        type: FETCH_JOBTYPES_ERROR,
        payload: error
    }
}

//-------

export const _fetchJobTypes = () => {
    return async dispatch => {
        let jobTypeService = new JobTypeService();
        dispatch(fetchJobTypesPending());
        await jobTypeService.getJobTypes().then(response => {
            dispatch(fetchJobTypesSuccess(response.data.data))
        }).catch(error => {
            dispatch(fetchJobTypesError(error.message))
        })
    }
}
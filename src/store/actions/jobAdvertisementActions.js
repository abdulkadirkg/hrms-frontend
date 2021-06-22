import AdvertisementService from "../../services/advertisementService";

export const FETCH_ADVERTISEMENTS_PENDING = "FETCH_ADVERTISEMENTS_PENDING";
export const FETCH_ADVERTISEMENTS_SUCCESS = "FETCH_ADVERTISEMENTS_SUCCESS";
export const FETCH_ADVERTISEMENTS_ERROR = "FETCH_ADVERTISEMENTS_ERROR";

export function fetchAdvertisementsPending() {
    return {
        type: FETCH_ADVERTISEMENTS_PENDING
    }
}
export function fetchAdvertisementsSuccess(advertisements) {
    return {
        type: FETCH_ADVERTISEMENTS_SUCCESS,
        payload: advertisements
    }
}
export function fetchAdvertisementsError(error) {
    return {
        type: FETCH_ADVERTISEMENTS_ERROR,
        payload: error
    }
}

//-------

export const _fetchAdvertisements = () => {
    return async dispatch => {
        let advertisementService = new AdvertisementService();
            dispatch(fetchAdvertisementsPending());
            await advertisementService.getAdvertisements().then(response => {
                dispatch(fetchAdvertisementsSuccess(response.data.data))
            }).catch(error=>{
                dispatch(fetchAdvertisementsError(error.message))
            })

    }
}
export const GET_ADVERTISEMENTS = "GET_ADVERTISEMENTS";
export const SET_ADVERTISEMENTS = "SET_ADVERTISEMENTS";

export function setAdvertisements(advertisements) {
    return {
        type: SET_ADVERTISEMENTS,
        payload: advertisements
    }
}

export function getAdvertisements(advertisements) {
    return {
        type: GET_ADVERTISEMENTS,
        payload: advertisements
    }
}

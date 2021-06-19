export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";
export const REMOVE_FROM_FAVORITE = "REMOVE_FROM_FAVORITE";
export const GET_FAVORITE = "GET_FAVORITE";

export function addToFavorite(advertisement) {
    return {
        type: ADD_TO_FAVORITE,
        payload: advertisement
    }
}

export function removeFromFavorite(advertisement) {
    return {
        type: REMOVE_FROM_FAVORITE,
        payload: advertisement
    }
}
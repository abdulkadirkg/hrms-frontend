import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from "../actions/favoriteActions";
import { favoriteItems } from "../initialValues/favoriteItems";

const initialState = {
    favoriteItems: favoriteItems,
}

export default function favoriteReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_TO_FAVORITE:
            let advertisement = state.favoriteItems.find((f) => f.advertisement.id === payload.id)
            if (!advertisement) {
                return {
                    ...state,
                    favoriteItems: [...state.favoriteItems, { advertisement: payload }]
                }
            } else {
                type = REMOVE_FROM_FAVORITE
            }
        case REMOVE_FROM_FAVORITE:
            return {
                ...state,
                favoriteItems: state.favoriteItems.filter((f) => f.advertisement.id !== payload.id)
            }
        default:
            return state;
    }
}
import { FETCH_CATEGORIES, SELECT_CATEGORY } from "../../types";

const initialState = {};

/* Categories Reducer
---------------------------------------------------- */
export function categoriesReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_CATEGORIES:
            return action.payload;
        default:
            return state;
    }
}

/* Selected Categories Reducer
---------------------------------------------------- */
export function selectedCategoryReducer(state = initialState, action) {
    switch (action.type) {
        case SELECT_CATEGORY:
            return action.payload || {};
        default:
            return state;
    }
}
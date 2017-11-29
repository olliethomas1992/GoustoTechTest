import { FETCH_CATEGORIES } from "../../types";

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES:
            return action.payload;
        default:
            return state;
    }
}
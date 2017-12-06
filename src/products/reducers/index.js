import { FETCH_PRODUCTS } from "../../types";

const initialState = [];

/* Products Reducer
---------------------------------------------------- */
export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return action.payload;
        default:
            return state;
    }
};

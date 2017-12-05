import ProductsReducer from "../reducers";
import { FETCH_PRODUCTS } from "../../types";

describe("Products Reducer", () => {
    test("Should return initial state if no action type", () => {
        expect(ProductsReducer(undefined, { type: '', payload: ''})).toEqual([]);
    });

    test("Should return the correct payload for the FETCH_PRODUCTS type", () => {
        expect(ProductsReducer(undefined, mockAction)).toEqual([{ title: 'wine' }]);
    });
});

const mockAction = {
    type: FETCH_PRODUCTS,
    payload: [
        { title: 'wine' }
    ]
};

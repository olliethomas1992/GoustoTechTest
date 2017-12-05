import { categoriesReducer, selectedCategoryReducer } from "../reducers";
import { FETCH_CATEGORIES, SELECT_CATEGORY } from "../../types";

describe("Categories Reducer", () => {
    test("Should return initial state if no action type", () => {
        expect(
            categoriesReducer(undefined, {
                type: "",
                payload: ""
            })
        ).toEqual({});
    });

    test("Should return the correct payload for the FETCH_CATEGORIES type", () => {
        expect(categoriesReducer(undefined, mockFetchCategoriesAction)).toEqual(
            [{ title: "Food & Wine" }]
        );
    });
});

describe("Selected Categories Reducer", () => {
    test("Should return initial state if no action type", () => {
        expect(
            selectedCategoryReducer(undefined, {
                type: "",
                payload: ""
            })
        ).toEqual({});
    });

    test("Should return the correct payload for the SELECT_CATEGORY type", () => {
        expect(
            selectedCategoryReducer(undefined, mockSelectedCategoryAction)
        ).toEqual({ title: "Food & Wine" });
    });
});

const mockFetchCategoriesAction = {
    type: FETCH_CATEGORIES,
    payload: [{ title: "Food & Wine" }]
};

const mockSelectedCategoryAction = {
    type: SELECT_CATEGORY,
    payload: {
        title: "Food & Wine"
    }
};

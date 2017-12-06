import axios from 'axios';
import { fetchCategories, transformCategories, selectCategory, API_URL } from '../actions';
import { FETCH_CATEGORIES, SELECT_CATEGORY } from '../../types';

describe("Category Actions", () => {
    test("Should fetch categories", () => {
        let mockFetchCategories = jest.fn(() => {
            return Promise.resolve({ data: { data: mockCategories }});
        });
        axios.get = mockFetchCategories;

        return fetchCategories().then(data => {
            expect(mockFetchCategories).toHaveBeenCalledWith(API_URL);
            expect(data).toEqual({
                type: FETCH_CATEGORIES,
                payload: mockCategories
            })
        }) 
    });

    test("Should Transform the categories and add a slug", () => {
        const transformedCategories = transformCategories(mockCategories);
        expect(transformedCategories[0]).toHaveProperty('slug', 'drinks-cabinet');
    });

    test("Should return the correct payload for a selected category", () => {
        expect(selectCategory(mockSelectedCategory)).toEqual({
            type: SELECT_CATEGORY,
            payload: mockSelectedCategory
        });
    });
});


const mockSelectedCategory = {
    id: "faeedf8a-bf7d-11e5-a0f9-02fada0dd3b9",
    title: "Drinks Cabinet",
    box_limit: 7,
    is_default: false,
    recently_added: false,
    hidden: false,
    slug: 'drinks-cabinet'
};
const mockCategories = [
    {
        id: "faeedf8a-bf7d-11e5-a0f9-02fada0dd3b9",
        title: "Drinks Cabinet",
        box_limit: 7,
        is_default: false,
        recently_added: false,
        hidden: false
    },
    {
        id: "529ea59e-bf7e-11e5-840e-02fada0dd3b9",
        title: "Kitchenware",
        box_limit: 6,
        is_default: false,
        recently_added: false,
        hidden: false
    },
    {
        id: "fec10d0e-bf7d-11e5-90a9-02fada0dd3b9",
        title: "Desserts",
        box_limit: 2,
        is_default: false,
        recently_added: false,
        hidden: false
    }
];
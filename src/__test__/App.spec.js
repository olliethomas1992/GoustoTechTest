import React, { Component } from "react";
import { App, mapStateToProps } from "../App";

describe("App Component", () => {
    function setup() {
        return shallow(
            <App
                match={mockParams}
                fetchCategories={mockFetchCategories}
                fetchProducts={mockFetchProducts}
                categories={mockCategories}
                selectCategory={mockSelectCategory}
            />
        );
    }

    test("Should render the App Component", () => {
        const wrapper = setup();
        expect(wrapper.find(".container").length).toBe(1);
    });

    test("Should fetch products and categories when the component mounts", () => {
        const wrapper = setup();
        expect(mockFetchCategories).toHaveBeenCalled();
        expect(mockFetchProducts).toHaveBeenCalled();
    });

    test("Handle select category is called when new props are received", () => {
        const wrapper = setup();
        let mockHandleSelectCategory = jest.fn();
        wrapper.instance().handleSelectCategory = mockHandleSelectCategory;

        wrapper.setProps({
            mockParams
        });
        expect(mockHandleSelectCategory).toHaveBeenCalled();
    });

    test("Should only selectCategory when there are categories to choose from", () => {
        const wrapper = setup();
        wrapper.setProps({
            selectCategory: jest.fn(() => "categories")
        });
        expect(wrapper.instance().handleSelectCategory()).toEqual("categories");
        wrapper.setProps({
            categories: []
        });
        expect(wrapper.instance().handleSelectCategory()).toEqual(false);
    });

    test("Should map state to props", () => {
        expect(
            mapStateToProps({
                categories: mockCategories
            })
        ).toEqual({ categories: mockCategories });
    });
});

const mockParams = {
    params: {
        id: "drinks-cabinet"
    }
};

const mockFetchProducts = jest.fn(() => {
    return Promise.resolve([
        {
            id: "1907b434-f71d-11e5-887e-02787aad01f3",
            sku: "AP-ACH-WIN-WHI-06-P",
            title: "Camino Real Blanco Rioja"
        }
    ]);
});

const mockSelectCategory = () => {
    return mockCategories[0];
};

const mockFetchCategories = jest.fn(() => {
    return Promise.resolve(mockCategories);
});

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

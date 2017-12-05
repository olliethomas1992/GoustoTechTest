import React, { Component } from "react";
import { Header, mapStateToProps } from "../components/Header";

describe("Header Component", () => {
    test("Renders the Header component without categories", () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find(".menu").length).toBe(1);
        expect(wrapper.find(".menu__menu-item").text()).toBe("Loading...");
    });

    test("Render Header with categories", () => {
        const { slug, categories } = mockState;
        const wrapper = shallow(
            <Header slug={"drinks-cabinet"} categories={categories} />
        );
        expect(wrapper.find(".menu").length).toBe(1);
        expect(wrapper.find(".menu__menu-item").length).toBe(3);
    });

    test("Correctly maps state to props", () => {
        expect(mapStateToProps(mockState)).toEqual({
            categories: mockState.categories
        });
    });
});

const mockState = {
    slug: "drinks-cabinet",
    categories: [
        {
            id: "faeedf8a-bf7d-11e5-a0f9-02fada0dd3b9",
            title: "Drinks Cabinet",
            box_limit: 7,
            is_default: false,
            recently_added: false,
            hidden: false,
            slug: "drinks-cabinet"
        },
        {
            id: "529ea59e-bf7e-11e5-840e-02fada0dd3b9",
            title: "Kitchenware",
            box_limit: 6,
            is_default: false,
            recently_added: false,
            hidden: false,
            slug: "kitchenware"
        },
        {
            id: "fec10d0e-bf7d-11e5-90a9-02fada0dd3b9",
            title: "Desserts",
            box_limit: 2,
            is_default: false,
            recently_added: false,
            hidden: false,
            slug: "desserts"
        }
    ]
};

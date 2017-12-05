import React, { Component } from "react";
import { ProductsList, mapStateToProps } from "../components/ProductsList";

describe("ProductList Component", () => {
    test("Renders a ProductList", () => {
        const { selectedCategory, products } = mockState;
        const wrapper = shallow(
            <ProductsList
                selectedCategory={selectedCategory}
                products={products}
            />
        );
        expect(wrapper.find("input.search").length).toBe(1);
        expect(wrapper.find("ul.products").length).toBe(1);
    });

    test("Renders all products if there is no selected Category", () => {
        const { selectedCategory, products } = mockState;
        const wrapper = shallow(<ProductsList selectedCategory={{}} />);
        wrapper.setProps({ products });
        expect(wrapper.find("ul.products").children()).toHaveLength(3);
    });

    test("Renders only products that match the selected Category", () => {
        const { selectedCategory, products } = mockState;
        const wrapper = shallow(
            <ProductsList selectedCategory={selectedCategory} />
        );
        wrapper.setProps({ products });
        expect(wrapper.find("ul.products").children()).toHaveLength(2);
    });

    test("Correctly Maps state to props", () => {
        expect(mapStateToProps(mockState)).toEqual({
            products: mockState.products,
            selectedCategory: mockState.selectedCategory
        });
    });

    test("Categorise Products returns all products if category object is empty", () => {
        const { selectedCategory, products } = mockState;
        const wrapper = shallow(
            <ProductsList selectedCategory={selectedCategory} />
        );
        expect(wrapper.instance().categoriseProducts({}, products)).toEqual(
            products
        );
    });

    test("Categorise Products returns products from selectedCategory", () => {
        const { selectedCategory, products } = mockState;
        const wrapper = shallow(
            <ProductsList selectedCategory={selectedCategory} />
        );
        expect(
            wrapper.instance().categoriseProducts(selectedCategory, products)
        ).toEqual([products[0], products[1]]);
    });

    test("Filtered Products should be updated onInputChange", () => {
        const { selectedCategory, products } = mockState;
        const wrapper = shallow(
            <ProductsList
                selectedCategory={selectedCategory}
                products={products}
            />
        );
        wrapper.setState({ filteredProducts: products });
        wrapper.instance().onInputChange({ target: { value: "cam" } });
        expect(wrapper.state().filteredProducts).toEqual([products[0]]);
    });
});

const mockState = {
    selectedCategory: {
        id: "faeedf8a-bf7d-11e5-a0f9-02fada0dd3b9",
        title: "Drinks Cabinet",
        box_limit: 7,
        is_default: false,
        recently_added: false,
        hidden: false,
        slug: "drinks-cabinet"
    },
    products: [
        {
            id: "1907b434-f71d-11e5-887e-02787aad01f3",
            sku: "AP-ACH-WIN-WHI-06-P",
            title: "Camino Real Blanco Rioja",
            description:
                "This white Rioja goes particularly well with mildly spiced dishes, and will be great with chicken and fish recipes such as our Light Citrus Chicken. Notes of date and banana make it a flavoursome, interesting wine with just the right amount of complexity. ABV 12.5%",
            list_price: "7.95",
            is_vatable: true,
            is_for_sale: true,
            age_restricted: true,
            box_limit: "2",
            always_on_menu: false,
            created_at: "2016-03-31T08:46:45+0100",
            categories: [
                {
                    id: "faeedf8a-bf7d-11e5-a0f9-02fada0dd3b9",
                    title: "Drinks Cabinet",
                    box_limit: 7,
                    is_default: false,
                    recently_added: false,
                    hidden: false,
                    pivot: {
                        created_at: "2016-08-25T10:52:19+0100"
                    }
                },
                {
                    id: "785741fc-3854-11e6-87a5-06f9522b85fb",
                    title: "Large Alcohol",
                    box_limit: 2,
                    is_default: false,
                    recently_added: false,
                    hidden: true,
                    pivot: {
                        created_at: "2016-08-25T10:52:19+0100"
                    }
                }
            ],
            attributes: [
                {
                    id: "66f87c3e-c417-11e5-b4eb-02fada0dd3b9",
                    title: "Allergen",
                    unit: null,
                    value: "Sulphites"
                },
                {
                    id: "92b6203a-f5a2-11e5-8fd2-02216daf9ab9",
                    title: "Volume",
                    unit: "ml",
                    value: "750"
                }
            ],
            images: {
                "365": {
                    src:
                        "https://production-media.gousto.co.uk/cms/product-image-landscape/AddOns-Wines-CaminoReal_05730-x400.jpg",
                    url:
                        "https://production-media.gousto.co.uk/cms/product-image-landscape/AddOns-Wines-CaminoReal_05730-x400.jpg",
                    width: 400
                },
                "400": {
                    src:
                        "https://production-media.gousto.co.uk/cms/product-image-landscape/AddOns-Wines-CaminoReal_05730-x400.jpg",
                    url:
                        "https://production-media.gousto.co.uk/cms/product-image-landscape/AddOns-Wines-CaminoReal_05730-x400.jpg",
                    width: 400
                }
            },
            slug: "camino-real-blanco-rioja"
        },
        {
            id: "507e9a5e-f71d-11e5-a985-066f236a4b4b",
            sku: "AP-ACH-WIN-WHI-07-P",
            title: "Valle Berta Gavi",
            description:
                "Made from Cortese grapes harvested on the hills of Alessandria in Northern Italy, this elegant, dry white is at its best with our seafood or pork dishes. Citrus aromas of grapefruit and lime couple with white peach notes for a crisp, clean finish.\nABV 12%",
            list_price: "7.95",
            is_vatable: true,
            is_for_sale: true,
            age_restricted: true,
            box_limit: "1",
            always_on_menu: false,
            created_at: "2016-03-31T08:48:18+0100",
            categories: [
                {
                    id: "faeedf8a-bf7d-11e5-a0f9-02fada0dd3b9",
                    title: "Drinks Cabinet",
                    box_limit: 7,
                    is_default: false,
                    recently_added: false,
                    hidden: false,
                    pivot: {
                        created_at: "2016-08-25T10:53:15+0100"
                    }
                },
                {
                    id: "785741fc-3854-11e6-87a5-06f9522b85fb",
                    title: "Large Alcohol",
                    box_limit: 2,
                    is_default: false,
                    recently_added: false,
                    hidden: true,
                    pivot: {
                        created_at: "2016-08-25T10:53:15+0100"
                    }
                }
            ],
            attributes: [
                {
                    id: "66f87c3e-c417-11e5-b4eb-02fada0dd3b9",
                    title: "Allergen",
                    unit: null,
                    value: "Sulphites"
                },
                {
                    id: "92b6203a-f5a2-11e5-8fd2-02216daf9ab9",
                    title: "Volume",
                    unit: "ml",
                    value: "750"
                }
            ],
            images: {
                "365": {
                    src:
                        "https://production-media.gousto.co.uk/cms/product-image-landscape/Wines-White-Gavi_0022-2-2-x400.jpg",
                    url:
                        "https://production-media.gousto.co.uk/cms/product-image-landscape/Wines-White-Gavi_0022-2-2-x400.jpg",
                    width: 400
                },
                "400": {
                    src:
                        "https://production-media.gousto.co.uk/cms/product-image-landscape/Wines-White-Gavi_0022-2-2-x400.jpg",
                    url:
                        "https://production-media.gousto.co.uk/cms/product-image-landscape/Wines-White-Gavi_0022-2-2-x400.jpg",
                    width: 400
                }
            },
            slug: "valle-berta-gavi"
        },
        {
            id: "e086ae22-beb3-11e5-9c03-02fada0dd3b9",
            sku: "AP-KDN-UTG-03",
            title: "Joseph Joseph - Elevate Steel Tongs ",
            description:
                "These super tongs put hygiene first - an innovative weighted handle with integrated tool rest keeps mess at bay. Gently spring-loaded and comfortable to hold, they're heat resistant up to a smoking 270ºC.",
            list_price: "11.95",
            is_vatable: true,
            is_for_sale: true,
            age_restricted: false,
            box_limit: "2",
            always_on_menu: false,
            created_at: "2016-01-20T14:30:00+0000",
            categories: [
                {
                    id: "529ea59e-bf7e-11e5-840e-02fada0dd3b9",
                    title: "Kitchenware",
                    box_limit: 6,
                    is_default: false,
                    recently_added: false,
                    hidden: false,
                    pivot: {
                        created_at: "2016-08-22T13:44:08+0100"
                    }
                }
            ],
            attributes: [],
            images: {
                "365": {
                    src:
                        "https://production-media.gousto.co.uk/cms/product-image-landscape/AP-KDN-UTG-03-x400.jpg",
                    url:
                        "https://production-media.gousto.co.uk/cms/product-image-landscape/AP-KDN-UTG-03-x400.jpg",
                    width: 400
                },
                "400": {
                    src:
                        "https://production-media.gousto.co.uk/cms/product-image-landscape/AP-KDN-UTG-03-x400.jpg",
                    url:
                        "https://production-media.gousto.co.uk/cms/product-image-landscape/AP-KDN-UTG-03-x400.jpg",
                    width: 400
                }
            },
            slug: "joseph-joseph-elevate-steel-tongs"
        }
    ]
};

import React, {Component} from 'react';
import ProductItem from '../components/ProductItem'; 

describe("ProductItem Component", () => {
    test("Renders a ProductItem", () => {
        const product = mockState.products[0];
        const wrapper = shallow(<ProductItem product={product}/>);
        expect(wrapper.find('.products__product-item').length).toBe(1);
    });

    test("HandleProductClick changes the toggleDesc state", () => {
        const product = mockState.products[0];
        const wrapper = shallow(<ProductItem product={product} />);
        expect(wrapper.state().toggleDesc).toBe(false);
        wrapper.find('a').simulate('click', { preventDefault() {}});
        expect(wrapper.state().toggleDesc).toBe(true);
    });

    test("ProductItem displays correctly when toggleDesc is true", () => {
        const product = mockState.products[0];
        const wrapper = shallow(<ProductItem product={product} />);
        expect(wrapper.find("a.btn-link.active").length).toBe(0);
        expect(wrapper.find("div.desc").length).toBe(0);
        wrapper.setState({ toggleDesc: true });
        expect(wrapper.find('a.btn-link.active').length).toBe(1);
        expect(wrapper.find("div.desc").length).toBe(1);
    });
});


const mockState = {
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
        }
    ]
};
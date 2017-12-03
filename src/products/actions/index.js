import axios from "axios";
import slugify from "slugify";
import _ from "lodash";

import { FETCH_PRODUCTS, FILTER_PRODUCTS } from "../../types";

const API_URL = `https://api.gousto.co.uk/products/v2.0/products?includes[]=categories&includes[]=attributes&sort=position&image_sizes[]=365&image_sizes[]=400&period_id=120`;

export function fetchProducts() {
    return axios.get(API_URL).then(({ data: { data } }) => {
        return {
            type: FETCH_PRODUCTS,
            payload: transformProducts(data)
        };
    });
}

function transformProducts(products) {
    return products.map(product => {
        const slug = slugify(product.title, {
            replacement: "-",
            remove: null,
            lower: true
        });
        product.slug = slug;
        return product;
    });
}

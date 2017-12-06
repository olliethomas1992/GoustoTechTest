import axios from "axios";

import { FETCH_PRODUCTS, FILTER_PRODUCTS } from "../../types";

export const API_URL = `https://api.gousto.co.uk/products/v2.0/products?includes[]=categories&includes[]=attributes&sort=position&image_sizes[]=365&image_sizes[]=400&period_id=120`;

/* Fetch Products
---------------------------------------------------- */
export function fetchProducts() {
    return axios.get(API_URL).then(({ data: { data } }) => {
        return {
            type: FETCH_PRODUCTS,
            payload: data
        };
    });
}

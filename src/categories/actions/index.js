import axios from "axios";
import slugify from "slugify";
import _ from 'lodash';

import { FETCH_CATEGORIES } from "../../types";

const API_URL = `https://api.gousto.co.uk/products/v2.0/categories`;

export function fetchCategories() {
    return axios.get(API_URL).then(({ data: { data } }) => {
        return {
            type: FETCH_CATEGORIES,
            payload: _.mapKeys(transformCategories(data), 'slug')
        };
    });
}

function transformCategories(categories) {
    return categories.map(category => {
        const slug = slugify(category.title, {
            replacement: "-",
            remove: null,
            lower: true
        });
        category.slug = slug;
        return category;
    });
}

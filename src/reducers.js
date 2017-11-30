import { combineReducers } from "redux";
import CategoriesReducer from './categories/reducers';
import ProductsReducer from './products/reducers';


const rootReducer = combineReducers({
    categories: CategoriesReducer,
    products: ProductsReducer
});

export default rootReducer;
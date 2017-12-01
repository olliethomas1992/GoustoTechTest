import { combineReducers } from "redux";
import { categoriesReducer, selectedCategoryReducer } from "./categories/reducers";
import ProductsReducer from './products/reducers';


const rootReducer = combineReducers({
    categories: categoriesReducer,
    selectedCategory: selectedCategoryReducer,
    products: ProductsReducer
});

export default rootReducer;
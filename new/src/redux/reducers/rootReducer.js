import { combineReducers } from "redux";
import {getCategories} from './categoryReducer';
import {getCategoriesById} from './categoryIdReducer';

export const rootReducer = combineReducers({
    getCategories,
    getCategoriesById
});
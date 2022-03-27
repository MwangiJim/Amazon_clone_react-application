import { combineReducers } from "redux";
import { basketReducer } from "./reducer";

export const reducers = combineReducers({
    cartProducts:basketReducer
})
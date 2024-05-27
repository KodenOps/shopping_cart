import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Features/Cart/cartSlice'
import modalReducer from "./Features/Modal/modalSlice";

export const store = configureStore({
    reducer: {
        carts: cartReducer,
        modal: modalReducer
    },
})
import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./auth/slice";
import ShoppingCartSlice from "./shoppingCart/slice";

export const store = configureStore({
    reducer: {
        AuthSlice,
        ShoppingCartSlice
    }
})
import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./slice";

export const store = configureStore({
    reducer: {
        AuthSlice
    }
})
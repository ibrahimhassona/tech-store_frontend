import { configureStore } from "@reduxjs/toolkit";
import cartData from "./cartSlice/cartSlice";



export const store = configureStore({
    reducer : {
        cart: cartData

    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
import { configureStore } from '@reduxjs/toolkit'
import appReducer from "./slices/appSlice"
import productSlice from "./slices/productSlice"
export const store = configureStore({
    reducer: {
        app: appReducer,
        product: productSlice
    },
})
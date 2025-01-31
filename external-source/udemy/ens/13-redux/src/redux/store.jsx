import { configureStore } from "@reduxjs/toolkit"
import slice from "./counterSlice"

export const store = configureStore({
    reducer: {
        counter: slice
    },
})
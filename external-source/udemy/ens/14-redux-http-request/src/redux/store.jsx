import { configureStore } from "@reduxjs/toolkit"
import user from "./userSlice"

export const store = configureStore({
    reducer: {
        user: user
    },
})
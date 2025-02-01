import { configureStore } from "@reduxjs/toolkit";
import authorizationSlice from "../features/authorizationSlice"
import newsSlice from "../features/newsSlice"

export const store = configureStore({
    reducer: {
        authorizationSlice: authorizationSlice,
        newsSlice: newsSlice,

    }

})


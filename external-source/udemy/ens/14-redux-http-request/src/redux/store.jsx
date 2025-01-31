import { configureStore } from '@reduxjs/toolkit'
import userReducer from "../redux/userSlice"

export const store = configureStore({
    reducer: {
        user: userReducer
    },
})
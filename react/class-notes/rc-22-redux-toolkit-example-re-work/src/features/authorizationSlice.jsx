import { createSlice } from '@reduxjs/toolkit'

const authorizationSlice = createSlice({
    name: "authorizationSlice",
    initialState: {
        email: "",
        password: ""
    },
    reducers: {
        createUser: (state, { payload }) => { }
    },
    extraReducers: {}
})

export const { createUser } = authorizationSlice.actions;

export default authorizationSlice.reducer;
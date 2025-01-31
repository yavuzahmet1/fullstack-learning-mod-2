import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"


const initialState = {
    users: [],
    loading: false
}

export const getAllUser = createAsyncThunk("users", async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(response.data)
    return response.data;
})

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // HTTP isteği olmaz ise kullanılır  
    },
    extraReducers: (builder) => {
        // HTTP isteklerinde kullanılır
        //başarılı olursa fullfilled
        //state : dediğimiz yer yukarıdaki : initialState
        //action : yukarıdaki getAllUser daki return olarak dönen return response.data'yi belirtir.
        builder.addCase(getAllUser.fulfilled, (state, action) => {
            state.users = action.payload
            //users:[] boş duruyordu işte o boş olan statetimin içine action ile yakalanan return response.data ile dönen users verisi ile dolduruluyor, buradaki payloadın görevi action içindeki dataya ulaşmış oluyoruz sonrasında users:[] i bu şekilde dolduruyor. 
        })
    }
})


export const { } = userSlice.actions

export default userSlice.reducer
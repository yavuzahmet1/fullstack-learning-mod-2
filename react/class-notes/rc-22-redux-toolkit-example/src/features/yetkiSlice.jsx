import { createSlice } from "@reduxjs/toolkit";

const yetkiSlice=createSlice({

    name:"yetkiSlice",
initialState:{
email:"",
password:""

},

reducers:{

kullaniciOlustur:(state,{payload})=>{

console.log(payload);//{email:osman, password:1234}

 state.email=payload.email
state.password=payload.password
},

kullaniciSil:(state)=>{

state.email=""
state.password=""
}


}

})

export const {kullaniciOlustur,kullaniciSil}=yetkiSlice.actions

export default yetkiSlice.reducer;
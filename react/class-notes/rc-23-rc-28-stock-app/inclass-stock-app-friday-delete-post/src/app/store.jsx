import { configureStore } from "@reduxjs/toolkit";
// import { createStore } from 'redux'
import authReducer from "../features/authSlice";
import stockReducer from "../features/stockSlice"
import { persistStore, persistReducer,REHYDRATE,FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedReducer,
    stock:stockReducer
  },
 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),


  devTools: process.env.NODE_ENV !== "production",
});

export let persistor = persistStore(store)  // named export istediğimiz kadar bu şekilde çıkış yapılabilir, import ederken {} içinde alınır


export default store;   // export default 1 tane olabilir

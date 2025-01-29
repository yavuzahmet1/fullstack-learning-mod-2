import { combineReducers, legancy_createStore as createStore } from "redux"

const allReducer = combineReducer({

    counterReducer: counterReducer,
    todoReducer: todoReducer
})
import {configureStore } from "@reduxjs/toolkit" 
import { profileReducer, userReducer } from "./reducers/userReducer";


export const store = configureStore({
    reducer:{
        user:userReducer,
        profile:profileReducer,
    },
})

export default store;
export const server = 'http://localhost:9000'
import reducerUser from "./reducers/ReducerUser";
import { configureStore } from "@reduxjs/toolkit";

export const store= configureStore({
    reducer:{
        user:reducerUser
    }
})
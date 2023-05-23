import { configureStore } from "@reduxjs/toolkit";
import seasonReducer from "./seasons/seasonSlice";

const store = configureStore({
    reducer: {
        seasons: seasonReducer
    }
})

export default store
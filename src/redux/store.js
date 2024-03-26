import { configureStore } from "@reduxjs/toolkit";
import todoStore from "./reducer/todoStore";
import filterSlice from "./reducer/filter-slice";


export const store = configureStore({
    reducer: {
        todo: todoStore,
        filter: filterSlice,
    }
});
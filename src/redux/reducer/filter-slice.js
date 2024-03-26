import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    dataAttribute: [],
}


export const FilterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        addFilter: (state, action) => {
            return { ...state, dataAttribute: { ...state.dataAttribute, [action.payload.name]: action.payload.value } }
        }
    }
});


export default FilterSlice.reducer;

export const { addFilter } = FilterSlice.actions;
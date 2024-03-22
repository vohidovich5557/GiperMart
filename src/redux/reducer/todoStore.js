import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    "users": [],
    "count": [],
};

export const todoStore = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addData: (state, action) => {
            const products = state.users.find((item) =>
                item.id === action.payload.id
            );
            if (!products) {
                return { ...state, users: [...state.users, action.payload] }
            }

            return state;
        },
    }
});


export default todoStore.reducer;
export const { addData } = todoStore.actions;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {  
    value: 0
}

export const counterSlice = createSlice({  
    name: "counter",
    initialState,  
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
});

// Correct export for actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Default export for the reducer
export default counterSlice.reducer;


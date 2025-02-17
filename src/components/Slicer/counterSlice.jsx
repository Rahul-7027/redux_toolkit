import { createSlice } from "@reduxjs/toolkit";

const initialSate = {
    value: 0
}

export const counterSlice = () => createSlice({
    name: "counter",
    initialSate,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer

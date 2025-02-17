import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../Slicer/counterSlice";



export const store = configureStore({
    reducer: {
        counter: counterSlice,
    },
})
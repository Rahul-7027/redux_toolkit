import counterSlice from "../Slicer/counterSlice";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
    reducer: {
        counter: counterSlice,
    },
})
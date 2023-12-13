import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice/counterSlice";
import todoSlice from "./slice/todoSlice";

const store = configureStore({
    reducer: {
        counter: counterSlice,
        todos: todoSlice
    }
})
export default store
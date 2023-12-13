import { configureStore, createAsyncThunk } from "@reduxjs/toolkit"
import counterSlice from "./counterSlice"
import basketSlice from "./basketSlice"
const store = configureStore({
    reducer: {
        counter: counterSlice,
        basket: basketSlice
    }
})
export default store
import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "./slices/productsSlice";

const store = configureStore({
    reducer: {
        'products': ProductsSlice
    }
})
export default store
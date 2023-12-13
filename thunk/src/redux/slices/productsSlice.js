import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
    const response = await axios.get("https://northwind.vercel.app/api/products")
    return response.data
})
export const postProduct = createAsyncThunk("postProducts", async (data) => {
    try {
        const response = await axios.post("https://northwind.vercel.app/api/products", data)
        return response.data
    } catch (error) {
        return error.message
    }
})
export const editProduct = createAsyncThunk('editProduct', async (id) => {
    try {
        const response = await axios.put(`https://northwind.vercel.app/api/products/${id}`)
        return response.data
    } catch (err) {
        return err.message
    }
})
export const deleteProduct = createAsyncThunk('deleteProduct', async (id) => {
    try {
        const response = axios.delete(`https://northwind.vercel.app/api/products/${id}`)
        return response.data
    } catch (error) {
        return error.message
    }

})
const ProductsSlice = createSlice({
    name: 'products',
    initialState: {
        error: '',
        data: [],
        loading: true,
        basketItems: []
    },
    reducers: {
        addToBasket: (state, action) => {
            state.basketItems = [...state.basketItems, action.payload]
        },
        deleteFromBasket: (state, action) => {
            const target = state.basketItems.find(item => item.id == action.payload)
            const indexOfTarget = state.basketItems.indexOf(target)
            state.basketItems.splice(indexOfTarget, 1)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.loading = true
            state.error = ''
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = ''
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false
            state.error = 'data get eden zaman error yarandi !'
        })
        builder.addCase(postProduct.pending, (state, action) => {
            state.loading = true
            state.error = ''
        })
        builder.addCase(postProduct.fulfilled, (state, action) => {
            state.data.push(action.payload)
        })
        builder.addCase(postProduct.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
})
export default ProductsSlice.reducer
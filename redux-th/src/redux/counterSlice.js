import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

export const getData = createAsyncThunk("getData", async () => {
    const response = await axios.get("https://northwind.vercel.app/api/products")
    return response.data
})
export const postData = createAsyncThunk("postData", async (data) => {
    const response = await axios.post("https://northwind.vercel.app/api/products", data)
    return response.data
})
const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0.,
        data: [],
        loading: false,
        error: ""
    },
    reducers: {
        increase: (state) => {
            state.value = state.value + 1
        },
        decrease: (state) => {
            state.value = state.value - 1
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getData.pending, (state, action) => {
            state.loading = true
            state.error = ""
        })
        builder.addCase(getData.fulfilled, (state, action) => {
            state.loading = false
            state.error = ""
            state.data = action.payload
        })
        builder.addCase(getData.rejected, (state, action) => {
            state.error = action.payload.message
            state.loading = false
        })
        builder.addCase(postData.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(postData.fulfilled, (state, action) => {
            state.items = action.payload
            state.loading = false
            state.error = ""
        })
        builder.addCase(postData.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload.message
        })
    }
})
export const { increase, decrease } = counterSlice.actions
export default counterSlice.reducer
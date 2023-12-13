import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers: {
        increase: (state) => {
            state.value = state.value + 1
        },
        decrease: (state) => {
            state.value = state.value - 1
        },
        increaseByAmount: (state, action) => {
            state.value += parseInt(action.payload)
        },
        decreaseByAmount: (state, action) => {
            state.value = state.value - parseInt(action.payload)
        }
    }
})
export const { increase, decrease, increaseByAmount, decreaseByAmount } = counterSlice.actions
export default counterSlice.reducer
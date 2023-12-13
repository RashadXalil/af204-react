import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        items: localStorage.getItem("basketItems") ? JSON.parse(localStorage.getItem("basketItems")) : [],
    },
    reducers: {
        addToBasket: (state, action) => {
            const target = state.items.find(item => item.product.id == action.payload.id)
            if (target) {
                target.count = target.count + 1
                target.totalPrice = target.count * target.product.unitPrice
                state.items = [...state.items]
                localStorage.setItem("basketItems", JSON.stringify([...state.items]))
            }
            else {
                const basketItem = {
                    id: Date.now(),
                    product: action.payload,
                    count: 1,
                    totalPrice: action.payload.unitPrice
                }
                state.items = [...state.items, basketItem]
                localStorage.setItem("basketItems", JSON.stringify([...state.items]))
            }
        },
        deleteItemFromBasket: (state, action) => {
            const target = state.items.find(item => item.id == action.payload.id)
            const index = state.items.indexOf(target)
            state.items.splice(index, 1)
            localStorage.setItem("basketItems", [...state.items])
        },
        removeItemFromBasket: (state, action) => {
            const target = state.items.find(item => item.id == action.payload.id)
            if (target.count > 1) {
                target.count = target.count - 1
                target.totalPrice = target.count * target.product.unitPrice
                state.items = [...state.items]
                localStorage.setItem("basketItems", JSON.stringify([...state.items]))
            }
            else {
                const index = state.items.indexOf(target)
                state.items.splice(index, 1)
                localStorage.setItem("basketItems", [...state.items])
            }

        }
    }
})
export const { addToBasket, deleteItemFromBasket, removeItemFromBasket } = basketSlice.actions
export default basketSlice.reducer
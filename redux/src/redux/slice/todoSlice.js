import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchUser = createAsyncThunk("fetchUser", async () => {
    const response = await axios.get("https://northwind.vercel.app/api/products")
    return response.data
})
const todoSlice = createSlice({
    name: "todos",
    initialState: {
        items: localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [],
        data: []
    },
    reducers: {
        addTodo: (state, action) => {
            state.items.push({
                id: Date.now(),
                todo: action.payload, // rashad
                isComplated: false
            })
            localStorage.setItem("todos", JSON.stringify([...state.items]))
        },
        editTodo: (state, action) => {
            const target = state.items.find((item) => item.id == action.payload.id)
            target.todo = action.payload.editedTodo
            localStorage.setItem("todos", JSON.stringify([...state.items]))
        },
        complateTodo: (state, action) => {
            const target = state.items.find(item => item.id == action.payload)
            target.isComplated = !target.isComplated
            localStorage.setItem("todos", JSON.stringify([...state.items]))
        },
        deleteTodo: (state, action) => {
            const target = state.items.find(item => item.id == action.payload)
            const indexOfTarget = state.items.indexOf(target)
            state.items.splice(indexOfTarget, 1)
            localStorage.setItem("todos", JSON.stringify([...state.items]))
        },
        clearComplated: (state, action) => {
            state.items = state.items.filter(item => item.isComplated != true)
            localStorage.setItem("todos", JSON.stringify([...state.items]))
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state, action) => {

        })
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.data = action.payload
        })
    }

})
export const { addTodo, editTodo, complateTodo, deleteTodo, clearComplated } = todoSlice.actions
export default todoSlice.reducer
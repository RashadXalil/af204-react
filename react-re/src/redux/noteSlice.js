import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
    name: 'notes',
    initialState: {
        items: localStorage.getItem("notes") ? JSON.parse(localStorage.getItem('notes')) : []
    },
    reducers: {
        getNotesFromSTR: (state, action) => {
            JSON.parse(localStorage.getItem('notes'))
        },
        addNoteToSTR: (state, action) => {
            state.items = [...state.items, { ...action.payload }];
            localStorage.setItem('notes', JSON.stringify([...state.items]));
        },
        deleteNote: (state, action) => {
            const filteredNotes = state.items.filter((note) => note.id !== action.payload) // receives id
            state.items = [...filteredNotes]
            localStorage.setItem('notes', JSON.stringify([...filteredNotes]))
        }
    }
})

export const { getNotesFromSTR, addNoteToSTR, deleteNote, } = noteSlice.actions
export default noteSlice.reducer;
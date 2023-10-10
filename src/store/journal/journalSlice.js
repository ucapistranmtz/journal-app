import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null,
        // active: {
        //     id: 'ABC123',
        //     title: '',
        //     body: '',
        //     date: 1234567,
        //     imageUrls: [], // https://foto1.jpg, https://foto2.jpg, https://foto3.jpg
        // }
    },
    reducers: {
        savingNewNote: (state) => {
            state.isSaving=true;
            
         },
        addNewEmptyNote: (state, action) => {
            state.notes.push(action.payload);
            state.isSaving = false;
        },
        setActiveNote: (state, action) => { 
            state.active=action.payload
        },
        setNotes: (state, action) => {
           
            state.notes=action.payload
         },
        addNewNote: (state, action) => {

        },
        setSaving: (state, action) => { },
        updateNote: (state, action) => { },
        setPhotosToActiveNote: (state, action) => { },
        clearNotesLogout: (state, action) => { },
        deleteNoteById: (state, action) => { },
    }
});


// Action creators are generated for each case reducer function
export const {
    savingNewNote,
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    addNewNote,
    setSaving,
    updateNote,
    setPhotosToActiveNote,
    clearNotesLogout,
    deleteNoteById,
} = journalSlice.actions;
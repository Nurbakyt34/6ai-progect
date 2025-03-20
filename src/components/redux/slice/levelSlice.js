

import { createSlice } from '@reduxjs/toolkit';

const initialLessons = [
    { id: 1, level: 'A1' },
    { id: 2, level: 'A2' },
    { id: 3, level: 'B1' },
    { id: 4, level: 'B2' },
    { id: 5, level: 'C1' },
];


const levelSlice = createSlice({
    name: 'level',
    initialState: {
        lessons: initialLessons
    },
    reducers: {}
});

export const levelReducer = levelSlice.reducer

export const {} = levelSlice.actions

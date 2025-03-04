

import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialLessons = [
    { id: 1, level: 'A1' },
    { id: 2, level: 'A2' },
    { id: 3, level: 'B1' },
    { id: 4, level: 'B2' },
    { id: 5, level: 'C1' },
];


const lessonsSlice = createSlice({
    name: 'lessons',
    initialState: initialLessons,
    reducers: {}
});

export const store = configureStore({
    reducer: {

        lessons: lessonsSlice.reducer
    }
});

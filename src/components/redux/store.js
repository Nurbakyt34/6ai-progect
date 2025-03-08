
import { configureStore } from '@reduxjs/toolkit';
import { levelReducer } from './slice/levelSlice';


export const store = configureStore({
    reducer: {
        lessons: levelReducer,
        

    },


    
    
});

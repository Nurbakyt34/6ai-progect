
import { configureStore } from '@reduxjs/toolkit';
import { levelReducer } from './slice/levelSlice';
import { reviewsApi } from './service/reviewApi';


export const store = configureStore({
    reducer: {
        lessons: levelReducer,
        [reviewsApi.reducerPath]: reviewsApi.reducer 
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(reviewsApi.middleware)
});

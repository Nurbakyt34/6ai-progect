
import { createApi, } from '@reduxjs/toolkit/query/react'
import { baseQuery } from "./baseQuery"

export const reviewsApi = createApi({
    reducerPath: 'reviewsApi',
    baseQuery,
    endpoints: (build) => ({
        getReviews: build.query({
            query: ({ limit, offset }) =>
                `reviews?select=*&limit=${limit}&offset=${offset}`,
        }),
    }),
})

export const { useGetReviewsQuery } = reviewsApi
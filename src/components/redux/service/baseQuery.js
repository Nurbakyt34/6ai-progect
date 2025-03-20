
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { supabaseKey, supabaseUrl } from "../../../supabase";


export const baseQuery = fetchBaseQuery({
    baseUrl: supabaseUrl + "/rest/v1",
    prepareHeaders: (headers) => {
        headers.set("apikey", supabaseKey);
        return headers;
    },
});
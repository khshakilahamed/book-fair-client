import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/" }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: ({
        searchTerm,
        minPrice,
        maxPrice,
      }: {
        searchTerm?: string;
        minPrice?: number;
        maxPrice?: number;
      }) => {
        if (searchTerm !== undefined) {
          // Handle when searchTerm is defined
          let queryString = `/books/?searchTerm=${encodeURIComponent(
            searchTerm
          )}`;

          if (minPrice !== undefined) {
            queryString += `&minPrice=${minPrice}`;
          }

          if (maxPrice !== undefined) {
            queryString += `&maxPrice=${maxPrice}`;
          }

          return queryString;
        } else {
          // Handle when searchTerm is undefined
          let queryString = "/books/";

          if (minPrice !== undefined) {
            queryString += `?minPrice=${minPrice}`;
          }

          if (maxPrice !== undefined) {
            if (minPrice !== undefined) {
              queryString += `&maxPrice=${maxPrice}`;
            } else {
              queryString += `?maxPrice=${maxPrice}`;
            }
          }

          return queryString;
        }
      },
    }),
  }),
});

export const { useGetBooksQuery } = api;

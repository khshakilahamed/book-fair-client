import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IBook, IPostReview } from "../../types/bookType";

const token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/" }),
  tagTypes: ["books", "postReview"],
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
      providesTags: ["books"],
    }),

    postBook: builder.mutation<IBook, Partial<IBook>>({
      query: (bookData: IBook) => ({
        url: "/books",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: token!,
        },
        body: bookData,
      }),
      invalidatesTags: ["books"],
    }),

    getSingleBook: builder.query({
      query: (id: string) => `/books/${id}`,
    }),
    getReviews: builder.query({
      query: (id: string) => `/books/reviews/${id}`,
      providesTags: ["postReview"],
    }),
    postReview: builder.mutation({
      query: ({ id, data }: IPostReview) => ({
        url: `/books/review/${id}`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: token!,
        },
        body: data,
      }),
      invalidatesTags: ["postReview"],
    }),
    getMyBooks: builder.query({
      query: () => ({
        url: `/books/my-books`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: token!,
        },
      }),
      providesTags: ["books"],
    }),
    deleteBook: builder.mutation({
      query: (id: string) => ({
        url: `/books/${id}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: token!,
        },
      }),
      invalidatesTags: ["books"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  usePostBookMutation,
  useGetSingleBookQuery,
  useGetReviewsQuery,
  usePostReviewMutation,
  useGetMyBooksQuery,
  useDeleteBookMutation,
} = api;

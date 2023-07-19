import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IBook, IPostReview } from "../../types/globalType";

const token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://book-fair-server.vercel.app/api/v1/",
  }),
  tagTypes: [
    "books",
    "postReview",
    "wishlist",
    "reading-list",
    "postBook",
    "deleteBook",
  ],
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
      invalidatesTags: ["books", "postBook"],
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
      providesTags: ["postBook", "deleteBook"],
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
      invalidatesTags: ["books", "deleteBook"],
    }),
    getWishlist: builder.query({
      query: () => ({
        url: `/wishlist`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: token!,
        },
      }),
      providesTags: ["wishlist"],
    }),
    postWishlist: builder.mutation({
      query: (id: string) => ({
        url: `/wishlist`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: token!,
        },
        body: { book: id },
      }),
      invalidatesTags: ["wishlist"],
    }),
    deleteWishlist: builder.mutation({
      query: (id: string) => ({
        url: `/wishlist`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: token!,
        },
        body: { id },
      }),
      invalidatesTags: ["wishlist"],
    }),
    getReadingList: builder.query({
      query: () => ({
        url: `/reading-list`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: token!,
        },
      }),
      providesTags: ["reading-list"],
    }),
    postReadingList: builder.mutation({
      query: (id: string) => ({
        url: `/reading-list`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: token!,
        },
        body: { book: id },
      }),
      invalidatesTags: ["reading-list"],
    }),
    deleteReadingList: builder.mutation({
      query: (id: string) => ({
        url: `/reading-list`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: token!,
        },
        body: { id },
      }),
      invalidatesTags: ["reading-list"],
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
  useGetWishlistQuery,
  usePostWishlistMutation,
  useDeleteWishlistMutation,
  useGetReadingListQuery,
  usePostReadingListMutation,
  useDeleteReadingListMutation,
} = api;

import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";
import bookReducer from "../redux/features/book/bookSlice";
import userReducer from "../redux/features/user/userSlice";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    book: bookReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

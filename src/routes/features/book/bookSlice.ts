import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface InitialStateInterface {
  searchTerm: string;
  minPrice: number;
  maxPrice: number;
}

const initialState: InitialStateInterface = {
  searchTerm: "",
  minPrice: 0,
  maxPrice: 100000000,
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    searchBook: (state, { payload }: PayloadAction<string>) => {
      state.searchTerm = payload;
    },
    filterMinPrice: (state, { payload }: PayloadAction<number>) => {
      state.minPrice = payload;
    },
    filterMaxPrice: (state, { payload }: PayloadAction<number>) => {
      state.maxPrice = payload;
    },
  },
});

export const { searchBook, filterMinPrice, filterMaxPrice } = bookSlice.actions;

export default bookSlice.reducer;

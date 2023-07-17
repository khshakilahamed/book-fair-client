/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState } from "react";
import Book from "../../components/Book/Book";
import InputType from "../../components/InputType/InputType";
import { useGetBooksQuery } from "../../redux/api/apiSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { IBook } from "../../types/bookType";
import {
  filterMaxPrice,
  filterMinPrice,
} from "../../routes/features/book/bookSlice";

const Books = () => {
  const [minPriceInput, setMinPriceInput] = useState(0);
  const [maxPriceInput, setMaxPriceInput] = useState(100000000);

  const dispatch = useAppDispatch();

  const { searchTerm, maxPrice, minPrice } = useAppSelector(
    (state) => state.book
  );

  const { data: books, isLoading } = useGetBooksQuery({
    searchTerm,
    maxPrice,
    minPrice,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full h-[50vh]">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  const handlePriceFilter = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    console.log(minPriceInput, maxPriceInput);

    dispatch(filterMinPrice(minPriceInput));
    dispatch(filterMaxPrice(maxPriceInput));
  };

  return (
    <div className="max-w-[1280px] mx-auto gap-10">
      <div className="flex gap-10">
        <div className="w-[200px]">
          <form className="my-10 w-full" onSubmit={handlePriceFilter}>
            <div className="flex justify-between gap-5 w-full">
              <div className="w-[50%] flex flex-col">
                <InputType
                  label="Min Price"
                  id="minPrice"
                  name="minPrice"
                  type="number"
                  placeholder="Min Price"
                  className="border px-2 py-1 rounded-lg"
                  onChange={(e) => setMinPriceInput(Number(e.target.value))}
                />
              </div>
              <div className="w-[50%] flex flex-col">
                <InputType
                  label="Max Price"
                  id="maxPrice"
                  name="maxPrice"
                  type="number"
                  placeholder="Max Price"
                  className="border px-2 py-1 rounded-lg"
                  onChange={(e) => setMaxPriceInput(Number(e.target.value))}
                />
              </div>
            </div>
            <div className="text-center ">
              <button type="submit" className="btn btn-sm my-3">
                Apply filter
              </button>
            </div>
          </form>
        </div>
        <div className="my-10 flex flex-wrap justify-center gap-5">
          {books?.data.map((book: IBook) => (
            <Book key={book._id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;

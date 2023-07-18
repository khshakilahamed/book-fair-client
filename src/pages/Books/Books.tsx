/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState } from "react";
import Book from "../../components/Book/Book";
import InputType from "../../components/InputType/InputType";
import { useGetBooksQuery } from "../../redux/api/apiSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { IBook } from "../../types/globalType";
import {
  filterMaxPrice,
  filterMinPrice,
} from "../../redux/features/book/bookSlice";
import Spinner from "../../components/Spinner/Spinner";

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
    return <Spinner />;
  }

  const handlePriceFilter = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    console.log(minPriceInput, maxPriceInput);

    dispatch(filterMinPrice(minPriceInput));
    dispatch(filterMaxPrice(maxPriceInput));
  };

  return (
    <div className="max-w-[1280px] min-h-[53vh] mx-auto gap-10">
      <div className="flex flex-col lg:flex-row lg:gap-10">
        <div className=" lg:w-[200px] flex justify-center px-10 lg:px-0">
          <form
            className="my-10 lg:w-full flex lg:flex-col items-center h-[50px] lg:pl-5"
            onSubmit={handlePriceFilter}
          >
            <div className="flex lg:justify-between gap-5 w-full">
              <div className="lg:w-[50%] flex flex-col">
                <InputType
                  label="Min Price"
                  id="minPrice"
                  name="minPrice"
                  type="number"
                  labelClassName="hidden lg:flex"
                  placeholder="Min Price"
                  className="border px-2 py-1 rounded-lg w-[100px] lg:w-auto text-sm"
                  onChange={(e) => setMinPriceInput(Number(e.target.value))}
                />
              </div>
              <div className="lg:w-[50%] flex flex-col">
                <InputType
                  label="Max Price"
                  id="maxPrice"
                  name="maxPrice"
                  type="number"
                  labelClassName="hidden lg:flex"
                  placeholder="Max Price"
                  className="border px-2 py-1 rounded-lg w-[100px] lg:w-auto text-sm"
                  onChange={(e) => setMaxPriceInput(Number(e.target.value))}
                />
              </div>
            </div>
            <div className="">
              <button type="submit" className="btn btn-sm my-3">
                Apply filter
              </button>
            </div>
          </form>
        </div>
        <div className="lg:my-10 flex flex-wrap justify-center gap-5">
          {books?.data.map((book: IBook) => (
            <Book key={book._id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;

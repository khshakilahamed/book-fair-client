/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Book from "../../components/Book/Book";
import InputType from "../../components/InputType/InputType";
import { useGetBooksQuery } from "../../redux/api/apiSlice";
import { useAppSelector } from "../../redux/hook";
import { IBook } from "../../types/globalType";
import Spinner from "../../components/Spinner/Spinner";

const Books = () => {
  const { searchTerm } = useAppSelector((state) => state.book);

  const { data: books, isLoading } = useGetBooksQuery(
    {
      searchTerm,
    },
    {
      refetchOnMountOrArgChange: true,
      pollingInterval: 30000,
    }
  );

  if (isLoading) {
    return <Spinner />;
  }

  const handlePriceFilter = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // dispatch(filterMinPrice(minPriceInput));
    // dispatch(filterMaxPrice(maxPriceInput));
  };

  return (
    <div className="max-w-[1280px] min-h-[53vh] mx-auto gap-10">
      <div className="flex flex-col lg:flex-row lg:gap-10">
        {/* <div className="lg:w-[200px] flex justify-center px-10 lg:px-0">
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
        </div> */}
        <div className="flex flex-wrap justify-center gap-5 px-10 lg:px-0 my-10">
          {books?.data?.map((book: IBook) => (
            <Book key={book._id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
